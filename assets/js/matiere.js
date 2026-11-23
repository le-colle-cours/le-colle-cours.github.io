/* Le Collé — page d'une matière : ses livres et leurs chapitres */
'use strict';
const M = matiere(params.get('id'));
if (!M) { location.replace('index.html'); throw new Error('matière inconnue'); }
cadre(M.id);
document.title = `${M.titre} — Le Collé`;
const chapitres = l => {
  let partie = null;
  return l.chapitres.map(c => {
    const tete = c.partie && c.partie !== partie ? `<li><span class="partie">${esc(titrePartie(c.partie))}</span></li>` : '';
    partie = c.partie;
    return `${tete}<li><span class="n">${c.n}</span><a href="${urlChapitre(l, c.n)}">${c.titre}</a><span class="tag">${c.fin - c.debut + 1} p.</span></li>`;
  }).join('');
};
const sujets = l => {
  const s = sujetsDe(l.id);
  if (!s.length) return '';
  return `<div class="sujets"><h3>S'entraîner</h3>${s.map(x => `<div class="sujet">
    <p><strong>${esc(x.titre)}</strong>${x.duree ? ` <span class="tag">${esc(x.duree)}</span>` : ''}</p>
    <p>${esc(x.description)}</p>
    <p class="links"><a class="dl" href="${x.sujet}" target="_blank" rel="noopener">Sujet (PDF)</a>${x.corrige ? `<a class="dl" href="${x.corrige}" target="_blank" rel="noopener">Corrigé (PDF)</a>` : ''}</p>
  </div>`).join('')}</div>`;
};
const documents = l => {
  const d = ((window.LC_DOCUMENTS || {})[l.id] || []);
  if (!d.length) return '';
  return `<div class="sujets"><h3>Documents</h3>${d.map(x => `<div class="sujet">
    <p><strong>${esc(x.titre)}</strong></p>
    <p>${esc(x.description)}</p>
    <p class="links"><a class="dl" href="${x.fichier}" download="${x.fichier.split('/').pop()}">Télécharger (${(x.fichier.split('.').pop() || '').toUpperCase()})</a></p>
  </div>`).join('')}</div>`;
};
$('#contenu').innerHTML = `
  <p class="kicker"><a href="index.html">Matières</a></p>
  <h1>${esc(M.titre)}</h1>
  <p class="intro">${esc(M.description)}</p>
  ${livresDe(M.id).map(l => `<section class="livre" id="${l.id}">
    <h2>${esc(l.titre)}</h2>
    <p>${esc(l.description)}</p>
    <p class="links" style="margin-top:10px"><a href="${urlLecteur(l)}">Lire le livre complet</a>${lienPdf(l.pdf, 'Télécharger le PDF')}${l.fiche ? `<a class="dl" href="${l.fiche}" target="_blank" rel="noopener">Fiche de révision</a>` : ''}<span class="tag">${l.pages} pages</span></p>
    <ul class="chapitres formules">${chapitres(l)}</ul>
    ${documents(l)}
    ${sujets(l)}
  </section>`).join('')}`;
renderMath($('#contenu'));
