/* Le Collé — sujets d'entraînement (examens blancs) par livre.
   Fichier maintenu à la main : il n'est pas régénéré par outils/generer_site.py ;
   les PDF sont dans docs/sujets/<livre>/, dossier que le générateur ne touche pas. */
window.LC_SUJETS = {
  "physique-des-materiaux": [
    {
      "titre": "Examen blanc complet",
      "description": "Tout le programme en 8 parties : QCM, questions de cours, condensateurs et champ local, sphère diélectrique (Laplace), pertes diélectriques et magnétiques, lame paramagnétique (ampérienne), cylindre magnétique (coulombienne), hystérésis et énergie.",
      "duree": "4 h",
      "sujet": "docs/sujets/physique-des-materiaux/examen-blanc-sujet.pdf",
      "corrige": "docs/sujets/physique-des-materiaux/examen-blanc-corrige.pdf"
    }
  ],
  "methodes-analyse-circuits": [
    {
      "titre": "Examen blanc complet",
      "description": "Tout le programme en 8 parties : QCM et cours, signaux (déphasage, spectre, valeurs moyennes et efficaces), Thévenin et superposition, Norton avec source liée, RSP et Fresnel, Laplace (réponse indicielle et RSP), Bode et filtrage, quadripôles.",
      "duree": "4 h",
      "sujet": "docs/sujets/methodes-analyse-circuits/examen-blanc-sujet.pdf",
      "corrige": "docs/sujets/methodes-analyse-circuits/examen-blanc-corrige.pdf"
    }
  ]
};

/* Documents téléchargeables (hors sujets d'entraînement), par livre ; fichiers dans docs/documents/<livre>/. */
window.LC_DOCUMENTS = {
  "allemand-le-colle": [
    {
      "titre": "Questions : naissance et anniversaire",
      "description": "Réponses aux dix questions du cours (Wer heißt…, Ist … geboren, Wann hat … Geburtstag, Wie alt ist…), points à retenir et fautes relevées dans l'énoncé.",
      "fichier": "docs/documents/allemand-le-colle/reponses-questions-geburtstag.txt"
    }
  ]
};
