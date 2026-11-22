# Le Collé — livres de cours

Site statique (HTML, CSS, JavaScript, sans framework ni étape de construction) qui rassemble des livres de cours :
une page d'accueil par matière, une page par matière (livres et chapitres), une page par chapitre (objectifs,
prérequis, plan, méthodes, « L'essentiel » avec les formules rendues par KaTeX) et un lecteur PDF intégré (pdf.js)
qui ouvre un chapitre ou le livre complet. Chaque chapitre et chaque livre se télécharge en PDF.

## Structure

```
index.html        accueil : les matières
matiere.html      ?id=<matière>            livres et chapitres d'une matière
chapitre.html     ?livre=<livre>&n=<n>     page d'un chapitre
lecteur.html      ?livre=<livre>[&n=<n>][&page=<p>]   lecture en ligne (chapitre ou livre)
404.html
data/livres.js    données générées (ne pas modifier à la main)
data/sujets.js    sujets d'entraînement par livre (maintenu à la main) ; PDF dans docs/sujets/<livre>/
docs/<livre>.pdf  livres complets ; docs/<livre>/chapitre-NN.pdf : un PDF par chapitre
assets/css/style.css
assets/js/        app.js (commun), macros.js (macros LaTeX pour KaTeX), une page = un script
assets/vendor/    KaTeX et pdf.js (servis localement, aucune dépendance externe hormis les polices)
outils/           génération des données et vérifications
```

## Mettre à jour un livre

1. Compiler le livre (`latexmk -pdf`) : il faut le `.tex`, le `.pdf`, le `.aux` et le `.met` de la compilation.
2. Adapter si besoin les chemins `FINAL` et `V2` en tête de `outils/generer_site.py`, puis :
   `python3 outils/generer_site.py .`
   Le script lit les chapitres (`\section`), les objectifs (`\ouverture`), l'encadré `essentiel`, les signets du PDF
   (pages des chapitres et sections) et la liste des méthodes, puis découpe un PDF par chapitre.
3. Vérifier : `node outils/verifier_formules.cjs .` (chaque formule passe KaTeX sans erreur), puis, le site servi
   localement (`python3 -m http.server 8765`), `python3 outils/verifier_pages.py` (erreurs JavaScript, liens et
   téléchargements, débordements sur mobile, rendu du lecteur ; nécessite Playwright et Chrome).

## Publication (GitHub Pages)

Pousser le contenu du dossier à la racine d'un dépôt, puis Settings → Pages → « Deploy from a branch » (branche
`main`, dossier `/`). Tous les chemins sont relatifs ; le fichier `.nojekyll` est présent.
