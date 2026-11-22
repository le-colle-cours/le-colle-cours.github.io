/* Le Collé — service worker : application installable et lecture hors ligne.
   Pages, scripts et données : réseau d'abord (toujours à jour), cache si hors ligne.
   PDF : cache d'abord (lecture immédiate), mise à jour en arrière-plan. */
'use strict';
const APP = 'lc-app-v2';
const DOCS = 'lc-docs-v1';
const COQUILLE = [
  './', 'index.html', 'matiere.html', 'chapitre.html', 'lecteur.html', '404.html', 'manifest.webmanifest',
  'data/livres.js', 'data/sujets.js', 'assets/css/style.css',
  'assets/js/app.js', 'assets/js/accueil.js', 'assets/js/matiere.js', 'assets/js/chapitre.js',
  'assets/js/lecteur.js', 'assets/js/macros.js',
  'assets/vendor/katex/katex.min.css', 'assets/vendor/katex/katex.min.js', 'assets/vendor/katex/contrib/auto-render.min.js',
  'assets/vendor/pdfjs/pdf.min.js', 'assets/vendor/pdfjs/pdf.worker.min.js',
  'assets/img/favicon.svg', 'assets/img/icon-192.png', 'assets/img/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(COQUILLE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== APP && k !== DOCS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const estPdf = url => url.origin === location.origin && url.pathname.endsWith('.pdf');

async function reseauDabord(req) {
  const cache = await caches.open(APP);
  try {
    const rep = await fetch(req, { cache: 'no-cache' });
    if (rep.ok) cache.put(req, rep.clone());
    return rep;
  } catch (err) {
    const enCache = await cache.match(req) || await cache.match(req, { ignoreSearch: true });
    if (enCache) return enCache;
    if (req.mode === 'navigate') return (await cache.match('index.html')) || Response.error();
    throw err;
  }
}

async function pdfCacheDabord(req, e) {
  const cache = await caches.open(DOCS);
  const enCache = await cache.match(req, { ignoreSearch: true });
  const maj = fetch(req.url, { cache: 'no-cache' }).then(rep => {
    if (rep.ok && rep.status === 200) return cache.put(req.url, rep.clone()).then(() => rep);
    return rep;
  });
  if (enCache) { e.waitUntil(maj.catch(() => {})); return enCache; }
  return maj;
}

async function externeCacheDabord(req, e) {
  const cache = await caches.open(APP);
  const enCache = await cache.match(req);
  const maj = fetch(req).then(rep => { if (rep.ok || rep.type === 'opaque') cache.put(req, rep.clone()); return rep; });
  if (enCache) { e.waitUntil(maj.catch(() => {})); return enCache; }
  return maj;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (estPdf(url)) {
    if (req.headers.has('range')) return; // requêtes partielles : laissées au réseau
    e.respondWith(pdfCacheDabord(req, e));
  } else if (url.origin === location.origin) {
    e.respondWith(reseauDabord(req));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(externeCacheDabord(req, e));
  }
});
