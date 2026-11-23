/* Le Collé — fonctions communes : accès aux données, en-tête, pied de page, formules */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const params = new URLSearchParams(location.search);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const livre = id => LC.livres.find(l => l.id === id);
const matiere = id => LC.matieres.find(m => m.id === id);
const livresDe = idMatiere => LC.livres.filter(l => l.matiere === idMatiere);

const urlMatiere = id => `matiere.html?id=${encodeURIComponent(id)}`;
const urlChapitre = (l, n) => `chapitre.html?livre=${encodeURIComponent(l.id)}&n=${n}`;
/* lecteur : livre complet, ou un chapitre (pages debut..fin du livre) */
function urlLecteur(l, c, page) {
  const p = new URLSearchParams({ livre: l.id });
  if (c) p.set('n', c.n);
  if (page) p.set('page', page);
  return 'lecteur.html?' + p.toString();
}
const nomPdf = chemin => 'le-colle-' + chemin.split('/').slice(1).join('-');
const lienPdf = (chemin, texte, classe = 'dl') => `<a class="${classe}" href="${chemin}" download="${nomPdf(chemin)}">${texte}</a>`;
const titrePartie = t => t.replace(/^Partie\s+([IVX]+)\s+/, 'Partie $1 · ');

function renderMath(root) {
  if (!window.renderMathInElement || !root) return;
  renderMathInElement(root, {
    delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
    throwOnError: false,
    macros: { ...window.LC_MACROS }
  });
}

function cadre(courant) {
  const head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML = `<div class="wrap"><a class="logo" href="index.html">Le Collé<small>livres de cours</small></a>
    <nav class="site-nav" aria-label="Matières">${LC.matieres.map(m =>
      `<a href="${urlMatiere(m.id)}"${m.id === courant ? ' aria-current="page"' : ''}>${esc(m.titre)}</a>`).join('')}</nav></div>`;
  document.body.prepend(head);
  const foot = document.createElement('footer');
  foot.className = 'site-foot';
  foot.innerHTML = `<div class="wrap"><span>Le Collé</span><a href="index.html">Toutes les matières</a></div>`;
  document.body.append(foot);
}

/* Application installable : service worker et lecture hors ligne */
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
const CACHE_DOCS = 'lc-docs-v1';
/* fichiers nécessaires pour lire hors ligne : livres complets (lecteur) et fiches */
const sujetsDe = id => ((window.LC_SUJETS || {})[id] || []);
const fichiersHorsLigne = () => LC.livres.flatMap(l => [l.pdf, l.fiche, ...sujetsDe(l.id).flatMap(s => [s.sujet, s.corrige])].filter(Boolean));
const estInstallee = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

async function etatHorsLigne() {
  if (!('caches' in window)) return null;
  const c = await caches.open(CACHE_DOCS);
  const f = fichiersHorsLigne();
  let n = 0;
  for (const u of f) if (await c.match(new URL(u, location.href).href)) n++;
  return { n, total: f.length };
}

async function telechargerHorsLigne(progres) {
  const c = await caches.open(CACHE_DOCS);
  const f = fichiersHorsLigne();
  let fait = 0, erreurs = 0;
  for (const u of f) {
    const abs = new URL(u, location.href).href;
    if (!(await c.match(abs))) {
      try { const r = await fetch(abs, { cache: 'no-cache' }); if (r.ok) await c.put(abs, r); else erreurs++; }
      catch { erreurs++; }
    }
    progres && progres(++fait, f.length);
  }
  return erreurs;
}
