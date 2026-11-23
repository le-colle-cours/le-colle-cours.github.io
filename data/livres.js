/* Généré par outils/generer_site.py — ne pas modifier à la main. */
window.LC = {
 "matieres": [
  {
   "id": "electricite",
   "titre": "Électricité et électronique",
   "description": "Circuits linéaires, mesure et puissance électrique."
  },
  {
   "id": "numerique",
   "titre": "Numérique et informatique",
   "description": "Logique, circuits numériques, architecture des processeurs et conception d'algorithmes."
  },
  {
   "id": "physique",
   "titre": "Physique",
   "description": "Électromagnétisme, propagation dans les lignes et physique des matériaux."
  },
  {
   "id": "maths",
   "titre": "Mathématiques",
   "description": "Intégration et analyse de Fourier, analyse complexe, probabilités."
  },
  {
   "id": "langues",
   "titre": "Langues",
   "description": "Allemand, niveau débutant."
  }
 ],
 "livres": [
  {
   "id": "methodes-analyse-circuits",
   "matiere": "electricite",
   "titre": "Méthodes d'analyse des circuits",
   "description": "Signaux, dipôles, lois de Kirchhoff et théorèmes généraux, transformée de Laplace et fonctions de transfert, quadripôles.",
   "pages": 54,
   "pdf": "docs/methodes-analyse-circuits.pdf",
   "fiche": "docs/methodes-analyse-circuits/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Signaux et systèmes",
     "intro": "Avant d'étudier un circuit, il faut savoir décrire ce qui le traverse : des signaux (tensions, courants) et la façon dont un système les transforme. Le cas central de tout le cours est le <em>régime permanent sinusoïdal</em> (RPS), où les représentations de Fresnel et complexe remplacent les équations différentielles par de l'algèbre.",
     "objectifs": "<ul><li>Connaître les signaux usuels : échelon, Dirac, sinusoïdes, exponentielles.</li><li>Calculer valeur moyenne, puissance moyenne, valeur efficace.</li><li>Connaître les propriétés des systèmes : stabilité, invariance, linéarité, convolution.</li><li>Passer d'un signal sinusoïdal à son vecteur de Fresnel et à son complexe associé ; définir impédance et admittance.</li></ul>",
     "prerequis": "Nombres complexes (module, argument, forme exponentielle) ; intégrales ; trigonométrie.",
     "essentiel": "<ul><li>$u$ (échelon) et $\\delta=\\diff u/\\diff t$ (aire $1$) ; sinusoïde $X_{\\max}\\sin(\\omega t+\\phi)$, $\\omega=2\\pi/T$ ; composantes incommensurables $\\Rightarrow$ quasi-périodique.</li><li>$X_{\\mathrm{moy}}=\\frac1T\\int_Tx$ ; $P_x=\\frac1T\\int_Tx^2$ ; $X_{\\eff}=\\sqrt{P_x}$ ; sinusoïde : $X_{\\max}=X_{\\eff}\\sqrt2$.</li><li>Redressé double : $\\frac{2E}\\pi$, $\\frac E{\\sqrt2}$ ; simple : $\\frac E\\pi$, $\\frac E2$ ; rectangulaire : $\\alpha E$, $E\\sqrt\\alpha$ ; moyenne linéaire, efficace non.</li><li>$a\\cos+b\\sin=C\\cos(\\omega t+\\varphi)$ ($\\cos\\varphi=a/C$, $\\sin\\varphi=-b/C$) ; produit : raies en $f_0\\pm f_1$.</li><li>BF : $L$ court-circuit, $C$ ouvert ; HF : $L$ ouvert, $C$ court-circuit.</li><li>$p=vi$, $W=\\int p\\,\\diff t$, $P=\\langle p\\rangle$.</li><li>SLTI : $y=x*h$, $h$ = réponse impulsionnelle.</li><li>RPS : $x=X\\sqrt2\\cos(\\omega t+\\phi)\\leftrightarrow\\cp X=Xe^{j\\phi}$ ; $\\diff/\\diff t\\leftrightarrow\\times j\\omega$, $\\int\\leftrightarrow\\div j\\omega$.</li><li>$\\cp Z=\\cp V/\\cp I=R+jX$, $\\cp Y=1/\\cp Z=G+jB$, $G=R/(R^2+X^2)$, $B=-X/(R^2+X^2)$.</li></ul>",
     "debut": 5,
     "fin": 14,
     "partie": null,
     "sections": [
      {
       "titre": "Classification des signaux",
       "page": 5
      },
      {
       "titre": "Signaux usuels",
       "page": 5
      },
      {
       "titre": "Valeur moyenne, puissance, valeur efficace",
       "page": 8
      },
      {
       "titre": "Systèmes à temps continu",
       "page": 10
      },
      {
       "titre": "Représentations en régime permanent sinusoïdal",
       "page": 11
      },
      {
       "titre": "Impédance et admittance",
       "page": 12
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Impédance en basse et en haute fréquence",
       "page": 13
      }
     ],
     "pdf": "docs/methodes-analyse-circuits/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Éléments constitutifs des circuits",
     "intro": "Un circuit est un assemblage d'éléments : des <em>dipôles</em> (résistance, bobine, condensateur, sources) et des <em>quadripôles</em> (transformateur, gyrateur, chapitre 5). Un dipôle est caractérisé par la relation entre la tension à ses bornes et le courant qui le traverse. On étudie les éléments actifs, puis passifs, d'abord en régime quelconque puis en régime sinusoïdal.",
     "objectifs": "<ul><li>Utiliser correctement tension, courant et conventions récepteur/générateur.</li><li>Modéliser une source réelle (Thévenin, Norton) et passer d'un modèle à l'autre ; connaître les sources liées.</li><li>Connaître les relations $v$–$i$ et l'énergie de $R$, $L$, $C$, et les règles de continuité.</li><li>Résoudre les circuits RC et RL soumis à un échelon ; connaître les impédances complexes.</li></ul>",
     "prerequis": "Chapitre 1 ; équations différentielles linéaires du premier ordre.",
     "essentiel": "<ul><li>$U_{AB}=V_A-V_B$ ; $I=\\Delta Q/\\Delta t$. Récepteur : $UI$ reçue ; générateur : $UI$ fournie.</li><li>Ne jamais court-circuiter une source de tension parfaite ni ouvrir une source de courant parfaite.</li><li>Thévenin : $V=E-R_iI$ (idéale si $R_i\\ll R$) ; Norton : $I=I_d-V/R_i$ (idéale si $R_i\\gg R$) ; équivalence : même $R_i$, $E=R_iI_d$.</li><li>Sources liées : $A_v$, $r$, $g$, $A_i$.</li><li>$i=C\\,\\diff v/\\diff t$, $v=L\\,\\diff i/\\diff t$ ; $E_C=\\frac12Cv^2$, $E_L=\\frac12Li^2$ ; $v_C$ et $i_L$ continus.</li><li>Échelon $E$ : RC (sortie sur $C$) $E(1-e^{-t/RC})$ ; RL (sortie sur $L$) $Ee^{-tR/L}$.</li><li>$\\cp Z_R=R$, $\\cp Z_C=1/(jC\\omega)$, $\\cp Z_L=jL\\omega$.</li></ul>",
     "debut": 15,
     "fin": 21,
     "partie": null,
     "sections": [
      {
       "titre": "Tension, courant, conventions",
       "page": 15
      },
      {
       "titre": "Éléments actifs : les sources",
       "page": 16
      },
      {
       "titre": "Éléments passifs",
       "page": 18
      },
      {
       "titre": "Régime transitoire : circuits RC et RL",
       "page": 19
      },
      {
       "titre": "Éléments passifs en régime sinusoïdal",
       "page": 20
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Réponse d'un circuit du premier ordre à un échelon",
       "page": 19
      }
     ],
     "pdf": "docs/methodes-analyse-circuits/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Lois et théorèmes fondamentaux",
     "intro": "Les lois de Kirchhoff suffisent en principe à résoudre tout circuit. Les théorèmes qui suivent (superposition, Thévenin, Norton, Millman, Maxwell, Kennelly) servent à le faire <em>vite</em>, en réduisant le circuit ou en le découpant. Tous s'appliquent aux circuits linéaires, en résistances comme en impédances complexes (RPS) ou opérationnelles (Laplace).",
     "objectifs": "<ul><li>Écrire les lois des mailles et des nœuds ; utiliser les diviseurs de tension et de courant.</li><li>Associer des impédances en série et en parallèle.</li><li>Appliquer superposition, Thévenin, Norton, Millman, Maxwell et Kennelly.</li></ul>",
     "prerequis": "Chapitre 2 (conventions, sources, impédances).",
     "essentiel": "<ul><li>Mailles : $\\sum\\pm V=0$ (signe $-$ si rencontrée par la pointe) ; nœuds : $\\sum I_{\\text{entrants}}=0$ ; ne garder que les équations indépendantes.</li><li>$V_1/U=R_1/(R_1+R_2)$ ; $I_1/I=R_2/(R_1+R_2)$ ; série $\\sum Z_i$ ; parallèle $1/\\sum(1/Z_i)$.</li><li>Superposition : une source à la fois (tension éteinte = CC, courant éteinte = CO).</li><li>Thévenin $(E_{th},Z_{th})$ série / Norton $(I_N,Z_N)$ parallèle : $E_{th}$ à vide, $I_N$ en court-circuit, $Z_{th}=Z_N$ sources éteintes, $I_N=E_{th}/Z_{th}$.</li><li>Millman : $V_0=\\sum(E_i/R_i)/\\sum(1/R_i)$.</li><li>Source liée : ne jamais l'éteindre ; $Z_{th}$ par source test ($E_0/I_0$) ou par $E_{th}/I_N$.</li><li>Dualité : $V\\leftrightarrow I$, série $\\leftrightarrow$ parallèle, $Z\\leftrightarrow Y$, $L\\leftrightarrow C$, Thévenin $\\leftrightarrow$ Norton.</li><li>Maxwell : réseau passif, source et courant échangeables.</li><li>Kennelly : $Z_{BC}=\\Sigma/Z_A$… ; $Z_A=Z_{AB}Z_{CA}/(Z_{AB}+Z_{BC}+Z_{CA})$… ; symétrique : $\\times3$.</li></ul>",
     "debut": 22,
     "fin": 32,
     "partie": null,
     "sections": [
      {
       "titre": "Lois de Kirchhoff",
       "page": 22
      },
      {
       "titre": "Principe de superposition",
       "page": 24
      },
      {
       "titre": "Théorèmes de Thévenin et de Norton",
       "page": 25
      },
      {
       "titre": "Théorème de Millman",
       "page": 28
      },
      {
       "titre": "Théorème de Maxwell (réciprocité)",
       "page": 30
      },
      {
       "titre": "Théorème de Kennelly (étoile–triangle)",
       "page": 30
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Appliquer la superposition",
       "page": 25
      },
      {
       "num": "3.2",
       "titre": "Calculer $E_{th}$, $I_N$ et $Z_{th}=Z_N$",
       "page": 26
      },
      {
       "num": "3.3",
       "titre": "Choisir une méthode de résolution",
       "page": 31
      }
     ],
     "pdf": "docs/methodes-analyse-circuits/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Régimes variables : Laplace et Bode",
     "intro": "Pour un régime quelconque (transitoires, échelons, impulsions), l'outil privilégié est la <em>transformée de Laplace</em> : elle change les équations différentielles du circuit en équations algébriques en $p$, et les conditions initiales y entrent naturellement. En régime permanent sinusoïdal, on passe au domaine complexe par $p=j\\omega$, et on étudie la réponse fréquentielle avec le <em>diagramme de Bode</em>.",
     "objectifs": "<ul><li>Connaître la définition, la table et les propriétés de la transformée de Laplace.</li><li>Modéliser $R$, $L$, $C$ dans le domaine de Laplace, conditions initiales comprises.</li><li>Calculer une réponse temporelle par décomposition en éléments simples.</li><li>Déterminer le régime sinusoïdal permanent ; tracer les diagrammes de Bode des 1<sup>er</sup> et 2<sup>e</sup> ordres.</li></ul>",
     "prerequis": "Chapitres 1–3 ; fractions rationnelles, logarithme décimal.",
     "essentiel": "<ul><li>Déphaseur $\\frac{1-\\tau p}{1+\\tau p}$ : $0$ dB, $\\psi=-2\\arctan\\tau\\omega$. Passe-haut 2<sup>e</sup> ordre $\\frac{-x^2}{1-x^2+2jmx}$ ; réjecteur $\\frac{1-x^2}{1-x^2+2jmx}$.</li><li>Entrée à plusieurs fréquences : superposition, lire $|H|$ et $\\psi$ sur le Bode pour chaque composante.</li><li>$F(p)=\\int_0^\\infty fe^{-pt}\\diff t$ ; table : $\\delta\\to1$, $u\\to\\frac1p$, $e^{-at}\\to\\frac1{p+a}$, $t^n\\to\\frac{n!}{p^{n+1}}$, $\\cos\\to\\frac p{p^2+\\omega^2}$, $\\sin\\to\\frac\\omega{p^2+\\omega^2}$, $e^{-at}\\times\\ \\Leftrightarrow\\ p\\to p+a$.</li><li>$f'\\to pF-f(0^-)$ ; $\\int\\to F/p$ ; retard $\\to e^{-t_0p}$ ; valeurs initiale/finale par $pF(p)$.</li><li>$Z_C=\\frac1{Cp}$ (+ source $CV_{0^-}$ ou $V_{0^-}/p$) ; $Z_L=Lp$ (+ source $LI_{0^-}$ ou $I_{0^-}/p$) ; $S=HE$.</li><li>Libre/forcée (pôles de $H$/de $E$) ; transitoire/permanente ; permanente liée aux pôles de $E$.</li><li>Inverse : éléments simples puis table.</li><li>RSP : $s_{per}=E|H(j\\omega)|\\cos(\\omega t+\\varphi+\\psi)$, $p=j\\omega$.</li><li>1<sup>er</sup> ordre $\\frac K{1+\\tau p}$ : $-3$ dB et $-\\pi/4$ en $\\omega_0=1/\\tau$, puis $-20$ dB/déc., $-\\pi/2$.</li><li>2<sup>e</sup> ordre : $|H(j\\omega_0)|=\\frac K{2m}$, $\\psi(\\omega_0)=-\\frac\\pi2$, $-40$ dB/déc., $-\\pi$ ; résonance si $m&lt;\\frac{\\sqrt2}2$, $\\omega_{res}=\\omega_0\\sqrt{1-2m^2}$.</li></ul>",
     "debut": 33,
     "fin": 45,
     "partie": null,
     "sections": [
      {
       "titre": "Transformée de Laplace",
       "page": 33
      },
      {
       "titre": "Circuits dans le domaine de Laplace",
       "page": 35
      },
      {
       "titre": "Transformée de Laplace inverse",
       "page": 37
      },
      {
       "titre": "Régime sinusoïdal permanent",
       "page": 38
      },
      {
       "titre": "Diagrammes de Bode",
       "page": 39
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Inverser une fraction rationnelle",
       "page": 37
      },
      {
       "num": "4.2",
       "titre": "Tracer un diagramme de Bode",
       "page": 43
      },
      {
       "num": "4.3",
       "titre": "Retrouver ou concevoir un filtre du premier ordre",
       "page": 44
      }
     ],
     "pdf": "docs/methodes-analyse-circuits/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Quadripôles",
     "intro": "Un quadripôle est une partie de réseau qui communique avec l'extérieur par deux paires de bornes, l'entrée et la sortie, chacune constituant un dipôle. Quatre grandeurs le décrivent — $V_1$, $I_1$, $V_2$, $I_2$ — liées par deux équations propres au quadripôle ; les deux équations manquantes viennent de ce qui est branché en entrée et en sortie (relations de fermeture). On travaille en grandeurs complexes ou en Laplace.",
     "objectifs": "<ul><li>Connaître les six jeux de paramètres et savoir les déterminer par des essais à vide ou en court-circuit.</li><li>Passer d'un jeu de paramètres à un autre ; reconnaître un quadripôle passif ou symétrique.</li><li>Calculer impédances d'entrée et de sortie, gains ; associer des quadripôles.</li><li>Connaître le transformateur et le gyrateur.</li></ul>",
     "prerequis": "Chapitres 2–3 ; calcul matriciel $2\\times2$.",
     "essentiel": "<ul><li>Courants entrants ; $[Z]$ (CO), $[Y]$ (CC), $[h]$, $[g]=[h]^{-1}$, $[a]$ avec $(V_2,-I_2)$ ; $[Z]=[Y]^{-1}$.</li><li>Chaque paramètre : rapport de deux grandeurs, un accès en court-circuit ($V=0$) ou ouvert ($I=0$).</li><li>Passif : $AD-BC=1$, $Z_{12}=Z_{21}$, $Y_{12}=Y_{21}$, $h_{12}=-h_{21}$. Symétrique : $A=D$, $Z_{11}=Z_{22}$, $\\Delta h=1$.</li><li>$Z_E$ dépend de la charge, $Z_S$ du générateur ; $G_V=V_2/V_1$, $G_I=I_2/I_1$.</li><li>Hybride : $h_{11}$ série $+$ source $h_{12}V_2$ ; $h_{21}I_1$ $\\|$ $1/h_{22}$ ; $G_I=\\frac{h_{21}}{1+h_{22}Z_L}$, $G_V=-\\frac{h_{21}Z_L}{h_{11}+\\Delta hZ_L}$.</li><li>$[a]=\\frac1{Z_{21}}\\begin{pmatrix}Z_{11}&amp;\\Delta Z\\\\1&amp;Z_{22}\\end{pmatrix}$.</li><li>Cascade $[a]=[a_1][a_2]$ ; parallèle $[Y]=[Y']+[Y'']$ ; série $[Z]=[Z']+[Z'']$.</li><li>T : $[Z]=\\begin{bmatrix}z_1+z_3&amp;z_3\\\\z_3&amp;z_2+z_3\\end{bmatrix}$ ; $\\Pi$ : $[Y]=\\begin{bmatrix}y_1+y_3&amp;-y_3\\\\-y_3&amp;y_2+y_3\\end{bmatrix}$.</li><li>Transformateur : $V_2/V_1=I_1/I_2=k$, isolement. Gyrateur : $v_2=ri_1$, $v_1=-ri_2$ ; $L\\to C_{eq}=L/r^2$, $C\\to L_{eq}=Cr^2$.</li></ul>",
     "debut": 46,
     "fin": 54,
     "partie": null,
     "sections": [
      {
       "titre": "Les paramètres d'un quadripôle",
       "page": 46
      },
      {
       "titre": "Relations entre paramètres et types de quadripôles",
       "page": 48
      },
      {
       "titre": "Impédances d'entrée et de sortie, gains",
       "page": 49
      },
      {
       "titre": "Associations de quadripôles",
       "page": 51
      },
      {
       "titre": "Exemples",
       "page": 51
      }
     ],
     "methodes": [
      {
       "num": "5.1",
       "titre": "Déterminer les paramètres d'un quadripôle",
       "page": 47
      }
     ],
     "pdf": "docs/methodes-analyse-circuits/chapitre-05.pdf"
    }
   ]
  },
  {
   "id": "metrologie-circuits-puissance",
   "matiere": "electricite",
   "titre": "Métrologie et circuits de puissance",
   "description": "Unités et incertitudes, instruments et mesures électriques, puissance en monophasé et systèmes triphasés.",
   "pages": 50,
   "pdf": "docs/metrologie-circuits-puissance.pdf",
   "fiche": "docs/metrologie-circuits-puissance/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Unités et vocabulaire de la métrologie",
     "intro": "Mesurer, c'est comparer une grandeur à une grandeur de même espèce prise comme unité. Un résultat de mesure n'est jamais parfait : il y a toujours un doute sur la valeur annoncée. Or de nombreuses décisions reposent sur des mesures (acceptation d'un produit, validation d'un procédé, réglage d'un paramètre de fabrication, validation d'une hypothèse, surveillance de l'environnement, sécurité, diagnostic médical). La <em>métrologie</em> est la science de la mesure : elle fixe les unités, le vocabulaire et la manière d'annoncer un résultat avec son incertitude.",
     "objectifs": "<ul><li>Connaître l'organisation internationale (BIPM, CGPM, CIPM) et les sept unités de base du SI.</li><li>Connaître la révision du SI de 2019 et ses conséquences en électricité.</li><li>Maîtriser le vocabulaire du VIM : mesurande, indication, sensibilité, résolution…</li></ul>",
     "prerequis": "Aucun.",
     "essentiel": "<ul><li>BIPM (Convention du mètre, 1875), sous l'autorité de la CGPM et la surveillance du CIPM.</li><li>7 unités de base : m, kg, s, A, K, mol, cd. Depuis le 20/05/2019, toutes définies par 7 constantes exactes ($\\Delta\\nu_{\\mathrm{Cs}}$, $c$, $h$, $e$, $k$, $N_A$, $K_{cd}$).</li><li>$1$ A $=1/e$ électrons par seconde ; $\\mu_0=2\\alpha h/(ce^2)$ n'est plus exact.</li><li>VIM : mesurande, indication, résultat (avec incertitude), grandeur d'influence, sensibilité $\\partial s/\\partial m$, résolution, étendue de mesure, courbe d'étalonnage, écart de linéarité.</li></ul>",
     "debut": 5,
     "fin": 9,
     "partie": null,
     "sections": [
      {
       "titre": "Le Système international d'unités",
       "page": 5
      },
      {
       "titre": "Vocabulaire international de métrologie (VIM)",
       "page": 8
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Analyse dimensionnelle",
       "page": 6
      }
     ],
     "pdf": "docs/metrologie-circuits-puissance/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Erreurs et incertitudes de mesure",
     "intro": "Une mesure est toujours imparfaite : il faut estimer l'erreur commise et annoncer le résultat avec un intervalle de confiance. On distingue les erreurs (écart à la valeur vraie, inconnaissable) des incertitudes (estimation chiffrée du doute). La méthode GUM organise ce calcul.",
     "objectifs": "<ul><li>Distinguer erreur systématique (justesse) et erreur aléatoire (fidélité).</li><li>Utiliser la classe d'un appareil et propager les erreurs d'une mesure indirecte.</li><li>Appliquer les six étapes de la méthode GUM : incertitudes de type A et B, incertitude composée, élargissement.</li></ul>",
     "prerequis": "Statistiques élémentaires (moyenne, écart-type, loi normale) ; dérivées partielles.",
     "essentiel": "<ul><li>$\\varepsilon_{\\mathrm{sys}}=\\bar m-M_{\\mathrm{vrai}}$ (justesse, corrigeable) ; $\\varepsilon_{\\text{aléa}}=m_k-\\bar m$ (fidélité, non corrigeable).</li><li>$\\sigma^2=\\frac1{n-1}\\sum(m_k-\\bar m)^2$ ; type A : $u=\\sigma/\\sqrt n$ ; type B : données constructeur + loi a priori.</li><li>Classe : $\\varepsilon_{\\mathrm{rel}}=\\text{classe}\\times\\text{calibre}/\\text{déviation}$ ; produits/quotients : erreurs relatives additionnées.</li><li>$u_c^2=\\sum(\\partial f/\\partial x_i)^2u^2(x_i)+2\\sum\\sum(\\partial f/\\partial x_i)(\\partial f/\\partial x_j)u_iu_jr_{ij}$.</li><li>$\\Delta M=k\\,u$ ($k=2$ : 95,45 % ; $k=3$ : 99,73 %) ou Student $t_{\\%}$ ; $M=m\\pm\\Delta M|_{p\\%}$.</li><li>GUM : analyser (5 M), modéliser, estimer, composer, élargir, exprimer.</li></ul>",
     "debut": 10,
     "fin": 17,
     "partie": null,
     "sections": [
      {
       "titre": "Erreurs de mesurage",
       "page": 10
      },
      {
       "titre": "La méthode GUM",
       "page": 13
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Évaluer une incertitude selon le GUM",
       "page": 13
      }
     ],
     "pdf": "docs/metrologie-circuits-puissance/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Instruments de mesure électrique",
     "intro": "Un instrument fait correspondre au mesurande une grandeur directement observable (déviation d'aiguille, nombre affiché). Il doit perturber le moins possible le circuit, être adapté au signal (valeur crête, fréquence) et peu sensible aux grandeurs d'influence. Selon sa technologie, il mesure une valeur moyenne, une valeur efficace (vraie ou non) ou une puissance : c'est ce qu'il faut savoir reconnaître.",
     "objectifs": "<ul><li>Classer les appareils et les méthodes de mesure.</li><li>Connaître le principe, la grandeur mesurée et les limites des appareils magnétoélectriques, à redresseur, ferromagnétiques et électrodynamiques.</li><li>Utiliser un wattmètre (montages amont et aval, corrections).</li><li>Connaître la structure des appareils électroniques analogiques et numériques ; calculer l'erreur d'un appareil numérique.</li></ul>",
     "prerequis": "Chapitre 2 ; valeurs moyenne et efficace ; amplificateur opérationnel.",
     "essentiel": "<ul><li>Mesure directe (grandeur active, énergie prélevée négligeable) / indirecte ; méthodes de zéro, déviation, résonance, comptage.</li><li>Magnétoélectrique : $\\theta\\propto\\langle i\\rangle$, linéaire, polarisé ; shunt $I/i=1+r/S$ (100 mV) ; voltmètre en $\\Omega$/V.</li><li>À redresseur : $\\langle|v|\\rangle=0{,}9V_{\\mathrm{eff}}$, juste en sinusoïdal seulement.</li><li>Ferromagnétique : $\\theta\\propto I_{\\mathrm{eff}}^2$, non polarisé, 15 Hz – quelques centaines de Hz, forte consommation.</li><li>Électrodynamique : $\\theta\\propto\\langle i_1i_2\\rangle$ ; wattmètre : amont (+ circuit courant), aval (+ circuit tension $U^2/R_V$), $P_\\ell/P\\approx1+\\tan\\varphi\\tan\\psi$.</li><li>Électronique analogique : $Z_e$ élevée, large bande, 1 à 3 % ; TRMC $=20\\log(A_{md}/A_{mc})&gt;120$ dB ; TRMS : carré, moyenne, racine.</li><li>Numérique : erreur $=\\pm(x\\,\\%~\\mathrm{VL}+y~\\mathrm U)$ ; $3\\frac12$ digits = 2000 points.</li></ul>",
     "debut": 18,
     "fin": 26,
     "partie": null,
     "sections": [
      {
       "titre": "Généralités",
       "page": 18
      },
      {
       "titre": "Appareils électromécaniques",
       "page": 19
      },
      {
       "titre": "Appareils électroniques analogiques",
       "page": 24
      },
      {
       "titre": "Appareils électroniques numériques",
       "page": 25
      }
     ],
     "methodes": [],
     "pdf": "docs/metrologie-circuits-puissance/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Mesure des grandeurs électriques",
     "intro": "Ce chapitre applique les instruments du chapitre 3 : quelle valeur caractéristique d'un signal périodique mesurer, avec quel appareil, et comment mesurer impédances, fréquences et phases. Il se termine par les capteurs de courant isolés utilisés en travaux pratiques.",
     "objectifs": "<ul><li>Connaître les valeurs caractéristiques d'un signal périodique et les facteurs de forme, de crête, de déformation.</li><li>Choisir l'appareil adapté pour une valeur continue, moyenne ou efficace.</li><li>Mesurer une impédance (méthodes indirectes, ponts) ; passer du modèle série au modèle parallèle.</li><li>Mesurer fréquences et phases ; connaître le capteur LEM.</li></ul>",
     "prerequis": "Chapitres 2 et 3 ; impédances complexes.",
     "essentiel": "<ul><li>$\\bar U=\\frac1T\\int u$ ; $U_{\\mathrm{eff}}=\\sqrt{\\frac1T\\int u^2}$ ; $F_f=X_{\\mathrm{eff}}/X_{\\mathrm{moy}}$, $F_c=X_M/X_{\\mathrm{eff}}$, $F_d=X_{1\\mathrm{eff}}/X_{\\mathrm{eff}}$, $\\tau=X_{\\mathrm{eff}AC}/X_{DC}$.</li><li>$V_{\\mathrm{eff}}^2=V_{\\mathrm{moy}}^2+\\sum V_i^2=V_{\\mathrm{moy}}^2+V'^2_{\\mathrm{eff}}$ ; signal déformé : TRMS.</li><li>Capacitif : $R_s=\\frac{R_p}{1+(R_pC_p\\omega)^2}$, $C_s=C_p(1+\\tan^2\\delta)$, $Q=1/\\tan\\delta$ ; inductif : $R_p=R_s(1+Q^2)$, $L_p=L_s\\frac{1+Q^2}{Q^2}$.</li><li>Ponts : P/Q, $\\cp Z_x=\\frac PQ\\cp Z$ (même nature) ; P.Q, $\\cp Z_x\\cp Z=PQ$ (nature opposée) ; Sauty, Nernst, Hay ($Q$ élevé), Maxwell ($Q$ faible).</li><li>$f=n/t_0$ (fréquencemètre) ; $T=n/(Nf_0)$ (périodemètre) ; $\\varphi=180^\\circ\\,d/D$.</li><li>LEM : compensation de flux, $i_c/i_p\\approx1/1000$, mesure continu et alternatif, isolée.</li></ul>",
     "debut": 27,
     "fin": 36,
     "partie": null,
     "sections": [
      {
       "titre": "Valeurs caractéristiques d'un signal périodique",
       "page": 27
      },
      {
       "titre": "Mesure des tensions et des courants",
       "page": 28
      },
      {
       "titre": "Mesure des impédances",
       "page": 30
      },
      {
       "titre": "Mesure des fréquences et des phases",
       "page": 33
      },
      {
       "titre": "Capteurs de courant isolés",
       "page": 34
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Choisir l'appareil pour une tension ou un courant",
       "page": 30
      },
      {
       "num": "4.2",
       "titre": "Mesurer un déphasage à l'oscilloscope",
       "page": 34
      }
     ],
     "pdf": "docs/metrologie-circuits-puissance/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Puissance et énergie en monophasé",
     "intro": "Un circuit est formé d'éléments <em>actifs</em> (sources d'énergie) et <em>passifs</em>, eux-mêmes <em>résistifs</em> ou <em>réactifs</em> (inductances, condensateurs). On définit les puissances qui décrivent ces échanges, d'abord en régime sinusoïdal, puis en régime périodique quelconque.",
     "objectifs": "<ul><li>Définir puissances instantanée, active, apparente, complexe, réactive et le facteur de puissance.</li><li>Connaître le comportement énergétique de $R$, $L$, $C$.</li><li>Faire un bilan de puissance par le théorème de Boucherot.</li><li>Calculer la puissance active en régime non sinusoïdal.</li></ul>",
     "prerequis": "Représentation complexe ; séries de Fourier ; chapitre 4 (valeurs efficaces).",
     "essentiel": "<ul><li>$p=vi$ ; RPS : $p=VI\\cos\\varphi-VI\\cos(2\\omega t-\\varphi)$.</li><li>$P=\\langle p\\rangle=VI\\cos\\varphi$ (W) ; $Q=VI\\sin\\varphi$ (var) ; $S=VI$ (VA) ; $\\cp S=\\cp V\\cp I^*=P+jQ$ ; $S^2=P^2+Q^2$.</li><li>$f_p=P/S$ ; en sinusoïdal $f_p=\\cos\\varphi$. $S$ dimensionne l'installation.</li><li>$R$ : $P=RI^2$, $Q=0$ ; $L$ : $Q=L\\omega I^2&gt;0$ ; $C$ : $Q=-C\\omega V^2&lt;0$ ; $L$ et $C$ : $P=0$.</li><li>Boucherot : $P$ et $Q$ s'additionnent, pas $S$.</li><li>Non sinusoïdal : $P=\\sum_kV_kI_k\\cos(\\varphi_k-\\psi_k)$, seuls les harmoniques de même rang comptent.</li></ul>",
     "debut": 37,
     "fin": 42,
     "partie": null,
     "sections": [
      {
       "titre": "Puissance instantanée",
       "page": 37
      },
      {
       "titre": "Régime sinusoïdal permanent",
       "page": 37
      },
      {
       "titre": "Puissance et énergie dans les dipôles passifs",
       "page": 39
      },
      {
       "titre": "Théorème de Boucherot",
       "page": 40
      },
      {
       "titre": "Régime périodique non sinusoïdal",
       "page": 41
      }
     ],
     "methodes": [
      {
       "num": "5.1",
       "titre": "Faire un bilan de puissance",
       "page": 40
      }
     ],
     "pdf": "docs/metrologie-circuits-puissance/chapitre-05.pdf"
    },
    {
     "n": 6,
     "titre": "Systèmes triphasés",
     "intro": "Le transport et la distribution de l'énergie électrique se font en triphasé. Ce chapitre justifie ce choix, décrit les couplages étoile et triangle, les systèmes direct, inverse et homopolaire, puis ramène l'étude d'un circuit triphasé symétrique à celle d'un <em>schéma monophasé équivalent</em>. Il se termine par les puissances.",
     "objectifs": "<ul><li>Justifier l'usage de la haute tension, de l'alternatif et du triphasé.</li><li>Calculer la tension du neutre et les courants d'une charge symétrique en étoile, neutre relié ou non.</li><li>Connaître systèmes direct, inverse, homopolaire ; tensions simples et composées.</li><li>Construire le schéma monophasé équivalent (inductance cyclique, équivalences triangle-étoile).</li><li>Calculer $P$, $Q$, $S$ en triphasé équilibré.</li></ul>",
     "prerequis": "Chapitre 5 ; représentation complexe ; théorème de Kennelly.",
     "essentiel": "<ul><li>HT : $P_J=RP^2/(U^2\\cos^2\\varphi)$ ; alternatif : transformateurs, coupure au passage par zéro ; triphasé : pas de puissance fluctuante, champ tournant, 230/400 V, moitié moins de câble.</li><li>Étoile, charge symétrique : $v_{NO}=\\frac{e_1+e_2+e_3}3$, $i_k=(e_k-v_{NO})/Z$ ; neutre relié : $i_k=e_k/Z$.</li><li>Direct ($-\\frac{2\\pi}3$), inverse ($+\\frac{2\\pi}3$) : somme nulle ; homopolaire : $3e_1$, pas de courant sans neutre.</li><li>$\\cp U_{12}=\\sqrt3\\cp V_1e^{j\\pi/6}$ (direct), $U=\\sqrt3V$ ; courants en retard de $\\varphi$.</li><li>Monophasé équivalent : $L_c=L-M$ (direct/inverse), $L+2M$ (homopolaire, neutre relié) ; $\\cp Z_Y=\\cp Z_\\Delta/3$ ; $\\cp E_1=\\cp E_{12}e^{-j\\pi/6}/\\sqrt3$.</li><li>$P=\\sqrt3UI\\cos\\varphi$, $Q=\\sqrt3UI\\sin\\varphi$, $S=\\sqrt3UI$, $\\varphi=(\\cp V,\\cp I)$ ; $p(t)=P$ constante.</li><li>Réseau 3 fils : deux wattmètres, $P=\\langle u_{13}i_1+u_{23}i_2\\rangle$ dans tous les cas.</li></ul>",
     "debut": 43,
     "fin": 50,
     "partie": null,
     "sections": [
      {
       "titre": "Pourquoi le triphasé",
       "page": 43
      },
      {
       "titre": "Définitions et couplages",
       "page": 44
      },
      {
       "titre": "Étoile : tension du neutre",
       "page": 44
      },
      {
       "titre": "Régime sinusoïdal : direct, inverse, homopolaire",
       "page": 45
      },
      {
       "titre": "Tensions simples, tensions composées, courants",
       "page": 46
      },
      {
       "titre": "Schéma monophasé équivalent",
       "page": 47
      },
      {
       "titre": "Montages triangle",
       "page": 48
      },
      {
       "titre": "Puissance en triphasé équilibré",
       "page": 49
      }
     ],
     "methodes": [
      {
       "num": "6.1",
       "titre": "Construire le schéma monophasé équivalent",
       "page": 49
      }
     ],
     "pdf": "docs/metrologie-circuits-puissance/chapitre-06.pdf"
    }
   ]
  },
  {
   "id": "conception-systemes-logiques",
   "matiere": "numerique",
   "titre": "Conception des systèmes logiques",
   "description": "Algèbre de Boole, codage, logique CMOS, circuits combinatoires et séquentiels, mémoires et composants programmables, et le cours appliqué au BE (armoire à vidéoprojecteurs).",
   "pages": 67,
   "pdf": "docs/conception-systemes-logiques.pdf",
   "fiche": "docs/conception-systemes-logiques/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Algèbre de Boole et synthèse combinatoire",
     "intro": "Concevoir un système numérique, c'est savoir parler binaire : traduire un cahier des charges en table de vérité, puis en équation logique la plus simple possible, réalisable avec des portes.",
     "objectifs": "<ul><li>Distinguer logique combinatoire et logique séquentielle.</li><li>Écrire une table de vérité à partir d'un cahier des charges.</li><li>Manipuler les opérateurs et les théorèmes de l'algèbre de Boole.</li><li>Obtenir une expression simplifiée par Karnaugh, y compris avec des indéterminées.</li></ul>",
     "prerequis": "Aucun, sinon savoir que 1 est différent de 0.",
     "essentiel": "<ul><li>Table de vérité : $2^n$ lignes en binaire naturel ; X pour une sortie non spécifiée.</li><li>Fondamentaux : ET, OU, NON ; dérivés : NAND, NOR, XOR ($A\\xor B=\\nb AB+A\\nb B$).</li><li>De Morgan : $\\nb{A+B}=\\nb A\\,\\nb B$, $\\nb{AB}=\\nb A+\\nb B$. Absorption : $A+AB=A$, $A+\\nb AB=A+B$. Consensus : $AB+\\nb AC+BC=AB+\\nb AC$.</li><li>Somme des mintermes à 1, ou complément de la somme des mintermes à 0 ; l'expression n'est pas unique.</li><li>Karnaugh : ordre Gray, groupes adjacents de $2^k$ cases les plus grands possible, bords adjacents ; on garde les variables constantes du groupe ; les X servent à agrandir les groupes.</li></ul>",
     "debut": 6,
     "fin": 13,
     "partie": null,
     "sections": [
      {
       "titre": "Systèmes combinatoires et séquentiels",
       "page": 6
      },
      {
       "titre": "La table de vérité",
       "page": 6
      },
      {
       "titre": "Opérateurs logiques",
       "page": 7
      },
      {
       "titre": "Règles et théorèmes de l'algèbre de Boole",
       "page": 8
      },
      {
       "titre": "De la table de vérité à l'équation",
       "page": 9
      },
      {
       "titre": "Le tableau de Karnaugh",
       "page": 10
      },
      {
       "titre": "États indéterminés",
       "page": 12
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Écrire une équation à partir de la table de vérité",
       "page": 9
      },
      {
       "num": "1.2",
       "titre": "Simplifier une fonction par Karnaugh",
       "page": 11
      },
      {
       "num": "1.3",
       "titre": "Exploiter les indéterminées",
       "page": 12
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Codage et numération binaire",
     "intro": "Tout objet traité par un système numérique doit être codé par des 0 et des 1. Ce chapitre donne les codages des entiers (naturels et signés), des réels (virgule fixe et flottante) et quelques codes particuliers.",
     "objectifs": "<ul><li>Convertir entre décimal, binaire et hexadécimal.</li><li>Coder et calculer en complément à 2, détecter un dépassement.</li><li>Coder un réel en virgule fixe $(n,m,k)$ et en flottant IEEE 754.</li><li>Connaître les codes Gray, BCD, excédent 3, Aiken, ASCII, $p$ parmi $n$, parité.</li></ul>",
     "prerequis": "Chapitre 1.",
     "essentiel": "<ul><li>$N=\\sum a_iB^i$ ; divisions successives par 2 ; groupes de 4 bits pour l'hexadécimal.</li><li>Non signé : $\\ient{0}{2^N-1}$. Complément à 2 : $-x=\\mathrm{inv}(x)+1$, plage $\\ient{-2^{N-1}}{2^{N-1}-1}$, MSB de poids $-2^{N-1}$, même additionneur qu'en non signé ; attention au dépassement.</li><li>Virgule fixe $(n,m,k)$, $n=m+k+1$ : pas $2^{-k}$, plage $[-2^m;2^m-2^{-k}]$.</li><li>IEEE 754 : $(-1)^s\\,2^{e-127}\\,1{,}f$ ; 1 + 8 + 23 bits.</li><li>Gray : un bit change ; BCD pondéré ; XS3 et Aiken auto-complémentaires ; ASCII 7 bits ; $p$ parmi $n$ et parité détectent sans corriger.</li></ul>",
     "debut": 14,
     "fin": 18,
     "partie": null,
     "sections": [
      {
       "titre": "Bases de numération",
       "page": 14
      },
      {
       "titre": "Entiers naturels et entiers signés",
       "page": 15
      },
      {
       "titre": "Réels en virgule fixe",
       "page": 15
      },
      {
       "titre": "Réels en virgule flottante (IEEE 754)",
       "page": 16
      },
      {
       "titre": "Autres codes",
       "page": 17
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Changer de base",
       "page": 14
      },
      {
       "num": "2.2",
       "titre": "Coder un réel négatif en virgule fixe",
       "page": 16
      },
      {
       "num": "2.3",
       "titre": "Coder un réel en IEEE 754",
       "page": 16
      },
      {
       "num": "2.4",
       "titre": "Soustraire en excédent 3",
       "page": 17
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Du transistor à la logique CMOS",
     "intro": "Une porte logique est un circuit électrique : il faut associer des tensions aux états 0 et 1, puis réaliser des interrupteurs commandés. Ce chapitre va du transistor MOS aux portes CMOS, avec leurs performances statiques et dynamiques.",
     "objectifs": "<ul><li>Connaître les niveaux logiques TTL et CMOS.</li><li>Modéliser un transistor MOS en interrupteur.</li><li>Calculer consommation et temps de commutation d'un inverseur.</li><li>Synthétiser une fonction en CMOS (réseaux N et P duaux).</li><li>Connaître porte de transfert et sortie trois états.</li></ul>",
     "prerequis": "Chapitre 1 ; circuits RC (méthodes d'analyse des circuits).",
     "essentiel": "<ul><li>TTL : 1 si $V_e&gt;2$ V, 0 si $V_e&lt;0{,}8$ V. CMOS : 1 si $V_e&gt;0{,}7V_{DD}$, 0 si $V_e&lt;0{,}3V_{DD}$.</li><li>NMOS fermé pour une grille à 1, PMOS fermé pour une grille à 0 ; série = ET, parallèle = OU.</li><li>Inverseur résistif : $P_{stat}=V_{DD}^2/2R$ ; CMOS : $P_{stat}=0$. Dans les deux cas $P_{dyn}=fC_LV_{DD}^2$.</li><li>$t_r,t_f$ : 10–90 % ; $t_p$ : à 50 %, s'additionnent. Charge RC : $t_r=RC\\ln9\\approx2{,}2RC$, $t_{pLH}=RC\\ln2\\approx0{,}7RC$.</li><li>Porte CMOS : réseaux N et P duaux, fonction toujours complémentée ; sinon $\\nb S$ puis un inverseur.</li><li>Porte de transfert : NMOS + PMOS en parallèle ; trois états pour les bus.</li></ul>",
     "debut": 19,
     "fin": 26,
     "partie": null,
     "sections": [
      {
       "titre": "Codage électrique des états logiques",
       "page": 19
      },
      {
       "titre": "Générer un signal binaire : l'interrupteur commandé",
       "page": 20
      },
      {
       "titre": "Le transistor MOS",
       "page": 21
      },
      {
       "titre": "L'inverseur NMOS à charge résistive",
       "page": 21
      },
      {
       "titre": "Temps de commutation et puissance dynamique",
       "page": 21
      },
      {
       "titre": "L'inverseur CMOS",
       "page": 23
      },
      {
       "titre": "Synthèse des fonctions en logique CMOS",
       "page": 24
      },
      {
       "titre": "Autres opérateurs à interrupteurs CMOS",
       "page": 25
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Synthétiser $S=f(e_i)$ en CMOS",
       "page": 24
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Fonctions et circuits combinatoires",
     "intro": "Quelques fonctions combinatoires reviennent partout : elles existent en circuits standard et servent de briques aux processeurs, aux mémoires et aux FPGA.",
     "objectifs": "<ul><li>Écrire les équations des codeurs, codeurs prioritaires, décodeurs et transcodeurs.</li><li>Réaliser et associer multiplexeurs et démultiplexeurs ; générer une fonction avec un multiplexeur (LUT).</li><li>Concevoir comparateurs et additionneurs ; connaître le principe de l'UAL.</li></ul>",
     "prerequis": "Chapitres 1 à 3.",
     "essentiel": "<ul><li>Codeur : $2^{n-1}&lt;N\\le2^n$, une seule entrée active ; prioritaire : l'entrée de poids fort l'emporte.</li><li>Décodeur : chaque sortie est un minterme ; validation pour associer ; matrice pour plus de 3 bits.</li><li>Gray : $G_i=B_{i+1}\\xor B_i$ ; $B_i=B_{i+1}\\xor G_i$.</li><li>Multiplexeur : $S=\\sum m_iE_i$ ; génère toute fonction (LUT) en temps constant.</li><li>Comparateur : $(A=B)=\\prod\\nb{A_i\\xor B_i}$ ; complet depuis les poids forts.</li><li>Additionneur complet : $S=A\\xor B\\xor C$, $C^+=AB+(A\\xor B)C$ ; propagation de retenue.</li></ul>",
     "debut": 27,
     "fin": 33,
     "partie": null,
     "sections": [
      {
       "titre": "Combinatoire ou séquentiel ?",
       "page": 27
      },
      {
       "titre": "Codeurs",
       "page": 27
      },
      {
       "titre": "Décodeurs",
       "page": 28
      },
      {
       "titre": "Transcodeurs",
       "page": 29
      },
      {
       "titre": "Multiplexeurs et démultiplexeurs",
       "page": 30
      },
      {
       "titre": "Comparateurs",
       "page": 31
      },
      {
       "titre": "Opérateurs arithmétiques",
       "page": 31
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Décoder plus de 3 bits",
       "page": 29
      },
      {
       "num": "4.2",
       "titre": "Associer des multiplexeurs",
       "page": 30
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Mémoriser : bascules et registres",
     "intro": "La logique séquentielle exige de mémoriser. Ce chapitre construit le point mémoire, puis les bascules RS, D latch, D flip-flop et JK, et enfin les registres.",
     "objectifs": "<ul><li>Comprendre l'origine d'un glitch.</li><li>Écrire tables et équations des bascules RS, D latch, D flip-flop, JK.</li><li>Distinguer synchronisation sur niveau et sur front ; connaître $t_{setup}$, $t_{hold}$, $t_W$.</li><li>Concevoir registres tampons, à décalage, universels, et un générateur pseudo-aléatoire.</li></ul>",
     "prerequis": "Chapitres 1, 3 et 4.",
     "essentiel": "<ul><li>Glitch : chemins de retards différents ; point mémoire : boucle d'un nombre pair d'inverseurs.</li><li>RS NOR : $Q^+=(Q+S)\\nb R$, $R=S=1$ interdit ; RS NAND : entrées actives à 0.</li><li>D latch : $Q^+=\\nb EQ+ED$, transparent sur niveau ; $S=ED$, $R=E\\nb D$ ; ou multiplexeur.</li><li>D flip-flop : $Q^+=D$ au front ; maître–esclave ; $t_{setup}$, $t_{hold}$, $t_W$ ; $\\nb{PR}$, $\\nb{CLR}$ asynchrones.</li><li>JK : $Q^+=J\\nb Q+\\nb KQ$ ; $J=K=1$ : basculement.</li><li>Registres : tampon, décalage, universel ; décalage $=\\times$ ou $\\div\\,2^N$ ; LFSR : $2^n-1$ états.</li></ul>",
     "debut": 34,
     "fin": 39,
     "partie": null,
     "sections": [
      {
       "titre": "Combinatoire, séquentiel asynchrone, séquentiel synchrone",
       "page": 34
      },
      {
       "titre": "Le point mémoire élémentaire",
       "page": 34
      },
      {
       "titre": "La bascule RS",
       "page": 35
      },
      {
       "titre": "La bascule D latch (verrou)",
       "page": 35
      },
      {
       "titre": "La bascule D flip-flop (sur front)",
       "page": 36
      },
      {
       "titre": "La bascule JK",
       "page": 37
      },
      {
       "titre": "Registres",
       "page": 38
      }
     ],
     "methodes": [
      {
       "num": "5.1",
       "titre": "Réaliser un D latch",
       "page": 36
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-05.pdf"
    },
    {
     "n": 6,
     "titre": "Synthèse des systèmes séquentiels : machines à états",
     "intro": "Une machine à états traduit un cahier des charges séquentiel en un graphe, puis en équations de bascules D. C'est la méthode de synthèse de tout système séquentiel synchrone.",
     "objectifs": "<ul><li>Expliquer pourquoi l'asynchrone pose problème (aléas, courses critiques) et ce qu'apporte l'horloge.</li><li>Distinguer machines de Moore et de Mealy.</li><li>Dessiner un diagramme d'états robuste ; écrire tables de transitions et de sorties.</li><li>Synthétiser avec un codage binaire ou un codage 1 parmi N ; ajouter un RESET.</li></ul>",
     "prerequis": "Chapitres 1 et 5.",
     "essentiel": "<ul><li>Asynchrone : aléas, courses critiques, codes inexistants ; synchrone : l'horloge masque les transitoires, mais doit être rapide devant les entrées.</li><li>Moore : sorties fonctions de l'état seul (privilégié) ; Mealy : de l'état et des entrées.</li><li>Cinq étapes : cahier des charges, graphe, codage et tables, équations, schéma. Un seul état actif.</li><li>Maintien $=$ complément de la réunion des conditions de sortie ; conditions de sortie exclusives.</li><li>Bascules D : $D_i=A_i^+$. RESET par les entrées de forçage (synthèse inchangée).</li><li>1 parmi N : $D_i=$ évolution $+$ maintien, lu sur le graphe.</li></ul>",
     "debut": 40,
     "fin": 46,
     "partie": null,
     "sections": [
      {
       "titre": "Qu'est-ce que la logique séquentielle ?",
       "page": 40
      },
      {
       "titre": "Les problèmes de l'asynchrone",
       "page": 40
      },
      {
       "titre": "Les systèmes synchrones",
       "page": 41
      },
      {
       "titre": "Le diagramme d'états",
       "page": 41
      },
      {
       "titre": "Exemple : le bouton à bascule",
       "page": 42
      },
      {
       "titre": "Initialisation : entrées de forçage",
       "page": 43
      },
      {
       "titre": "Exemple complet : le ventilateur",
       "page": 44
      },
      {
       "titre": "Le codage 1 parmi N (une bascule par état)",
       "page": 45
      }
     ],
     "methodes": [
      {
       "num": "6.1",
       "titre": "Synthétiser une machine à états",
       "page": 42
      },
      {
       "num": "6.2",
       "titre": "Ajouter un RESET",
       "page": 43
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-06.pdf"
    },
    {
     "n": 7,
     "titre": "Les compteurs",
     "intro": "Un compteur est la machine à états la plus courante. On le construit en asynchrone (simple, mais lent et sujet aux aléas) ou en synchrone (méthode systématique, recommandée).",
     "objectifs": "<ul><li>Définir compteur synchrone/asynchrone, à cycle complet/incomplet.</li><li>Réaliser un diviseur par 2 et un compteur asynchrone ; en connaître les défauts.</li><li>Synthétiser un compteur synchrone modulo $N$ et traiter les états hors cycle.</li></ul>",
     "prerequis": "Chapitres 5 et 6.",
     "essentiel": "<ul><li>Cycle complet : $N=2^n$ ; incomplet : $2^{n-1}&lt;N&lt;2^n$, états hors cycle à traiter.</li><li>Asynchrone : cascade de diviseurs par 2 ; temps de propagation cumulés, états transitoires ; troncature par <em>clear</em> déconseillée.</li><li>Synchrone : table de transition, $D_k=Q_k^+$ par Karnaugh ; $D_k=(Q_1\\cdots Q_{k-1})\\xor Q_k$ en binaire ; $f_{max}=1/(T_{PL}+T_B)$.</li><li>Modulo 5 : $D_1=\\nb{Q_1}\\,\\nb{Q_3}$, $D_2=Q_1\\xor Q_2$, $D_3=Q_1Q_2$.</li></ul>",
     "debut": 47,
     "fin": 50,
     "partie": null,
     "sections": [
      {
       "titre": "Définitions",
       "page": 47
      },
      {
       "titre": "Le diviseur par 2",
       "page": 47
      },
      {
       "titre": "Compteurs asynchrones",
       "page": 47
      },
      {
       "titre": "Compteurs synchrones",
       "page": 48
      }
     ],
     "methodes": [
      {
       "num": "7.1",
       "titre": "Cycle incomplet en asynchrone (déconseillé)",
       "page": 48
      },
      {
       "num": "7.2",
       "titre": "Synthétiser un compteur synchrone",
       "page": 49
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-07.pdf"
    },
    {
     "n": 8,
     "titre": "Mémoires à semi-conducteurs",
     "intro": "Les mémoires stockent données, programmes et résultats. Ce chapitre présente leur organisation (bus, décodage) puis les technologies de point mémoire : SRAM, DRAM, ROM, PROM, EPROM, EEPROM.",
     "objectifs": "<ul><li>Caractériser une mémoire : capacité, organisation, modes, accès.</li><li>Décrire la structure générale (bus d'adresses et de données, décodeurs, $\\nb{CS}$, $R/\\nb W$).</li><li>Comparer les cellules SRAM et DRAM ; estimer une période de rafraîchissement.</li><li>Distinguer ROM, PROM, EPROM et EEPROM.</li></ul>",
     "prerequis": "Chapitres 3, 4 et 5.",
     "essentiel": "<ul><li>$2^n$ mots de $m$ bits ; $\\nb{CS}$, $R/\\nb W$ ; décodeurs de lignes et de colonnes.</li><li>SRAM : bistable, 6 transistors, volatile. DRAM : condensateur, 3 ou 1 transistor, rafraîchissement ($\\Delta t=C_P\\,\\Delta V/I_f$), plus dense, moins chère.</li><li>ROM : masque ; PROM : fusibles, une fois ; EPROM : grille flottante, effacement UV ; EEPROM : effacement électrique sur site.</li></ul>",
     "debut": 51,
     "fin": 55,
     "partie": null,
     "sections": [
      {
       "titre": "Un peu d'histoire",
       "page": 51
      },
      {
       "titre": "Caractéristiques et classification",
       "page": 51
      },
      {
       "titre": "Structure générale",
       "page": 52
      },
      {
       "titre": "Mémoires vives : SRAM et DRAM",
       "page": 53
      },
      {
       "titre": "Mémoires mortes",
       "page": 54
      }
     ],
     "methodes": [],
     "pdf": "docs/conception-systemes-logiques/chapitre-08.pdf"
    },
    {
     "n": 9,
     "titre": "Composants numériques programmables",
     "intro": "Plutôt que de câbler des portes, on configure un composant programmable : mémoire, PAL, CPLD ou FPGA. Ce chapitre retrace cette évolution et décrit les blocs d'un FPGA.",
     "objectifs": "<ul><li>Connaître le vocabulaire : ASIC, PLD, PLA, PAL, CPLD, FPGA.</li><li>Utiliser une mémoire ou un PAL comme générateur de fonctions.</li><li>Décrire l'architecture d'un FPGA : blocs logiques (LUT), entrées/sorties, routage, flot de conception.</li></ul>",
     "prerequis": "Chapitres 4, 5 et 8.",
     "essentiel": "<ul><li>Mémoire : ET fixe, OU programmable ; PAL : ET programmable, OU fixe ; PLA : les deux programmables.</li><li>PAL $+$ bascule $+$ macrocellule $=$ EPLD ; EPLD en blocs $+$ matrice d'interconnexion $=$ CPLD.</li><li>FPGA : blocs logiques (LUT $+$ bascule D), blocs d'E/S, routage programmable ; remplissage $\\le75$ %.</li><li>Flot : description (VHDL), synthèse, simulation, placement-routage, simulation temporelle, configuration.</li></ul>",
     "debut": 56,
     "fin": 59,
     "partie": null,
     "sections": [
      {
       "titre": "Définitions et historique",
       "page": 56
      },
      {
       "titre": "La mémoire comme composant programmable",
       "page": 57
      },
      {
       "titre": "PAL, EPLD et CPLD",
       "page": 57
      },
      {
       "titre": "Les FPGA",
       "page": 58
      }
     ],
     "methodes": [
      {
       "num": "9.1",
       "titre": "Flot de conception sur FPGA",
       "page": 58
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-09.pdf"
    },
    {
     "n": 10,
     "titre": "Du cours au BE : l'armoire à vidéoprojecteurs",
     "intro": "Le bureau d'études de logique consiste à concevoir, sur une carte FPGA avec Quartus, la commande d'une armoire de six vidéoprojecteurs. Tout ce qu'il demande est dans ce livre : ce chapitre dit, module par module, <em>quel outil du cours utiliser et comment</em>, pour savoir quoi faire à partir du cours seul. Le compte rendu des séances (sur ce site) raconte ce qui a été fait ; ce chapitre donne la méthode.",
     "objectifs": "<ul><li>Découper le cahier des charges en modules et reconnaître, pour chacun, le type de circuit du cours.</li><li>Passer d'une méthode du cours au schéma Quartus : polarités, horloge unique, validation, initialisation.</li><li>Préparer les modules suivants (décompteur et afficheur 20 s, machine globale) avant la séance.</li></ul>",
     "prerequis": "Chapitres 1, 4, 5, 6 et 7.",
     "essentiel": "<ul><li>Combinatoire (MA7, MA20) : table, Karnaugh ou multiplexeur ; séquentiel (MCV, MD20, machine globale) : graphe, 1 parmi N ou compteur synchrone.</li><li>Carte : afficheurs en logique négative ($S_k=\\nb x$) ; $\\nb{PR}$, $\\nb{CLR}$ actives à 0 et prioritaires ; entrée non branchée $=1$.</li><li>Une seule horloge (50 MHz) ; boutons par détecteur de front ($P=A\\,\\nb B$) ; le 1 Hz sur ENA, jamais sur l'horloge.</li><li>MD20 : deux décades BCD, $ENA_U=T\\,\\nb{FIN}$, $ENA_D=T\\,\\nb{FIN}(U=0)$, chargement de 20 ; MA20 $=$ deux MA7.</li><li>Machine globale INIT $\\to$ BGV $\\to$ BGC $\\to$ BGS en Moore, sorties $=$ validations des modules.</li></ul>",
     "debut": 60,
     "fin": 67,
     "partie": null,
     "sections": [
      {
       "titre": "Le projet et sa découpe",
       "page": 60
      },
      {
       "titre": "La méthode, du cahier des charges à la carte",
       "page": 61
      },
      {
       "titre": "Les briques du cours utilisées sur la carte",
       "page": 62
      },
      {
       "titre": "Préparer le décompteur et l'afficheur 20 s",
       "page": 63
      },
      {
       "titre": "La machine globale et les autres modules",
       "page": 65
      },
      {
       "titre": "Déboguer sur la carte",
       "page": 65
      }
     ],
     "methodes": [
      {
       "num": "10.1",
       "titre": "Concevoir un module du BE",
       "page": 61
      }
     ],
     "pdf": "docs/conception-systemes-logiques/chapitre-10.pdf"
    }
   ]
  },
  {
   "id": "be-logique-armoire",
   "matiere": "numerique",
   "titre": "BE de logique : l'armoire à vidéoprojecteurs",
   "description": "Compte rendu des séances 1 et 2 : étapes, choix et obstacles rencontrés pour l'afficheur 7 segments (MA7) et le choix du vidéoprojecteur (MCV), puis ce qu'il faut pour la séance 3.",
   "pages": 10,
   "pdf": "docs/be-logique-armoire.pdf",
   "fiche": null,
   "chapitres": [
    {
     "n": 1,
     "titre": "Séance 1 : l'afficheur 7 segments (MA7)",
     "intro": "Le premier module traduit un chiffre codé en binaire en l'état des sept segments d'un afficheur. On l'a conçu sur papier (table, Karnaugh), câblé sous Quartus, puis validé sur la carte.",
     "objectifs": "<ul><li>Afficher un chiffre de 0 à 9 donné sur 4 bits.</li><li>Segments 0 à 3 par équations, 4 à 6 par multiplexeurs (consigne).</li><li>Valider le module avec les interrupteurs de la carte.</li></ul>",
     "prerequis": "Tables de vérité, Karnaugh, multiplexeur.",
     "essentiel": "<ul><li>MA7 validé : chiffre 0 à 9 sur 4 bits, « E » pour 10 à 15, logique négative ($S_i=1$ : segment éteint).</li><li>$S_0$ à $S_3$ par Karnaugh ; $S_4$ à $S_6$ par multiplexeur 16 vers 1 ($D_k$ = valeur du segment pour $k$).</li><li>Leçons Quartus : gros point = liaison ; un bit = fil fin nommé <code>A[i]</code> ; un groupe = fil épais <code>A[3..0]</code>.</li></ul>",
     "debut": 3,
     "fin": 5,
     "partie": null,
     "sections": [
      {
       "titre": "Les étapes",
       "page": 3
      },
      {
       "titre": "Les obstacles",
       "page": 4
      }
     ],
     "methodes": [],
     "pdf": "docs/be-logique-armoire/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Séance 2 : le choix du vidéoprojecteur (MCV)",
     "intro": "Le deuxième module est le premier séquentiel : un compteur/décompteur de 1 à 6 piloté par deux boutons, dont le numéro s'affiche grâce au MA7. On l'a réalisé comme une machine à états avec des bascules D.",
     "objectifs": "<ul><li>KEY3 incrémente, KEY2 décrémente, KEY0 remet à 1, SW0 active le module.</li><li>Synthèse par machine à états codée 1 parmi $N$.</li><li>Assembler MCV et MA7 et tester sur la carte.</li></ul>",
     "prerequis": "Séance 1 ; bascule D, machine à états.",
     "essentiel": "<ul><li>MCV : six bascules D, une par état ; $E_i^+=E_{i-1}P+E_{i+1}M+E_i\\,\\nb P\\,\\nb M$ ; sorties $S_0=E_1+E_3+E_5$, $S_1=E_2+E_3+E_6$, $S_2=E_4+E_5+E_6$.</li><li>Boutons via détecteur de front ; activation par <code>ENA</code> ; reset sur <code>PRN</code> de $E_1$ et <code>CLRN</code> des autres.</li><li>Pannes : espace dans un nom ; entrée non branchée = VCC ; reset via détecteur ; mauvaise horloge ; reset inversé.</li><li>Reste à faire : ajouter la porte <code>not</code>, vérifier, simuler et faire valider.</li></ul>",
     "debut": 6,
     "fin": 9,
     "partie": null,
     "sections": [
      {
       "titre": "Les étapes",
       "page": 6
      },
      {
       "titre": "Les obstacles",
       "page": 8
      }
     ],
     "methodes": [],
     "pdf": "docs/be-logique-armoire/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Pour la séance 3",
     "intro": "La séance 3 porte sur le décompteur 20 s (MD20) et son afficheur (MA20), qui serviront deux fois, dans BGC et dans BGS. Avant d'y aller, il faut finir le MCV ; ensuite, presque tout ce qu'on a appris se réutilise.",
     "objectifs": "",
     "prerequis": "",
     "essentiel": "<ul><li>Avant la séance 3 : porte <code>not</code> sur le reset, simulation et validation du MCV, <code>ma7.bdf</code> ajouté au projet.</li><li>Une seule horloge (50 MHz) ; le signal 1 Hz sert de validation, pas d'horloge.</li><li>MA20 réutilisera deux MA7 ; MD20 réutilisera <code>ENA</code> et <code>PRN</code>/<code>CLRN</code> pour charger 20.</li></ul>",
     "debut": 10,
     "fin": 10,
     "partie": null,
     "sections": [
      {
       "titre": "À terminer avant",
       "page": 10
      },
      {
       "titre": "Ce qu'on réutilise",
       "page": 10
      }
     ],
     "methodes": [],
     "pdf": "docs/be-logique-armoire/chapitre-03.pdf"
    }
   ]
  },
  {
   "id": "architecture-assembleur",
   "matiere": "numerique",
   "titre": "Architecture et programmation en assembleur",
   "description": "Codage, architecture de Von Neumann, processeur EROS et micro-instructions, modes d'adressage, mémoire et décodage, interfaçage, interruptions.",
   "pages": 57,
   "pdf": "docs/architecture-assembleur.pdf",
   "fiche": "docs/architecture-assembleur/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Codage : ce que manipule le processeur",
     "intro": "Un processeur ne connaît que des mots de bits de taille fixe. Qu'un octet représente un entier, un caractère, un chiffre décimal ou une instruction, c'est le <em>programme</em> qui en décide. Ce chapitre rassemble ce qu'il faut savoir de ces codages pour programmer en assembleur ; les démonstrations générales (complément à 2, virgule fixe, IEEE 754, Gray) sont dans le livre <em>Conception des systèmes logiques</em>, chapitre 2, et ne sont pas refaites ici.",
     "objectifs": "<ul><li>Passer sans calcul du binaire à l'octal et à l'hexadécimal.</li><li>Lire un même octet comme entier non signé ou signé, et savoir quand le résultat d'une opération est faux.</li><li>Comprendre d'où viennent les indicateurs C, V et Z que testera le programme.</li><li>Corriger une addition en BCD ; détecter une erreur de transmission par parité ou par code $p$ parmi $n$.</li></ul>",
     "prerequis": "Numération binaire, complément à 2.",
     "essentiel": "<ul><li>$n$ bits $\\to2^n$ combinaisons ; 1 ko $=1024$ o. Hexa : 4 bits par chiffre, regroupés depuis la droite.</li><li>Le processeur additionne modulo $2^n$. C signale un dépassement en non signé, V en complément à 2 ($V=c_n\\xor c_{n-1}$), Z un résultat nul.</li><li>BCD : corriger par $+6$ toute somme de chiffres supérieure à 9.</li><li>La parité détecte un nombre impair d'erreurs ; un code $p$ parmi $n$ détecte les erreurs isolées. Aucun des deux ne corrige.</li></ul>",
     "debut": 5,
     "fin": 10,
     "partie": null,
     "sections": [
      {
       "titre": "Mots binaires et unités",
       "page": 5
      },
      {
       "titre": "Octal et hexadécimal : des écritures compactes du binaire",
       "page": 5
      },
      {
       "titre": "Entiers signés et indicateurs de l'ALU",
       "page": 6
      },
      {
       "titre": "Nombres non entiers : virgule fixe et virgule flottante",
       "page": 8
      },
      {
       "titre": "Codes décimaux et arithmétique BCD",
       "page": 9
      },
      {
       "titre": "Codes à distance unité et caractères",
       "page": 9
      },
      {
       "titre": "Codes détecteurs d'erreurs",
       "page": 10
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Soustraire en excédent 3",
       "page": 9
      }
     ],
     "pdf": "docs/architecture-assembleur/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "L'architecture de Von Neumann",
     "intro": "Un microprocesseur n'est rien d'autre qu'une machine à calculer <em>programmable</em>. Ce chapitre explique ce que « programmable » exige : une mémoire qui contient à la fois le programme et les données, une unité qui va y chercher les instructions une à une, et un organe de calcul. C'est l'architecture décrite par John von Neumann en 1945, toujours celle de nos ordinateurs.",
     "objectifs": "<ul><li>Situer le processeur dans l'empilement des couches, du transistor à l'application.</li><li>Énoncer les quatre organes de la machine de Von Neumann et leur rôle.</li><li>Décrire le cycle recherche – décodage – exécution et le rôle du compteur programme.</li><li>Expliquer pourquoi le processeur a besoin de registres et de bus.</li></ul>",
     "prerequis": "Portes logiques, registres, mémoires (livre <em>Conception des systèmes logiques</em>).",
     "essentiel": "<ul><li>Un processeur est une machine à calculer programmable : il exécute une suite d'instructions lues en mémoire.</li><li>Von Neumann : une mémoire unique (programme <em>et</em> données), une ALU, une unité d'échange, une unité de commande ; trois bus (adresses, données, contrôle).</li><li>Chaque instruction suit le cycle recherche – décodage – exécution, cadencé par l'horloge ; le PC pointe l'instruction suivante, l'IR contient l'instruction courante.</li></ul>",
     "debut": 11,
     "fin": 14,
     "partie": null,
     "sections": [
      {
       "titre": "Du transistor au programme : les couches",
       "page": 11
      },
      {
       "titre": "De la calculatrice au processeur",
       "page": 12
      },
      {
       "titre": "Les organes du processeur",
       "page": 13
      },
      {
       "titre": "Repères historiques",
       "page": 14
      }
     ],
     "methodes": [],
     "pdf": "docs/architecture-assembleur/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Le processeur EROS, instruction par instruction",
     "intro": "Pour comprendre ce qui se passe réellement dans un processeur, on construit un calculateur 8 bits volontairement simple, <span>EROS</span>, puis on suit l'exécution de trois instructions au rythme de l'horloge. Tout processeur réel fonctionne sur ce principe ; seules la taille des mots et l'ingéniosité du chemin de données changent.",
     "objectifs": "<ul><li>Décrire le chemin de données d'EROS : registres, ALU, PC, AR, registre d'instruction, bus.</li><li>Coder une instruction en langage machine à partir de son format.</li><li>Décomposer l'exécution d'une instruction en micro-instructions, cycle par cycle.</li><li>Évaluer la durée d'exécution d'un programme.</li></ul>",
     "prerequis": "Chapitre 2 ; multiplexeurs, registres, ALU.",
     "essentiel": "<ul><li>EROS : bus de 8 bits, 256 adresses, 8 registres, une ALU à indicateurs C V Z, un PC auto-incrémenté, un registre d'adresse AR et un registre d'instruction IH:IL.</li><li>Format : code opération 7 bits | RD | RA | RB (3 bits chacun), éventuellement suivi d'un octet d'opérande.</li><li>Recherche en 4 cycles (AR$\\aff$PC, IH$\\aff$M[AR], AR$\\aff$PC, IL$\\aff$M[AR]), puis exécution : 1 cycle entre registres, 2 avec une constante, 3 avec une adresse en opérande.</li><li>$T_{\\text{exec}}=N_i\\,\\overline N_{\\text{cycles}}\\,T_H$.</li></ul>",
     "debut": 15,
     "fin": 21,
     "partie": null,
     "sections": [
      {
       "titre": "Choix des formats",
       "page": 15
      },
      {
       "titre": "Le chemin de données",
       "page": 16
      },
      {
       "titre": "Format d'une instruction",
       "page": 17
      },
      {
       "titre": "Première instruction : charger une constante",
       "page": 17
      },
      {
       "titre": "Deuxième instruction : une addition entre registres",
       "page": 18
      },
      {
       "titre": "Troisième instruction : ranger un registre en mémoire",
       "page": 19
      },
      {
       "titre": "L'unité de contrôle et le séquenceur",
       "page": 19
      },
      {
       "titre": "Performances",
       "page": 20
      },
      {
       "titre": "Langage machine, assembleur et langage évolué",
       "page": 21
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Coder une instruction en langage machine",
       "page": 17
      }
     ],
     "pdf": "docs/architecture-assembleur/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Jeu d'instructions et modes d'adressage",
     "intro": "Trois instructions ont suffi à parcourir tous les chemins du processeur. On peut maintenant dresser la liste complète des instructions d'EROS, puis les classer selon la façon dont elles désignent leurs opérandes : c'est la notion de <em>mode d'adressage</em>, la clé pour manipuler des variables et des tableaux.",
     "objectifs": "<ul><li>Connaître les quatre familles d'instructions d'EROS.</li><li>Distinguer décalage logique, décalage arithmétique et rotation.</li><li>Identifier le mode d'adressage d'une instruction et calculer l'adresse effective de son opérande.</li><li>Parcourir un tableau avec l'adressage indexé.</li></ul>",
     "prerequis": "Chapitre 3.",
     "essentiel": "<ul><li>Quatre familles : arithmétique et logique (positionnent C V Z), décalages et rotations, instructions particulières (<code>stc</code>, <code>clc</code>, <code>nop</code>, <code>hlt</code>), déplacements.</li><li><code>lsl</code>/<code>lsr</code> : $\\times2$ et $\\div2$ non signés ; <code>asr</code> : $\\div2$ signé ; le bit sorti tombe dans C.</li><li>Modes d'adressage : immédiat (la donnée), absolu (son adresse), indirect (un registre contient l'adresse), indexé (adresse $=$ base $+$ déplacement).</li><li>Un tableau se parcourt en faisant varier un registre d'indice ; l'adressage indexé en donne l'élément courant.</li></ul>",
     "debut": 22,
     "fin": 25,
     "partie": null,
     "sections": [
      {
       "titre": "Les instructions d'EROS",
       "page": 22
      },
      {
       "titre": "Les modes d'adressage",
       "page": 24
      },
      {
       "titre": "Tableaux et adressage indexé",
       "page": 25
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Parcourir un tableau",
       "page": 26
      }
     ],
     "pdf": "docs/architecture-assembleur/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Traduire un algorithme en assembleur",
     "intro": "Avec les instructions vues jusqu'ici, un programme s'exécute de façon purement linéaire : le PC avance d'une instruction à la suivante. Pour programmer un test ou une boucle, il faut pouvoir <em>rompre la séquence</em>, c'est-à-dire écrire une nouvelle valeur dans le PC. Ce chapitre montre comment les structures de l'algorithmique (si, pour, tant que) se traduisent avec ces seuls sauts.",
     "objectifs": "<ul><li>Expliquer l'exécution d'un saut au niveau du PC.</li><li>Utiliser les indicateurs C, V, Z et l'instruction <code>cmp</code> pour réaliser un test.</li><li>Traduire un SI… SINON, une boucle POUR et une boucle FAIRE… TANT QUE.</li><li>Représenter un programme par un organigramme.</li></ul>",
     "prerequis": "Chapitres 1 (indicateurs) et 4.",
     "essentiel": "<ul><li>Un saut écrit une nouvelle adresse dans le PC. <code>bra</code> : toujours ; <code>bz</code>/<code>bnz</code>, <code>bc</code>/<code>bnc</code>, <code>bv</code>/<code>bnv</code> : selon l'indicateur.</li><li>Un saut conditionnel teste le résultat de la <em>dernière</em> opération de l'ALU ; <code>cmp RA,RB</code> calcule RA$-$RB pour tester l'égalité (Z) ou, en non signé, l'ordre (C).</li><li>SI… SINON : un saut conditionnel vers ALORS et un <code>bra</code> en fin de SINON. POUR : test de sortie en tête et <code>bra</code> de retour. FAIRE… TANT QUE : un seul saut conditionnel en fin de boucle.</li></ul>",
     "debut": 26,
     "fin": 31,
     "partie": null,
     "sections": [
      {
       "titre": "Rompre la séquence : le saut inconditionnel",
       "page": 27
      },
      {
       "titre": "Les sauts conditionnels",
       "page": 28
      },
      {
       "titre": "Représenter un programme : l'organigramme",
       "page": 29
      },
      {
       "titre": "Traduire un SI…ALORS…SINON",
       "page": 29
      },
      {
       "titre": "Traduire une boucle POUR",
       "page": 30
      },
      {
       "titre": "Traduire une boucle FAIRE…TANT QUE",
       "page": 30
      },
      {
       "titre": "Pourquoi programmer encore en assembleur ?",
       "page": 31
      }
     ],
     "methodes": [],
     "pdf": "docs/architecture-assembleur/chapitre-05.pdf"
    },
    {
     "n": 6,
     "titre": "La mémoire vue du processeur",
     "intro": "EROS supposait une mémoire unique, exactement aussi grande que son espace adressable. Un vrai système assemble plusieurs boîtiers, de types et de tailles différents (RAM, FLASH, EPROM), sur les mêmes bus. Deux questions se posent alors : comment le processeur distingue-t-il les boîtiers, et comment évite-t-on qu'ils parlent tous à la fois sur le bus de données ? On y répond d'abord de façon statique (le <em>décodage d'adresse</em>), puis dynamique (les <em>chronogrammes</em> d'échange).",
     "objectifs": "<ul><li>Distinguer espace adressable et mémoire physique ; dresser une carte mémoire.</li><li>Établir une table de décodage et les équations de sélection des boîtiers.</li><li>Associer des boîtiers en parallèle pour élargir le bus de données.</li><li>Lire un chronogramme de lecture et d'écriture ; vérifier la compatibilité des temps d'accès.</li></ul>",
     "prerequis": "Chapitre 3 ; mémoires et décodeurs (livre <em>Conception des systèmes logiques</em>, §4 et §8).",
     "essentiel": "<ul><li>Mémoire physique $\\le$ espace adressable ; un boîtier de $2^k$ cases reçoit A0–A$_{k-1}$, les bits de poids fort servent à le sélectionner.</li><li>Table de décodage : plages de début et fin en binaire ; un boîtier de $2^k$ cases doit commencer sur un multiple de $2^k$. Sélection $=$ produit des bits fixes ; on la complémente pour un $\\nb{CS}$ actif bas.</li><li>Un boîtier non sélectionné est en haute impédance : pas de conflit sur le bus de données si les plages sont disjointes.</li><li>Parallèle : élargit le mot ; décodage : augmente le nombre de mots.</li><li>Lecture : adresse, sélection, attente de $t_{\\text{acc}}$, lecture, désélection, HZ. Synchrone : vérifier $t_{\\text{déc}}+t_{\\text{acc}}\\le t_{\\text{disponible}}$ ; asynchrone : dialogue par signaux de validité.</li></ul>",
     "debut": 32,
     "fin": 38,
     "partie": null,
     "sections": [
      {
       "titre": "Rappels sur les mémoires",
       "page": 32
      },
      {
       "titre": "Espace adressable et mémoire physique",
       "page": 33
      },
      {
       "titre": "Le décodage d'adresse",
       "page": 34
      },
      {
       "titre": "Aspects dynamiques : les chronogrammes",
       "page": 37
      }
     ],
     "methodes": [
      {
       "num": "6.1",
       "titre": "Établir une table de décodage",
       "page": 34
      }
     ],
     "pdf": "docs/architecture-assembleur/chapitre-06.pdf"
    },
    {
     "n": 7,
     "titre": "Interfaçage avec le monde extérieur",
     "intro": "Un processeur qui ne communique qu'avec sa mémoire ne sert à rien : il doit lire des capteurs, commander des actionneurs, échanger avec d'autres machines. Ce chapitre montre que presque toutes les interfaces reposent sur un seul principe, celui des <em>registres d'échange</em> placés dans l'espace adressable. On le construit sur un exemple minimal, puis on l'applique à trois familles de circuits spécialisés : ports parallèles, temporisateurs et convertisseurs.",
     "objectifs": "<ul><li>Réaliser un registre de commande (bascules D) et un registre d'état (tampons trois états).</li><li>Placer des registres d'entrées–sorties dans l'espace adressable et écrire leur décodage.</li><li>Programmer un port parallèle et un timer à partir de leur modèle de registres.</li><li>Décrire une chaîne de conversion analogique–numérique et la caractéristique d'un convertisseur.</li></ul>",
     "prerequis": "Chapitre 6 ; bascules D, tampons trois états.",
     "essentiel": "<ul><li>Toute interface se programme à travers des registres (données, contrôle, état) placés dans l'espace adressable.</li><li>Sortie : bascules D (mémoriser) ; entrée : tampons trois états (isoler le bus).</li><li>Décodage EROS : RAM en 0–247, registres en 248–255 sélectionnés par $A_7A_6A_5A_4A_3$, puis A2–A0.</li><li>Un composant programmable s'initialise (registre de contrôle) avant de s'utiliser (registres de données).</li><li>CAN : $q=\\text{PE}/2^n$, $N=\\mathrm{INT}(V_e/q+0{,}5)$, erreur $\\pm q/2$ ; filtre anti-repliement à $F_e/2$ avant l'échantillonneur. CNA R–2R : $V_s=-V_{\\text{ref}}N/2^n$.</li></ul>",
     "debut": 39,
     "fin": 48,
     "partie": null,
     "sections": [
      {
       "titre": "Les familles d'interfaces",
       "page": 39
      },
      {
       "titre": "Un cas d'étude : piloter une maquette",
       "page": 40
      },
      {
       "titre": "Placer les registres dans l'espace adressable",
       "page": 41
      },
      {
       "titre": "Séquence d'accès à un registre",
       "page": 42
      },
      {
       "titre": "Composants spécialisés : le port parallèle",
       "page": 43
      },
      {
       "titre": "Le timer programmable",
       "page": 44
      },
      {
       "titre": "Conversion analogique–numérique et numérique–analogique",
       "page": 45
      },
      {
       "titre": "Microprocesseur et microcontrôleur",
       "page": 48
      }
     ],
     "methodes": [],
     "pdf": "docs/architecture-assembleur/chapitre-07.pdf"
    },
    {
     "n": 8,
     "titre": "Se synchroniser sur les événements : scrutation et interruptions",
     "intro": "Nous disposons maintenant d'un système numérique minimal capable de commander un processus physique : il lit des capteurs et pilote des actionneurs à travers ses registres d'interface. Mais un programme s'exécute <em>séquentiellement</em>, une instruction après l'autre, alors que les événements extérieurs (le passage d'un objet devant un capteur, la fin d'une conversion, l'arrivée d'un caractère) surviennent à des instants imprévisibles. Comment le processeur peut-il s'y synchroniser ? Deux réponses : aller voir régulièrement (<em>scrutation</em>), ou se faire prévenir (<em>interruption</em>).",
     "objectifs": "<ul><li>Écrire une boucle de scrutation et en identifier les défauts (échantillonnage, occupation du processeur).</li><li>Décrire le mécanisme d'une interruption : sauvegarde et restitution du contexte, pile, temps de latence.</li><li>Expliquer la table des vecteurs, les priorités et le masquage des interruptions.</li><li>Évaluer si un traitement par interruption respecte une période d'échantillonnage.</li></ul>",
     "prerequis": "Chapitres 5 et 7.",
     "essentiel": "<ul><li>Scrutation : le programme lit l'état en boucle ; il échantillonne l'événement à la période de sa boucle (risque de manquer ou de compter plusieurs fois un événement) et monopolise le processeur.</li><li>Interruption : un signal déclenche une rupture de séquence ; sauvegarde du contexte (PC, registres) dans la pile, saut à l'adresse lue dans la table des vecteurs, traitement court, restitution, reprise.</li><li>Latence $=$ délai entre l'événement et le début du traitement (fin d'instruction, sauvegarde, lecture du vecteur).</li><li>Priorités : une IRQ plus prioritaire interrompt une IRQ moins prioritaire ; une IRQ de priorité inférieure ou égale est masquée et différée. GIE autorise globalement les IT. Le chien de garde relance un système bloqué.</li><li>Le traitement doit durer nettement moins que la période d'échantillonnage.</li></ul>",
     "debut": 49,
     "fin": 57,
     "partie": null,
     "sections": [
      {
       "titre": "Le problème : compter les tours de PINGOO",
       "page": 49
      },
      {
       "titre": "Le contrôle par scrutation",
       "page": 50
      },
      {
       "titre": "Le contrôle par interruptions",
       "page": 51
      },
      {
       "titre": "Plusieurs interruptions",
       "page": 53
      },
      {
       "titre": "Limites du traitement par interruptions",
       "page": 55
      },
      {
       "titre": "Bilan : scrutation ou interruptions ?",
       "page": 56
      }
     ],
     "methodes": [],
     "pdf": "docs/architecture-assembleur/chapitre-08.pdf"
    }
   ]
  },
  {
   "id": "raffinage-algorithme",
   "matiere": "numerique",
   "titre": "Du raffinage à l'algorithme",
   "description": "Analyse descendante, structures de contrôle, variables, sous-programmes et une étude de cas complète.",
   "pages": 26,
   "pdf": "docs/raffinage-algorithme.pdf",
   "fiche": "docs/raffinage-algorithme/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Qu'est-ce qu'un algorithme ?",
     "intro": "Tout programme informatique passe par une étape de conception préliminaire : son algorithme. Ce chapitre le définit, présente ses deux représentations et situe la démarche suivie dans tout le cours.",
     "objectifs": "<ul><li>Définir un algorithme et ses propriétés.</li><li>Connaître les deux formalismes : pseudo-code et organigramme.</li><li>Situer raffinage et algorithme dans le développement d'une application.</li></ul>",
     "prerequis": "Aucun, sinon avoir déjà utilisé un ordinateur.",
     "essentiel": "<ul><li>Algorithme : suite d'instructions qui résout un problème, indépendante du langage, suffisante pour coder.</li><li>Deux représentations équivalentes : pseudo-code et organigramme.</li><li>Démarche : cahier des charges $\\to$ raffinage $\\to$ algorithme $\\to$ codage.</li></ul>",
     "debut": 4,
     "fin": 6,
     "partie": null,
     "sections": [
      {
       "titre": "Définition",
       "page": 4
      },
      {
       "titre": "Pseudo-code et organigramme",
       "page": 5
      },
      {
       "titre": "La démarche de développement",
       "page": 5
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Concevoir un algorithme",
       "page": 6
      }
     ],
     "pdf": "docs/raffinage-algorithme/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "La méthode de raffinage",
     "intro": "Le raffinage décompose l'action à réaliser en actions de plus en plus simples, jusqu'à ce que le processeur sache toutes les exécuter. C'est l'étape qui transforme un cahier des charges en une description précise de la réalisation.",
     "objectifs": "<ul><li>Connaître le vocabulaire : processeur, action élémentaire, donnée.</li><li>Raffiner une action principale, en version écrite et en version arbre.</li><li>Utiliser les structures de contrôle dans un raffinage.</li><li>Savoir quand arrêter le raffinage.</li></ul>",
     "prerequis": "Chapitre 1.",
     "essentiel": "<ul><li>Processeur (qui exécute), action élémentaire (qu'il sait exécuter), données (ce qu'il manipule).</li><li>Méthode : R0 et processeur, données, puis décomposition par niveaux R1, R2… tant qu'une action est trop complexe.</li><li>Version écrite « R$k$ : Raffinage de {…} | … » ou version arbre ; l'ordre des actions est l'ordre d'exécution.</li><li>Structures de contrôle : Si/Sinon, Selon, Tant que, Faire…Tant que, Répéter…jusqu'à, Pour.</li><li>Le raffinage n'est pas unique ; on arrête quand les actions sont claires ; les actions communes deviennent des sous-programmes.</li></ul>",
     "debut": 7,
     "fin": 13,
     "partie": null,
     "sections": [
      {
       "titre": "Vocabulaire",
       "page": 7
      },
      {
       "titre": "Principe et notation",
       "page": 7
      },
      {
       "titre": "Structures de contrôle",
       "page": 9
      },
      {
       "titre": "Exemples du cours",
       "page": 10
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Raffiner un cahier des charges",
       "page": 8
      },
      {
       "num": "2.2",
       "titre": "Choisir et vérifier une boucle",
       "page": 9
      }
     ],
     "pdf": "docs/raffinage-algorithme/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Du raffinage à l'algorithme",
     "intro": "L'algorithme est destiné à un programmeur qui le traduira directement dans un langage. Il se construit à partir du raffinage : on traduit le dernier niveau de chaque branche en une séquence d'instructions.",
     "objectifs": "<ul><li>Traduire un raffinage en pseudo-code et en organigramme.</li><li>Gérer les branches de profondeurs différentes.</li><li>Transformer les données en variables typées.</li></ul>",
     "prerequis": "Chapitre 2.",
     "essentiel": "<ul><li>Algorithme de niveau $N$ = feuilles du raffinage, dans l'ordre chronologique ; R0 et les nœuds intermédiaires n'y figurent pas.</li><li>Branches de profondeurs différentes : garder les actions non raffinées.</li><li>Données $\\to$ variables (ou constantes) typées : entier, réel, caractère…</li><li>Pseudo-code (Début/Fin Algorithme) ou organigramme (bulles, rectangles, losanges) : équivalents.</li></ul>",
     "debut": 14,
     "fin": 17,
     "partie": null,
     "sections": [
      {
       "titre": "Principes",
       "page": 14
      },
      {
       "titre": "Variables, types et affectation",
       "page": 15
      },
      {
       "titre": "Traductions types",
       "page": 16
      },
      {
       "titre": "Exemple : le diabolo",
       "page": 16
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Traduire un raffinage en algorithme",
       "page": 14
      }
     ],
     "pdf": "docs/raffinage-algorithme/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Sous-programmes",
     "intro": "Écrire l'algorithme complet peut devenir fastidieux, et le raffinage fait apparaître des actions qui reviennent. On regroupe alors des instructions dans des <em>sous-programmes</em>, qu'on spécifie avec soin avant d'écrire leur algorithme.",
     "objectifs": "<ul><li>Identifier les sous-programmes à partir du raffinage.</li><li>Choisir entre fonction et procédure ; choisir les modes d'accès IN, OUT, IN/OUT.</li><li>Écrire la définition complète : spécification, contrat, tests, algorithme.</li><li>Appeler un sous-programme depuis un programme principal.</li></ul>",
     "prerequis": "Chapitres 2 et 3.",
     "essentiel": "<ul><li>Sous-programme = regroupement d'instructions, repéré dans le raffinage ; permet un programme principal de niveau 1.</li><li>Procédure : ne renvoie rien. Fonction : renvoie une seule valeur (<strong>retourner</strong>).</li><li>Modes : IN (lecture), OUT (écriture), IN/OUT (lecture et écriture). Une valeur à rendre et entrées IN : fonction ; sinon procédure avec paramètres IN/OUT.</li><li>Définition complète : nom et type, sémantique, paramètres (mode ; type ; rôle), pré- et post-conditions, tests, algorithme.</li></ul>",
     "debut": 18,
     "fin": 22,
     "partie": null,
     "sections": [
      {
       "titre": "Notion de sous-programme",
       "page": 18
      },
      {
       "titre": "Fonctions et procédures",
       "page": 19
      },
      {
       "titre": "Définition complète d'un sous-programme",
       "page": 19
      },
      {
       "titre": "Trois exemples",
       "page": 20
      }
     ],
     "methodes": [],
     "pdf": "docs/raffinage-algorithme/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Étude de cas : du cahier des charges au programme",
     "intro": "Les chapitres précédents ont présenté chaque étape séparément. On les enchaîne ici sur un problème complet, choisi parce qu'il fait intervenir toutes les notions du cours : saisies et affichages, test, boucle avec double condition d'arrêt, compteur, sous-programmes de types différents. L'objectif n'est pas de retenir <em>cette</em> solution, mais de voir comment chaque décision découle de la précédente.",
     "objectifs": "<ul><li>Voir la démarche complète appliquée d'un bout à l'autre.</li><li>Comprendre comment le raffinage dicte la structure de l'algorithme et le découpage en sous-programmes.</li><li>Justifier le choix fonction/procédure et les modes d'accès.</li></ul>",
     "prerequis": "Chapitres 2 à 4.",
     "essentiel": "<ul><li>Programme interactif : raffiner jusqu'à « Ecrire », « Lire » et les calculs.</li><li>Saisie (une valeur) : fonction ; saisie de plusieurs valeurs : procédure à paramètres IN/OUT (ou fonction appelée plusieurs fois).</li><li>Saisie contrôlée : <strong>Faire</strong> … <strong>Tant que</strong> valeur hors bornes, avec message d'erreur.</li><li>Programme principal : appels dans l'ordre, boucle <strong>Faire</strong> … <strong>Tant que</strong> (non gagné) et (coups restants).</li><li>Vérifier que chaque appel transmet tous les arguments attendus, avec les bons types.</li></ul>",
     "debut": 23,
     "fin": 26,
     "partie": null,
     "sections": [
      {
       "titre": "Le problème : faire deviner un nombre",
       "page": 23
      }
     ],
     "methodes": [
      {
       "num": "5.1",
       "titre": "Démarche complète de conception",
       "page": 23
      }
     ],
     "pdf": "docs/raffinage-algorithme/chapitre-05.pdf"
    }
   ]
  },
  {
   "id": "electromagnetisme",
   "matiere": "physique",
   "titre": "Électromagnétisme",
   "description": "Outils vectoriels, électrostatique, magnétostatique, induction, inductances, équations de Maxwell, ondes et milieux matériels.",
   "pages": 64,
   "pdf": "docs/electromagnetisme.pdf",
   "fiche": "docs/electromagnetisme/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "La boîte à outils",
     "intro": "L'électromagnétisme décrit des grandeurs qui prennent une valeur en chaque point de l'espace : des champs. Pour les manipuler, il faut quatre familles d'outils : les opérateurs différentiels (gradient, divergence, rotationnel, laplacien), les intégrales de circulation et de flux, les théorèmes qui relient les deux (Stokes, Ostrogradski), et les arguments de symétrie qui permettent de prévoir la forme d'un champ avant tout calcul.",
     "objectifs": "<ul><li>Distinguer champ scalaire et champ vectoriel ; écrire gradient, divergence, rotationnel et laplacien dans les trois systèmes de coordonnées.</li><li>Interpréter géométriquement chaque opérateur.</li><li>Calculer une circulation et un flux ; appliquer Stokes et Ostrogradski.</li><li>Exploiter symétries et invariances ; distinguer vecteurs polaires et axiaux ; appliquer le principe de Curie.</li></ul>",
     "prerequis": "Dérivées partielles, intégrales multiples, produits scalaire et vectoriel.",
     "essentiel": "<ul><li>$\\grad$ : scalaire $\\to$ vecteur, orthogonal aux isovaleurs ; $\\Div$ : flux sortant par unité de volume ; $\\rot$ : circulation par unité de surface ; $\\Delta=\\Div\\grad$.</li><li>$\\rot\\grad=\\V 0$, $\\Div\\rot=0$ ; $\\rot\\rot\\V A=\\grad\\Div\\V A-\\vec\\Delta\\V A$.</li><li>Stokes : $\\oint_L\\V A\\cdot\\diff\\V l=\\iint_S\\rot\\V A\\cdot\\diff\\V S$ ; Ostrogradski : $\\oiint_S\\V A\\cdot\\diff\\V S=\\iiint_\\tau\\Div\\V A\\,\\diff\\tau$.</li><li>$\\V E$ (polaire) dans les plans de symétrie des charges ; $\\V B$ (axial) orthogonal aux plans de symétrie des courants, contenu dans leurs plans d'antisymétrie ; invariances $\\Rightarrow$ variables.</li></ul>",
     "debut": 5,
     "fin": 14,
     "partie": null,
     "sections": [
      {
       "titre": "Champs scalaires et champs vectoriels",
       "page": 5
      },
      {
       "titre": "Les opérateurs différentiels",
       "page": 6
      },
      {
       "titre": "Circulation et flux",
       "page": 10
      },
      {
       "titre": "Symétries, invariances et principe de Curie",
       "page": 12
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Réduire un problème par symétries et invariances",
       "page": 13
      }
     ],
     "pdf": "docs/electromagnetisme/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Distributions de charges et de courants",
     "intro": "Les champs électromagnétiques ont deux sources : les charges, immobiles ou en mouvement, et les courants qui résultent de leur mouvement. On les décrit par des densités continues, définies à l'échelle mésoscopique (petite devant les dimensions du problème, grande devant la distance entre porteurs), puis on établit la loi qui les relie : la conservation de la charge.",
     "objectifs": "<ul><li>Définir les densités de charge volumique, surfacique, linéique.</li><li>Définir les densités de courant volumique et surfacique ; en déduire l'intensité.</li><li>Établir l'équation locale de conservation de la charge.</li></ul>",
     "prerequis": "Chapitre 1 (flux, Ostrogradski).",
     "essentiel": "<ul><li>$\\diff q=\\rho\\,\\diff\\tau=\\sigma\\,\\diff S=\\lambda\\,\\diff l$ ; $\\V j=\\rho_m\\V v_m$ ($\\mathrm{A\\cdot m^{-2}}$), $\\V j_s=\\sigma_m\\V v_m$ ($\\mathrm{A\\cdot m^{-1}}$).</li><li>$I=\\iint_S\\V j\\cdot\\diff\\V S$.</li><li>Conservation de la charge : $\\pd\\rho t+\\Div\\V j=0$ ; en stationnaire, $\\Div\\V j=0$ (loi des nœuds).</li></ul>",
     "debut": 15,
     "fin": 17,
     "partie": null,
     "sections": [
      {
       "titre": "Distributions de charges",
       "page": 15
      },
      {
       "titre": "Distributions de courant",
       "page": 15
      },
      {
       "titre": "Conservation de la charge",
       "page": 16
      }
     ],
     "methodes": [],
     "pdf": "docs/electromagnetisme/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Les équations de Maxwell",
     "intro": "Quatre équations locales décrivent l'ensemble des phénomènes électriques, magnétiques et de propagation. Ce chapitre les présente, en donne le sens physique et la forme intégrale, et indique comment on les simplifie selon le régime étudié ; les chapitres suivants les exploitent un régime après l'autre.",
     "objectifs": "<ul><li>Écrire les quatre équations de Maxwell dans le vide et leurs formes intégrales.</li><li>Connaître les constantes $\\varepsilon_0$, $\\mu_0$, $c$.</li><li>Identifier les hypothèses qui structurent les chapitres suivants.</li></ul>",
     "prerequis": "Chapitres 1 et 2.",
     "essentiel": "<ul><li>$\\Div\\V E=\\rho/\\varepsilon_0$ ; $\\Div\\V B=0$ ; $\\rot\\V E=-\\partial_t\\V B$ ; $\\rot\\V B=\\mu_0\\V j+\\mu_0\\varepsilon_0\\partial_t\\V E$.</li><li>Formes intégrales : Gauss, flux conservatif, Faraday, Ampère généralisé.</li><li>$\\varepsilon_0\\approx8{,}85\\cdot10^{-12}~\\mathrm{F/m}$, $\\mu_0=4\\pi\\cdot10^{-7}~\\mathrm{H/m}$, $\\mu_0\\varepsilon_0c^2=1$.</li></ul>",
     "debut": 18,
     "fin": 20,
     "partie": null,
     "sections": [
      {
       "titre": "Les quatre équations",
       "page": 18
      },
      {
       "titre": "Hypothèses et régimes",
       "page": 19
      }
     ],
     "methodes": [],
     "pdf": "docs/electromagnetisme/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Électrostatique",
     "intro": "On considère des charges immobiles, constantes dans le temps. Les équations de Maxwell se réduisent alors à $\\Div\\V E=\\rho/\\varepsilon_0$ et $\\rot\\V E=\\V 0$ : le champ électrique a pour sources les charges et dérive d'un potentiel. Ce chapitre part de la loi de Coulomb, en déduit le champ, le théorème de Gauss, le potentiel et l'énergie, puis étudie le condensateur et deux effets utiles en compatibilité électromagnétique.",
     "objectifs": "<ul><li>Comparer interactions électrostatique et gravitationnelle.</li><li>Calculer un champ par superposition ou par le théorème de Gauss.</li><li>Relier champ et potentiel ; écrire les équations de Poisson et de Laplace.</li><li>Exprimer l'énergie potentielle ; définir capacité et coefficients d'influence ; calculer l'énergie d'un condensateur.</li><li>Expliquer l'effet de pointe et le blindage électrostatique.</li></ul>",
     "prerequis": "Chapitres 1 à 3.",
     "essentiel": "<ul><li>$\\V E=\\dfrac{q}{4\\pi\\varepsilon_0}\\dfrac{\\vv{PM}}{PM^3}$ ; superposition ; force $\\V F=q\\V E$.</li><li>Gauss : $\\oiint\\V E\\cdot\\diff\\V S=Q_\\text{int}/\\varepsilon_0$ ; sphère : $E=Q/(4\\pi\\varepsilon_0r^2)$ dehors ; plan : $\\sigma/(2\\varepsilon_0)$.</li><li>$\\V E=-\\grad V$, $V=\\frac1{4\\pi\\varepsilon_0}\\iiint\\rho/PM$ ; $\\Delta V=-\\rho/\\varepsilon_0$ ; $E_p=qV$.</li><li>$Q=CU$, $W_e=\\frac12CU^2$ ; plan : $C=\\varepsilon_0S/e$ ; effet de pointe $E\\propto1/R$ ; écran : $C_{23}=0$.</li></ul>",
     "debut": 21,
     "fin": 28,
     "partie": null,
     "sections": [
      {
       "titre": "Force de Coulomb et force de gravitation",
       "page": 21
      },
      {
       "titre": "Le champ électrique",
       "page": 22
      },
      {
       "titre": "Flux du champ électrique : théorème de Gauss",
       "page": 22
      },
      {
       "titre": "Champ et potentiel électrostatiques",
       "page": 24
      },
      {
       "titre": "Énergie et équipotentielles",
       "page": 25
      },
      {
       "titre": "Condensateurs",
       "page": 25
      },
      {
       "titre": "Deux notions de compatibilité électromagnétique",
       "page": 26
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Calculer un champ par le théorème de Gauss",
       "page": 23
      }
     ],
     "pdf": "docs/electromagnetisme/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Magnétostatique : champ, flux et potentiel vecteur",
     "intro": "La magnétostatique étudie le champ créé par des courants permanents, et plus largement les phénomènes lentement variables où la propagation est négligeable. On part de l'interaction entre deux circuits pour définir le champ magnétique (loi de Biot et Savart), on en déduit sa topographie par les symétries, puis on établit ses deux propriétés générales : son flux est conservatif, et il dérive d'un potentiel vecteur.",
     "objectifs": "<ul><li>Écrire les forces de Laplace et de Lorentz magnétique ; la loi de Biot et Savart.</li><li>Montrer que $\\V B$ est axial et en déduire sa direction par les symétries.</li><li>Calculer un champ par Biot et Savart et par superposition.</li><li>Utiliser la conservation du flux ; définir et calculer le potentiel vecteur.</li></ul>",
     "prerequis": "Chapitres 1 à 3.",
     "essentiel": "<ul><li>Laplace : $\\diff\\V F=I\\diff\\V l\\wedge\\V B$ ; Lorentz : $q\\V v\\wedge\\V B$.</li><li>Biot et Savart : $\\V B=\\dfrac{\\mu_0I}{4\\pi}\\oint\\dfrac{\\diff\\V l\\wedge\\vv{PM}}{PM^3}$ ; segment : $\\dfrac{\\mu_0I}{4\\pi r}(\\sin\\beta_2-\\sin\\beta_1)$ ; fil infini : $\\dfrac{\\mu_0I}{2\\pi r}$.</li><li>$\\V B$ axial : orthogonal aux plans de symétrie des courants, contenu dans leurs plans d'antisymétrie.</li><li>$\\Div\\V B=0$, flux conservatif ($B_1S_1=B_2S_2$) ; $\\V B=\\rot\\V A$, $\\V A=\\dfrac{\\mu_0}{4\\pi}\\iiint\\dfrac{\\V j}{PM}\\diff\\tau$.</li></ul>",
     "debut": 29,
     "fin": 36,
     "partie": null,
     "sections": [
      {
       "titre": "Force et champ magnétiques",
       "page": 29
      },
      {
       "titre": "Topographie du champ magnétique",
       "page": 31
      },
      {
       "titre": "Calcul direct par la loi de Biot et Savart",
       "page": 32
      },
      {
       "titre": "Principe de superposition",
       "page": 33
      },
      {
       "titre": "Conservation du flux magnétique",
       "page": 34
      },
      {
       "titre": "Le potentiel vecteur",
       "page": 35
      }
     ],
     "methodes": [],
     "pdf": "docs/electromagnetisme/chapitre-05.pdf"
    },
    {
     "n": 6,
     "titre": "Magnétostatique : théorème d'Ampère et dipôle magnétique",
     "intro": "La loi de Biot et Savart permet tous les calculs, mais elle est lourde. Lorsque les courants présentent de fortes symétries, le théorème d'Ampère donne le champ en quelques lignes : c'est la forme intégrale de l'équation de Maxwell–Ampère. On complète l'étude du potentiel vecteur (jauge, équation de Poisson), puis on décrit le champ d'une boucle de courant vue de loin : le dipôle magnétique.",
     "objectifs": "<ul><li>Comprendre la liberté de jauge et la jauge de Coulomb ; écrire l'équation de Poisson pour $\\V A$.</li><li>Énoncer le théorème d'Ampère et l'appliquer (nappe, plaque, fil épais, solénoïde).</li><li>Définir le moment magnétique et le champ d'un dipôle magnétique.</li></ul>",
     "prerequis": "Chapitre 5.",
     "essentiel": "<ul><li>$\\V A$ défini à $\\grad\\chi$ près ; jauge de Coulomb $\\Div\\V A=0$ ; $\\vec\\Delta\\V A=-\\mu_0\\V j$.</li><li>Ampère : $\\rot\\V B=\\mu_0\\V j$, $\\oint\\V B\\cdot\\diff\\V l=\\mu_0I_\\text{enlacé}$ ; nappe $\\mu_0j_s/2$ ; fil $\\mu_0I/(2\\pi r)$ dehors, $\\mu_0Ir/(2\\pi a^2)$ dedans ; solénoïde $\\mu_0NI$.</li><li>Dipôle : $\\V{\\mathcal M}=IS\\V n$ ; $\\V B=\\dfrac{\\mu_0\\mathcal M}{4\\pi r^3}(2\\cos\\theta\\V u_r+\\sin\\theta\\V u_\\theta)$, décroissance en $1/r^3$.</li></ul>",
     "debut": 37,
     "fin": 42,
     "partie": null,
     "sections": [
      {
       "titre": "Jauge de Coulomb et équation de Poisson",
       "page": 37
      },
      {
       "titre": "Le théorème d'Ampère",
       "page": 38
      },
      {
       "titre": "Le dipôle magnétique",
       "page": 40
      }
     ],
     "methodes": [
      {
       "num": "6.1",
       "titre": "Appliquer le théorème d'Ampère",
       "page": 39
      }
     ],
     "pdf": "docs/electromagnetisme/chapitre-06.pdf"
    },
    {
     "n": 7,
     "titre": "L'induction électromagnétique",
     "intro": "Un champ magnétique qui varie, ou un circuit qui se déplace ou se déforme dans un champ magnétique, fait apparaître une force électromotrice : c'est l'induction, découverte par Faraday (1831). Elle est décrite par l'équation de Maxwell–Faraday, qui couple les champs électrique et magnétique, et elle est au cœur des transformateurs, alternateurs et moteurs.",
     "objectifs": "<ul><li>Écrire Maxwell–Faraday sous forme locale et intégrale ; définir la force électromotrice induite.</li><li>Distinguer induction de Neumann (champ variable) et de Lorentz (circuit mobile).</li><li>Appliquer la loi de Faraday et la loi de Lenz ; coupler équations électrique et mécanique.</li></ul>",
     "prerequis": "Chapitres 3, 5 et 6.",
     "essentiel": "<ul><li>$\\rot\\V E=-\\partial_t\\V B$ ; $e=-\\diff\\Phi/\\diff t$, $\\Phi=\\iint\\V B\\cdot\\diff\\V S$ (orientation par la main droite).</li><li>Neumann : $e=-S\\,\\diff B/\\diff t$ (champ variable) ; Lorentz : $e=-B\\,\\diff S/\\diff t$, champ électromoteur $\\V v\\wedge\\V B$.</li><li>Lenz : les effets induits s'opposent à leur cause ; coupler équation électrique et équation mécanique.</li></ul>",
     "debut": 43,
     "fin": 46,
     "partie": null,
     "sections": [
      {
       "titre": "L'équation de Maxwell–Faraday",
       "page": 43
      },
      {
       "titre": "Utiliser la loi de Faraday",
       "page": 44
      },
      {
       "titre": "Exemples",
       "page": 45
      }
     ],
     "methodes": [
      {
       "num": "7.1",
       "titre": "Calculer une force électromotrice induite",
       "page": 45
      }
     ],
     "pdf": "docs/electromagnetisme/chapitre-07.pdf"
    },
    {
     "n": 8,
     "titre": "Inductances et énergie magnétique",
     "intro": "Le flux magnétique qu'un circuit envoie à travers lui-même ou à travers un autre circuit est proportionnel au courant qui le crée : le coefficient de proportionnalité est une inductance. Elle relie l'électromagnétisme aux circuits (relation $u=L\\,\\diff i/\\diff t$) et mesure la capacité d'un circuit à stocker de l'énergie magnétique.",
     "objectifs": "<ul><li>Définir inductance mutuelle et inductance propre ; montrer $M_{12}=M_{21}$ et $|M|\\le\\sqrt{L_1L_2}$.</li><li>Établir $u=L\\,\\diff i/\\diff t$ et $W_m=\\frac12LI^2$ ; énergie et coénergie magnétiques.</li><li>Calculer une inductance par le flux ou par l'énergie.</li></ul>",
     "prerequis": "Chapitres 5 à 7.",
     "essentiel": "<ul><li>$\\Phi_{1\\to2}=MI_1$, $M=\\frac{\\mu_0}{4\\pi}\\oint\\oint\\frac{\\diff\\V l_1\\cdot\\diff\\V l_2}{r}$ symétrique ; $\\Phi=LI$ ; $|M|\\le\\sqrt{L_1L_2}$.</li><li>$u=L\\,\\diff i/\\diff t$ (récepteur) ; $W=\\frac12LI^2$, densité $B^2/(2\\mu_0)$ ; $F_x=\\partial W'/\\partial x|_i$.</li><li>Solénoïde : $L=\\mu_0n^2S/D$ ; coaxiaux : $M=\\mu_0n_1n_2S_2/D$.</li></ul>",
     "debut": 47,
     "fin": 51,
     "partie": null,
     "sections": [
      {
       "titre": "Inductance mutuelle",
       "page": 47
      },
      {
       "titre": "Inductance propre",
       "page": 48
      },
      {
       "titre": "Énergie magnétique",
       "page": 49
      },
      {
       "titre": "Calculer une inductance",
       "page": 50
      }
     ],
     "methodes": [
      {
       "num": "8.1",
       "titre": "Calculer une inductance",
       "page": 50
      }
     ],
     "pdf": "docs/electromagnetisme/chapitre-08.pdf"
    },
    {
     "n": 9,
     "titre": "Régime variable et propagation",
     "intro": "En régime variable, les champs électrique et magnétique ne se découplent plus : un champ magnétique variable crée un champ électrique (Faraday), et, grâce au terme ajouté par Maxwell, un champ électrique variable crée un champ magnétique. Ce double couplage autorise des champs qui s'entretiennent mutuellement loin de toute source : les ondes électromagnétiques. Ce chapitre établit le courant de déplacement, les potentiels en régime variable, l'équation de d'Alembert, décrit les ondes planes et la propagation guidée, et fait le bilan d'énergie (vecteur de Poynting).",
     "objectifs": "<ul><li>Justifier le courant de déplacement ; comparer courants de conduction et de déplacement.</li><li>Écrire les champs à partir des potentiels ; utiliser la jauge de Lorenz ; interpréter les potentiels retardés.</li><li>Établir l'équation de d'Alembert et sa solution générale à une dimension.</li><li>Décrire une onde plane progressive monochromatique : $k$, $\\lambda$, structure $(\\V E,\\V B,\\V k)$.</li><li>Modéliser un câble par ses paramètres linéiques ; établir le théorème de Poynting.</li></ul>",
     "prerequis": "Chapitres 3 à 8.",
     "essentiel": "<ul><li>$\\rot\\V B=\\mu_0\\V j+\\frac1{c^2}\\partial_t\\V E$, $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ ; courant de déplacement $\\varepsilon_0\\partial_t\\V E$.</li><li>$\\V B=\\rot\\V A$, $\\V E=-\\grad V-\\partial_t\\V A$ ; jauge de Lorenz ; potentiels retardés ($t-PM/c$).</li><li>$\\Delta F-\\frac1{c^2}\\partial_t^2F=0$ ; $F=f(x-ct)+g(x+ct)$ ; $k_0=\\omega/c$, $\\lambda=c/f$.</li><li>Onde plane : $\\V B=\\V n\\wedge\\V E/c$, trièdre direct ; ligne : $V=V_+e^{-\\gamma x}+V_-e^{\\gamma x}$, $\\gamma=\\sqrt{Z_sY_p}$.</li><li>Poynting : $\\partial_tu+\\Div\\V\\Pi=-\\V j\\cdot\\V E$, $\\V\\Pi=\\V E\\wedge\\V B/\\mu_0$, $u=\\frac{\\varepsilon_0E^2}2+\\frac{B^2}{2\\mu_0}$.</li></ul>",
     "debut": 52,
     "fin": 59,
     "partie": null,
     "sections": [
      {
       "titre": "Le courant de déplacement",
       "page": 52
      },
      {
       "titre": "Potentiels en régime variable",
       "page": 53
      },
      {
       "titre": "Équations de propagation des champs",
       "page": 54
      },
      {
       "titre": "Ondes monochromatiques et ondes planes",
       "page": 55
      },
      {
       "titre": "Propagation guidée : l'exemple du câble coaxial",
       "page": 57
      },
      {
       "titre": "Énergie électromagnétique : vecteur de Poynting",
       "page": 58
      }
     ],
     "methodes": [],
     "pdf": "docs/electromagnetisme/chapitre-09.pdf"
    },
    {
     "n": 10,
     "titre": "Milieux matériels et conditions de passage",
     "intro": "Jusqu'ici, les champs se propageaient dans le vide (ou l'air), les conducteurs et isolants n'intervenant que par les charges et courants qu'ils portent. Un milieu matériel réagit aux champs : il se polarise, il s'aimante, et modifie en retour les champs qui le traversent. On décrit cette réaction par deux champs auxiliaires, $\\V D$ et $\\V H$, puis on établit les relations que vérifient les champs à la frontière entre deux milieux, indispensables pour résoudre un problème complet. L'étude microscopique de la polarisation et de l'aimantation fait l'objet du livre <em>Physique des matériaux</em>.",
     "objectifs": "<ul><li>Définir polarisation, induction électrique $\\V D$, permittivité ; aimantation, excitation $\\V H$, perméabilité.</li><li>Classer les matériaux magnétiques.</li><li>Écrire les équations de Maxwell dans un milieu linéaire, homogène et isotrope.</li><li>Établir les conditions de passage à une interface ; poser des conditions aux limites.</li></ul>",
     "prerequis": "Chapitres 3 à 9.",
     "essentiel": "<ul><li>$\\V D=\\varepsilon_0\\V E+\\V P$, $\\Div\\V D=\\rho$ ; LHI : $\\V D=\\varepsilon_0\\varepsilon_r\\V E$.</li><li>$\\V B=\\mu_0(\\V H+\\V M)$, $\\rot\\V H=\\V j+\\partial_t\\V D$ ; LHI : $\\V B=\\mu_0\\mu_r\\V H$ ; dia-, para-, ferromagnétiques.</li><li>Passage : $D_{n2}-D_{n1}=\\sigma$, $\\V E_t$ continu, $B_n$ continu, $\\V H_{t2}-\\V H_{t1}=\\V j_s\\wedge\\V n_{1\\to2}$.</li><li>Dirichlet (valeur) ou Neumann (dérivée normale) ; unicité de la solution de Poisson.</li></ul>",
     "debut": 60,
     "fin": 64,
     "partie": null,
     "sections": [
      {
       "titre": "Milieux diélectriques",
       "page": 60
      },
      {
       "titre": "Milieux magnétiques",
       "page": 61
      },
      {
       "titre": "Équations de Maxwell dans la matière",
       "page": 62
      },
      {
       "titre": "Conditions de passage",
       "page": 62
      },
      {
       "titre": "Conditions aux limites d'un problème",
       "page": 63
      }
     ],
     "methodes": [],
     "pdf": "docs/electromagnetisme/chapitre-10.pdf"
    }
   ]
  },
  {
   "id": "propagation-lignes",
   "matiere": "physique",
   "titre": "Propagation dans les lignes",
   "description": "Modèle RLCG, propagation, ligne chargée et adaptation, paramètres S, réflectométrie, couplage et diaphonie.",
   "pages": 25,
   "pdf": "docs/propagation-lignes.pdf",
   "fiche": "docs/propagation-lignes/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Qu'est-ce qu'une ligne ?",
     "intro": "Une <em>ligne de transmission</em> désigne tout support permettant de transmettre un signal d'un point à un autre : piste de circuit imprimé, câble coaxial, paire torsadée, fibre optique, guide d'ondes. Dès que la ligne est longue devant la longueur d'onde, la tension et le courant ne sont plus les mêmes en tout point : le signal se propage. Ce chapitre construit le modèle de la ligne, en déduit la propagation et ses grandeurs (constante de propagation, impédance caractéristique, vitesses), puis l'applique à la lecture d'une fiche technique.",
     "objectifs": "<ul><li>Connaître les paramètres intrinsèques d'une ligne : modèle $RLCG$.</li><li>Établir les équations des télégraphistes et leur solution ; définir $\\gamma=\\alpha+j\\beta$ et $Z_c$.</li><li>Distinguer vitesse de phase et vitesse de groupe, ligne dispersive et non dispersive.</li><li>Comprendre la tenue en puissance et les spécifications d'une fiche technique.</li></ul>",
     "prerequis": "Électromagnétisme (champs dans un câble coaxial, équation de d'Alembert), notation complexe.",
     "essentiel": "<ul><li>Modèle $RLCG$ : $Z_s=R+jL\\omega$, $Y_p=G+jC\\omega$ ; $G=\\omega C\\tan\\delta$ ; $R\\propto\\sqrt f$ (effet de peau).</li><li>$V''=Z_sY_pV$ ; $V=V_+e^{-\\gamma x}+V_-e^{\\gamma x}$, $I=Y_c(V_+e^{-\\gamma x}-V_-e^{\\gamma x})$ ; $\\gamma=\\sqrt{Z_sY_p}=\\alpha+j\\beta$, $Z_c=\\sqrt{Z_s/Y_p}$.</li><li>Sans pertes : $\\beta=\\omega\\sqrt{LC}$, $Z_c=\\sqrt{L/C}$ ; faibles pertes : $\\alpha=R/2Z_0+GZ_0/2$ ; $1~\\mathrm{Np}=8{,}686~\\mathrm{dB}$.</li><li>$v_\\varphi=\\omega/\\beta$, $v_g=\\diff\\omega/\\diff\\beta$ ; non dispersive si $\\beta\\propto\\omega$ (Heaviside $R/L=G/C$) ; guide : coupure $f_c$.</li><li>$P=|V_+|^2/(2Z_c)$ ; limites : claquage (crête) et échauffement (moyenne).</li></ul>",
     "debut": 4,
     "fin": 10,
     "partie": null,
     "sections": [
      {
       "titre": "Quand faut-il parler de propagation ?",
       "page": 4
      },
      {
       "titre": "Paramètres intrinsèques : le modèle RLCG",
       "page": 5
      },
      {
       "titre": "La propagation",
       "page": 6
      },
      {
       "titre": "Vitesses de propagation",
       "page": 8
      },
      {
       "titre": "Tenue en puissance",
       "page": 9
      },
      {
       "titre": "Application : lire une fiche technique",
       "page": 9
      }
     ],
     "methodes": [],
     "pdf": "docs/propagation-lignes/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Que se passe-t-il quand on connecte la ligne ?",
     "intro": "Une ligne relie toujours une source à une charge, éventuellement à travers d'autres lignes. Pour les associer, on la représente par un quadripôle. Fermée sur une charge, elle transforme l'impédance de cette charge, et l'onde incidente s'y réfléchit en partie : tension et courant forment des ondes stationnaires. L'adaptation supprime cette réflexion. On termine par le comportement temporel : les échos.",
     "objectifs": "<ul><li>Écrire les matrices impédance, admittance et chaîne d'un tronçon de ligne.</li><li>Établir l'impédance d'entrée d'une ligne chargée et ses cas particuliers.</li><li>Définir le coefficient de réflexion et le rapport d'ondes stationnaires ; comprendre l'adaptation.</li><li>Interpréter les échos dans le domaine temporel.</li></ul>",
     "prerequis": "Chapitre 1 ; matrices de quadripôles.",
     "essentiel": "<ul><li>$[T]=\\begin{pmatrix}\\cosh\\gamma d&amp;Z_c\\sinh\\gamma d\\\\Y_c\\sinh\\gamma d&amp;\\cosh\\gamma d\\end{pmatrix}$ ; cascade : produit des $[T]$.</li><li>$Z_E=Z_c\\frac{Z_U+Z_c\\tanh\\gamma d}{Z_c+Z_U\\tanh\\gamma d}$ ; sans pertes : court-circuit $jZ_c\\tan\\beta d$, $\\lambda/2$ : $Z_U$, $\\lambda/4$ : $Z_c^2/Z_U$.</li><li>$\\Gamma=\\frac{Z-Z_c}{Z+Z_c}$, $\\Gamma(x)=\\Gamma_Ue^{-2\\gamma(\\ell-x)}$ ; $\\mathrm{ROS}=\\frac{1+|\\Gamma|}{1-|\\Gamma|}$ ; $P=\\frac{|V_+|^2}{2Z_c}(1-|\\Gamma|^2)$.</li><li>Adaptation $Z_U=Z_c$ : pas de réflexion. Temporel : échos à $2\\ell/v$, coefficients $\\Gamma_U$ et $\\Gamma_g$.</li></ul>",
     "debut": 11,
     "fin": 16,
     "partie": null,
     "sections": [
      {
       "titre": "La ligne comme quadripôle",
       "page": 11
      },
      {
       "titre": "Impédance d'entrée d'une ligne chargée",
       "page": 12
      },
      {
       "titre": "Réflexion et ondes stationnaires",
       "page": 13
      },
      {
       "titre": "Et dans le domaine temporel ?",
       "page": 15
      }
     ],
     "methodes": [],
     "pdf": "docs/propagation-lignes/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Qualifier la ligne : paramètres $S$ et réflectométrie",
     "intro": "Aux fréquences élevées, on ne sait pas mesurer directement des tensions et des courants (les sondes perturbent le circuit, les courts-circuits et circuits ouverts idéaux n'existent pas) ; on mesure des ondes et des puissances. Les paramètres $S$ décrivent un quadripôle par ses coefficients de réflexion et de transmission ; l'analyseur de réseau les mesure. Dans le domaine temporel, la réflectométrie exploite les échos pour diagnostiquer les défauts d'un câble.",
     "objectifs": "<ul><li>Définir les ondes de puissance $a_i$, $b_i$ et la matrice de répartition $[S]$.</li><li>Interpréter $S_{11}$, $S_{21}$ ; écrire $[S]$ d'un tronçon de ligne ; relier $[S]$ et $[Z]$.</li><li>Connaître le principe de l'analyseur de réseau.</li><li>Localiser un défaut par réflectométrie ; tracer un diagramme des échos.</li></ul>",
     "prerequis": "Chapitres 1 et 2.",
     "essentiel": "<ul><li>$a_i=\\frac{V_i+Z_0I_i}{2\\sqrt{Z_0}}$, $b_i=\\frac{V_i-Z_0I_i}{2\\sqrt{Z_0}}$ ; $P_i=\\frac12(|a_i|^2-|b_i|^2)$ ; $b=[S]a$.</li><li>$S_{11}$, $S_{22}$ : réflexion ; $S_{21}$, $S_{12}$ : transmission ; ligne adaptée : $S_{21}=e^{-\\gamma d}$, $S_{11}=0$.</li><li>Analyseur de réseau : coupleurs + récepteurs, après étalonnage.</li><li>Réflectométrie : $d=v\\Delta t/2$ ; signe de l'écho selon $\\Gamma$ ; diagramme des échos ; convergence vers le régime permanent.</li></ul>",
     "debut": 17,
     "fin": 21,
     "partie": null,
     "sections": [
      {
       "titre": "Ondes de puissance et matrice [S]",
       "page": 17
      },
      {
       "titre": "L'analyseur de réseau",
       "page": 19
      },
      {
       "titre": "Diagnostic des défauts : la réflectométrie",
       "page": 19
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Mesurer un dispositif à l'analyseur de réseau",
       "page": 19
      }
     ],
     "pdf": "docs/propagation-lignes/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Perturber la propagation : couplage et diaphonie",
     "intro": "Deux lignes voisines (deux pistes d'un circuit imprimé, deux paires d'un même câble) ne sont pas indépendantes : le champ magnétique du courant de l'une traverse l'autre, et le champ électrique de l'une aboutit en partie sur l'autre. Une partie du signal passe ainsi d'une ligne à sa voisine : c'est la diaphonie. On établit les équations des lignes couplées, on les résout par les modes pair et impair, puis on décrit la diaphonie proche et lointaine et les moyens de la réduire.",
     "objectifs": "<ul><li>Écrire les équations matricielles de deux lignes couplées par une inductance et une capacité mutuelles.</li><li>Résoudre le cas de deux lignes identiques par les modes pair et impair.</li><li>Distinguer paradiaphonie (NEXT) et télédiaphonie (FEXT) ; connaître les remèdes.</li></ul>",
     "prerequis": "Chapitres 1 et 2 ; inductance mutuelle et coefficients d'influence (<em>Électromagnétisme</em>).",
     "essentiel": "<ul><li>Lignes couplées : $V'=-j\\omega[L]I$, $I'=-j\\omega[C]V$ avec $L_m$ hors diagonale et $[C]=\\begin{pmatrix}C_1+C_m&amp;-C_m\\\\-C_m&amp;C_1+C_m\\end{pmatrix}$.</li><li>Modes pair ($L_1+L_m$, $C_1$) et impair ($L_1-L_m$, $C_1+2C_m$) indépendants.</li><li>NEXT $\\propto\\frac14(L_m/L_1+C_m/C_1)$ ; FEXT $\\propto\\ell(C_m/C_1-L_m/L_1)$, nulle en milieu homogène.</li><li>Remèdes : paires torsadées (inductif), éloignement et blindage (capacitif).</li></ul>",
     "debut": 22,
     "fin": 25,
     "partie": null,
     "sections": [
      {
       "titre": "Deux lignes indépendantes",
       "page": 22
      },
      {
       "titre": "Lignes couplées",
       "page": 22
      },
      {
       "titre": "Résolution par les modes pair et impair",
       "page": 23
      },
      {
       "titre": "Diaphonie proche et diaphonie lointaine",
       "page": 24
      },
      {
       "titre": "Réduire la diaphonie",
       "page": 25
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Limiter le couplage entre deux lignes",
       "page": 25
      }
     ],
     "pdf": "docs/propagation-lignes/chapitre-04.pdf"
    }
   ]
  },
  {
   "id": "physique-des-materiaux",
   "matiere": "physique",
   "titre": "Physique des matériaux",
   "description": "Équations de Maxwell dans la matière, diélectriques en régime statique et variable, sphères polarisée et aimantée, matériaux magnétiques.",
   "pages": 44,
   "pdf": "docs/physique-des-materiaux.pdf",
   "fiche": "docs/physique-des-materiaux/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Rappels : les équations de Maxwell",
     "intro": "En 1873, Maxwell propose quatre équations qui décrivent tous les phénomènes électromagnétiques. Elles intègrent les variations temporelles et le couplage entre champ électrique et champ magnétique. Ce chapitre les rappelle dans le vide, puis les étend à la matière, qui fait l'objet du reste du cours.",
     "objectifs": "<ul><li>Situer les matériaux diélectriques et magnétiques dans les applications.</li><li>Connaître les grandeurs de l'électromagnétisme, la conservation de la charge et le bilan d'énergie (Poynting).</li><li>Écrire les équations de Maxwell, locales et intégrales, dans le vide et dans la matière.</li><li>Définir un matériau parfait ; connaître l'épaisseur de peau et les potentiels.</li></ul>",
     "prerequis": "Électrostatique, magnétostatique, analyse vectorielle.",
     "essentiel": "<ul><li>$\\rho=qn$, $\\V j=\\rho\\moy{\\V v}$, $I=\\iint\\V j\\cdot\\diff\\V S$ ; $\\Div\\V j+\\partial\\rho/\\partial t=0$.</li><li>$\\V F=q(\\V E+\\V v\\wedge\\V B)$ ; $\\diff P/\\diff\\tau=\\V E\\cdot\\V j$.</li><li>Poynting : $\\V\\Pi=\\V E\\wedge\\V H$, $\\Div\\V\\Pi+\\partial u/\\partial t=-\\V E\\cdot\\V j$ ; en complexe $\\moy{\\V\\Pi}=\\tfrac12\\Re(\\V E\\wedge\\V H^*)$.</li><li>Matière : $\\V D=\\varepsilon_0\\varepsilon_r\\V E$, $\\V B=\\mu_0\\mu_r\\V H$ ; $\\rot\\V H=\\V j+\\partial\\V D/\\partial t$, $\\Div\\V D=\\rho$ (sources libres).</li><li>Parfait = linéaire, homogène, isotrope, sans pertes. $\\delta=\\sqrt{2/\\omega\\mu\\sigma}$. $\\V B=\\rot\\V A$, $\\V E=-\\partial\\V A/\\partial t-\\grad V$.</li></ul>",
     "debut": 5,
     "fin": 10,
     "partie": null,
     "sections": [
      {
       "titre": "Pourquoi étudier les matériaux ?",
       "page": 5
      },
      {
       "titre": "Grandeurs fondamentales dans le vide",
       "page": 6
      },
      {
       "titre": "Conservation de la charge",
       "page": 6
      },
      {
       "titre": "Énergie : puissance cédée et vecteur de Poynting",
       "page": 7
      },
      {
       "titre": "Équations de Maxwell dans le vide",
       "page": 8
      },
      {
       "titre": "Équations de Maxwell dans la matière",
       "page": 8
      },
      {
       "titre": "Potentiels électromagnétiques",
       "page": 9
      }
     ],
     "methodes": [],
     "pdf": "docs/physique-des-materiaux/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Milieux matériels et polarisation",
     "intro": "À l'échelle atomique, la matière est surtout du vide entre des noyaux et des électrons. On justifie ici qu'un diélectrique soumis à un champ se comporte comme un ensemble de dipôles, décrit par le vecteur polarisation $\\V P$.",
     "objectifs": "<ul><li>Distinguer champ microscopique et champ macroscopique.</li><li>Distinguer conducteur et isolant ; charges libres et charges liées.</li><li>Connaître molécules polaires et non polaires, le debye.</li><li>Connaître les polarisations électronique, ionique, d'orientation et la polarisabilité globale.</li></ul>",
     "prerequis": "Chapitre 1 ; dipôle électrostatique.",
     "essentiel": "<ul><li>Champ macroscopique = moyenne du champ microscopique sur un point matériel.</li><li>Métal : électrons de conduction libres ; diélectrique : électrons tous liés. Maxwell compte charges libres et liées.</li><li>Non polaire : dipôle induit ; polaire : dipôle permanent (1 D $=3{,}33\\cdot10^{-30}$ C·m).</li><li>$\\V P=\\diff\\V p/\\diff\\tau$ ; $\\V p=\\alpha\\V E_\\loc$, $\\alpha=\\alpha_e+\\alpha_i+\\alpha_o$, $\\alpha_o\\approx p^2/3kT$ ; dilué : $\\V P=n\\alpha\\V E$.</li></ul>",
     "debut": 11,
     "fin": 14,
     "partie": null,
     "sections": [
      {
       "titre": "Champ microscopique, champ macroscopique",
       "page": 11
      },
      {
       "titre": "Conducteurs et isolants",
       "page": 11
      },
      {
       "titre": "Molécules non polaires et polaires",
       "page": 12
      },
      {
       "titre": "Les différents types de polarisation",
       "page": 13
      }
     ],
     "methodes": [],
     "pdf": "docs/physique-des-materiaux/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Le vecteur polarisation à l'échelle macroscopique",
     "intro": "Un diélectrique polarisé crée un champ, comme le ferait une répartition de charges : ce sont les charges de polarisation. Elles conduisent au déplacement électrique $\\V D$, à la permittivité, et permettent de traiter le condensateur, les interfaces et l'énergie.",
     "objectifs": "<ul><li>Établir $\\rho_P=-\\Div\\V P$ et $\\sigma_P=\\V P\\cdot\\V n$.</li><li>Définir $\\V D=\\varepsilon_0\\V E+\\V P$, la susceptibilité $\\chi_e$ et la permittivité $\\varepsilon_r=1+\\chi_e$.</li><li>Traiter le condensateur plan avec diélectrique.</li><li>Écrire les conditions de passage et la densité d'énergie électrique.</li></ul>",
     "prerequis": "Chapitre 2.",
     "essentiel": "<ul><li>Charges de polarisation : $\\rho_P=-\\Div\\V P$, $\\sigma_P=\\V P\\cdot\\V n$ (nulle en volume si $\\V P$ uniforme).</li><li>$\\V D=\\varepsilon_0\\V E+\\V P$, $\\Div\\V D=\\rho_\\libre$ ; $\\V P=\\varepsilon_0\\chi_e\\V E$, $\\varepsilon_r=1+\\chi_e$, $\\V D=\\varepsilon\\V E$.</li><li>Condensateur : $C_0=\\varepsilon_0S/e$ ; avec diélectrique (charges fixes) $\\V E=\\V E_0/\\varepsilon_r$, $C=\\varepsilon_rC_0$.</li><li>Interface : $E_T$ continu ; $D_{N2}-D_{N1}=\\sigma_S$ ; $\\tan\\theta_1/\\tan\\theta_2=\\varepsilon_{r1}/\\varepsilon_{r2}$.</li><li>Énergie : $\\diff u=\\V E\\cdot\\diff\\V D$ ; linéaire $u=\\tfrac12\\varepsilon E^2$.</li></ul>",
     "debut": 15,
     "fin": 22,
     "partie": null,
     "sections": [
      {
       "titre": "Charges de polarisation",
       "page": 15
      },
      {
       "titre": "Le déplacement électrique",
       "page": 16
      },
      {
       "titre": "Susceptibilité et permittivité",
       "page": 17
      },
      {
       "titre": "Le condensateur plan",
       "page": 17
      },
      {
       "titre": "Conditions de passage entre deux diélectriques",
       "page": 19
      },
      {
       "titre": "La sphère diélectrique",
       "page": 20
      },
      {
       "titre": "Énergie électrique",
       "page": 22
      }
     ],
     "methodes": [],
     "pdf": "docs/physique-des-materiaux/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Du microscopique au macroscopique",
     "intro": "La polarisabilité $\\alpha$ décrit l'atome, la susceptibilité $\\chi_e$ le matériau. Pour les relier dans un milieu dense, il faut connaître le champ que subit réellement chaque dipôle : le champ local. On en déduit la formule de Clausius–Mossotti, puis les facteurs qui font varier la permittivité, jusqu'aux matériaux ferroélectriques et piézoélectriques.",
     "objectifs": "<ul><li>Calculer le champ local par la cavité de Lorentz.</li><li>Relier polarisabilité et susceptibilité (milieu dense, milieu dilué).</li><li>Établir et utiliser la formule de Clausius–Mossotti.</li><li>Connaître les facteurs influant sur la permittivité ; ferroélectricité et piézoélectricité.</li></ul>",
     "prerequis": "Chapitres 2 et 3.",
     "essentiel": "<ul><li>Champ local (dense) : $\\V E_\\loc=\\V E+\\V P/3\\varepsilon_0$ ; dilué : $\\V E_\\loc=\\V E$.</li><li>$\\V P=n\\alpha\\V E_\\loc$ ; dense : $\\chi_e=\\dfrac{n\\alpha/\\varepsilon_0}{1-n\\alpha/3\\varepsilon_0}$ ; dilué : $\\chi_e=n\\alpha/\\varepsilon_0$.</li><li>Clausius–Mossotti : $\\dfrac{\\varepsilon_r-1}{\\varepsilon_r+2}=\\dfrac{n\\alpha}{3\\varepsilon_0}$.</li><li>Ferroélectrique : polarisation spontanée, hystérésis, $n\\alpha/3\\varepsilon_0\\to1$ ; piézoélectrique : couplage mécanique–électrique.</li></ul>",
     "debut": 23,
     "fin": 26,
     "partie": null,
     "sections": [
      {
       "titre": "Le champ local",
       "page": 23
      },
      {
       "titre": "Polarisabilité et susceptibilité",
       "page": 24
      },
      {
       "titre": "Facteurs influant sur la permittivité",
       "page": 25
      },
      {
       "titre": "Ferroélectricité",
       "page": 25
      },
      {
       "titre": "Piézoélectricité",
       "page": 26
      }
     ],
     "methodes": [],
     "pdf": "docs/physique-des-materiaux/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Diélectriques en régime variable : permittivité complexe et pertes",
     "intro": "En régime sinusoïdal, la polarisation suit le champ avec retard : la polarisabilité, donc la permittivité, devient complexe et le matériau absorbe de l'énergie. Le modèle de l'électron élastiquement lié en rend compte.",
     "objectifs": "<ul><li>Établir la polarisabilité électronique complexe $\\alpha(\\omega)$.</li><li>Connaître l'allure de la polarisabilité totale sur le spectre.</li><li>Définir $\\varepsilon_r(\\omega)=\\varepsilon_r'+j\\varepsilon_r''$ et la tangente de pertes.</li><li>Calculer la puissance moyenne absorbée par un diélectrique.</li></ul>",
     "prerequis": "Chapitres 2 à 4 ; régime sinusoïdal forcé.",
     "essentiel": "<ul><li>Électron élastiquement lié : $\\ddot{\\V r}+\\lambda\\dot{\\V r}+\\omega_0^2\\V r=-\\frac em\\V E$ ; $\\alpha=\\dfrac{e^2/m}{\\omega_0^2-\\omega^2+j\\lambda\\omega}$.</li><li>Résonances : orientation (RF), ionique (IR), électronique (visible, UV).</li><li>$\\varepsilon_r=\\varepsilon_r'+j\\varepsilon_r''$, $\\tan\\delta=|\\varepsilon_r''/\\varepsilon_r'|$.</li><li>Pertes : $\\moy{\\diff P/\\diff\\tau}=-\\tfrac12\\varepsilon_0\\varepsilon_r''\\omega E_0^2&gt;0$.</li></ul>",
     "debut": 27,
     "fin": 30,
     "partie": null,
     "sections": [
      {
       "titre": "Polarisation électronique en régime variable",
       "page": 27
      },
      {
       "titre": "Permittivité complexe",
       "page": 28
      },
      {
       "titre": "Pertes diélectriques",
       "page": 29
      }
     ],
     "methodes": [],
     "pdf": "docs/physique-des-materiaux/chapitre-05.pdf"
    },
    {
     "n": 6,
     "titre": "Aimantation et champ magnétique dans la matière",
     "intro": "L'étude des propriétés magnétiques suit le plan de la partie diélectrique, avec prudence : les champs électrique et magnétique sont de natures différentes, et il n'existe pas de charges magnétiques, sauf de façon artificielle.",
     "objectifs": "<ul><li>Définir le dipôle magnétique et le vecteur aimantation $\\V M$.</li><li>Établir les courants d'aimantation $\\V j_M=\\rot\\V M$ et $\\V j_{SM}=\\V M\\wedge\\V n$.</li><li>Définir $\\V H=\\V B/\\mu_0-\\V M$, la susceptibilité $\\chi_m$ et la perméabilité $\\mu_r=1+\\chi_m$.</li></ul>",
     "prerequis": "Chapitres 1 et 3.",
     "essentiel": "<ul><li>$\\V m=I\\V S$ ; $\\V M=\\diff\\V m/\\diff\\tau$ (A/m).</li><li>Courants d'aimantation : $\\V j_M=\\rot\\V M$ (volume), $\\V j_{SM}=\\V M\\wedge\\V n$ (surface).</li><li>$\\V H=\\V B/\\mu_0-\\V M$, $\\rot\\V H=\\V j_\\libre+\\varepsilon_0\\partial\\V E/\\partial t$.</li><li>$\\V M=\\chi_m\\V H$, $\\mu_r=1+\\chi_m$, $\\V B=\\mu_0\\mu_r\\V H$.</li></ul>",
     "debut": 31,
     "fin": 34,
     "partie": null,
     "sections": [
      {
       "titre": "Repères historiques et applications",
       "page": 31
      },
      {
       "titre": "Le vecteur aimantation",
       "page": 31
      },
      {
       "titre": "Courants équivalents à une distribution de moments",
       "page": 32
      },
      {
       "titre": "Le champ magnétique ",
       "page": 33
      },
      {
       "titre": "Susceptibilité et perméabilité magnétiques",
       "page": 34
      }
     ],
     "methodes": [],
     "pdf": "docs/physique-des-materiaux/chapitre-06.pdf"
    },
    {
     "n": 7,
     "titre": "Matériaux magnétiques : propriétés, énergie, interfaces",
     "intro": "Trois familles de comportements, liées à la structure atomique : diamagnétisme, paramagnétisme, ferromagnétisme. On en déduit l'énergie et les pertes magnétiques, les deux approches de calcul du champ d'un aimant, et les conditions de passage.",
     "objectifs": "<ul><li>Distinguer dia-, para- et ferromagnétisme (signe et ordre de grandeur de $\\chi_m$).</li><li>Décrire le cycle d'hystérésis : saturation, rémanence, champ coercitif ; température de Curie, domaines de Weiss.</li><li>Calculer l'énergie magnétique, les pertes par hystérésis et dans un matériau linéaire.</li><li>Utiliser les approches ampérienne et coulombienne ; écrire les conditions de passage.</li></ul>",
     "prerequis": "Chapitre 6.",
     "essentiel": "<ul><li>Dia : $\\chi_m&lt;0$, $|\\chi_m|\\sim10^{-6}$–$10^{-5}$ ; para : $\\chi_m&gt;0$, $\\lesssim10^{-3}$ ; ferro : $\\mu_r$ jusqu'à $10^4$–$10^5$, non linéaire, hystérésis ($M_s$, $M_r$, $H_c$), Curie (fer 770 °C), domaines de Weiss.</li><li>$\\diff u=\\V H\\cdot\\diff\\V B$ ; linéaire $u=\\tfrac12\\mu H^2$ ; hystérésis : pertes $=$ aire du cycle.</li><li>Linéaire à pertes : $\\moy{\\diff P/\\diff\\tau}=-\\tfrac12\\mu_0\\mu_r''\\omega H_0^2$, $\\propto|\\mu_r''|$, $\\omega$, $H_0^2$ ($\\V B$ en retard sur $\\V H$) ; chauffage par induction.</li><li>Ampérienne : $\\V j_M$, $\\V j_{SM}$ ; coulombienne : $\\rho_m=-\\mu_0\\Div\\V M$, $\\sigma_m=\\mu_0\\V M\\cdot\\V n$, $\\V H=-\\grad V_m$.</li><li>Interface : $\\V H_{T2}-\\V H_{T1}=\\V J_S\\wedge\\V n_{1\\to2}$ ; $B_N$ continu.</li></ul>",
     "debut": 35,
     "fin": 44,
     "partie": null,
     "sections": [
      {
       "titre": "Diamagnétisme",
       "page": 35
      },
      {
       "titre": "Paramagnétisme",
       "page": 35
      },
      {
       "titre": "Ferromagnétisme",
       "page": 36
      },
      {
       "titre": "Énergie magnétique",
       "page": 37
      },
      {
       "titre": "Calcul du champ créé par un volume aimanté",
       "page": 39
      },
      {
       "titre": "Conditions de passage",
       "page": 39
      },
      {
       "titre": "La sphère aimantée",
       "page": 40
      },
      {
       "titre": "Résolution par le potentiel scalaire magnétique",
       "page": 41
      }
     ],
     "methodes": [
      {
       "num": "7.1",
       "titre": "Calculer $\\vec {H}$ par l'approche coulombienne",
       "page": 42
      }
     ],
     "pdf": "docs/physique-des-materiaux/chapitre-07.pdf"
    }
   ]
  },
  {
   "id": "integration",
   "matiere": "maths",
   "titre": "Intégration",
   "description": "Espaces normés, intégrale de Lebesgue, séries et transformée de Fourier, convolution, distributions et échantillonnage.",
   "pages": 24,
   "pdf": "docs/integration.pdf",
   "fiche": "docs/integration/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Espaces vectoriels normés : quelques rappels",
     "intro": "La norme, la convergence d'une suite et la continuité d'une application sont définies dans des espaces vectoriels quelconques, souvent de dimension infinie (espaces de fonctions). On y verra qu'en dimension infinie, la convergence dépend de la norme, et qu'une application linéaire n'est pas toujours continue.",
     "objectifs": "<ul><li>Manipuler normes, produits scalaires, projection orthogonale.</li><li>Distinguer les convergences d'une suite de fonctions.</li><li>Caractériser la continuité d'une application linéaire ; norme subordonnée.</li></ul>",
     "prerequis": "Algèbre linéaire de CPGE.",
     "essentiel": "<ul><li>Norme : séparation, homogénéité, inégalité triangulaire ; produit scalaire $\\Rightarrow$ norme ; Cauchy–Schwarz.</li><li>$P_F(x)=\\sum\\frac{\\ps x{e_i}}{\\nrm{e_i}^2}e_i$ minimise $\\nrm{x-z}$ sur $F$.</li><li>En dimension infinie, la convergence dépend de la norme (simple, uniforme, quadratique).</li><li>Linéaire : continue $\\iff$ bornée sur la boule unité $\\iff\\nrm{Tx}\\le L\\nrm x$.</li></ul>",
     "debut": 4,
     "fin": 6,
     "partie": null,
     "sections": [
      {
       "titre": "Espaces vectoriels normés",
       "page": 4
      },
      {
       "titre": "Un peu de topologie",
       "page": 5
      },
      {
       "titre": "Applications linéaires continues",
       "page": 6
      }
     ],
     "methodes": [],
     "pdf": "docs/integration/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "L'intégrale de Lebesgue",
     "intro": "L'intégrale de Riemann n'intègre guère que des fonctions continues par morceaux, et l'égalité $\\lim\\int f_n=\\int\\lim f_n$ n'y est vraie que sous des hypothèses contraignantes. Lebesgue découpe l'axe des <em>ordonnées</em> : il faut alors savoir mesurer des ensembles compliqués, d'où la théorie de la mesure. En pratique, le calcul se fait comme avant (intégration par parties, changement de variable), avec en plus de grands théorèmes d'interversion.",
     "objectifs": "<ul><li>Connaître tribu, mesure, ensemble négligeable, mesure de Lebesgue.</li><li>Définir l'intégrale de Lebesgue et l'espace $L^1$.</li><li>Appliquer convergence monotone, convergence dominée, continuité et dérivation sous l'intégrale.</li><li>Utiliser intégration par parties, Fubini–Tonelli, changement de variables.</li></ul>",
     "prerequis": "Chapitre 1 ; intégrale de Riemann.",
     "essentiel": "<ul><li>Tribu, mesure $\\sigma$-additive ; mesure de Lebesgue : $\\mu(]a,b[)=b-a$, complète ; dénombrable $\\Rightarrow$ négligeable.</li><li>$\\int f$ : sup des intégrales de fonctions étagées ; $f\\in L^1\\iff\\int|f|&lt;\\infty$ ; égalité p.p.</li><li>Convergence monotone (suite positive croissante) ; convergence dominée ($|f_n|\\le g\\in L^1$ indépendante de $n$).</li><li>Continuité/dérivation sous $\\int$ : domination de $f$ (resp. $\\partial_tf$) localement en $t$.</li><li>IPP (absolue continuité) ; Tonelli puis Fubini ; changement de variables avec $|\\det D\\varphi|$.</li></ul>",
     "debut": 7,
     "fin": 11,
     "partie": null,
     "sections": [
      {
       "titre": "De Riemann à Lebesgue",
       "page": 7
      },
      {
       "titre": "Notions de mesure",
       "page": 7
      },
      {
       "titre": "L'intégrale de Lebesgue",
       "page": 8
      },
      {
       "titre": "Les grands théorèmes",
       "page": 9
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Intervertir limite et intégrale",
       "page": 10
      },
      {
       "num": "2.2",
       "titre": "Intégrale double",
       "page": 11
      }
     ],
     "pdf": "docs/integration/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Séries de Fourier",
     "intro": "Introduites par Fourier en 1822 pour résoudre l'équation de la chaleur, les séries de Fourier représentent une fonction périodique comme une somme de sinusoïdes de fréquences multiples de la fondamentale (en audio : la fondamentale donne la note, les harmoniques le timbre). La théorie complète repose sur les bases hilbertiennes (vues plus tard) : les résultats sont ici admis, mais il faut savoir <em>calculer</em> les coefficients et surtout préciser le <em>type de convergence</em>.",
     "objectifs": "<ul><li>Passer des coefficients réels $a_n,b_n$ aux coefficients complexes $c_n$.</li><li>Énoncer convergence quadratique, Parseval, convergence uniforme, Dirichlet.</li><li>Relier régularité de $f$ et décroissance de ses coefficients.</li></ul>",
     "prerequis": "Produit scalaire, projection orthogonale (chapitre 1) ; intégrale (chapitre 2).",
     "essentiel": "<ul><li>$c_n=\\frac1T\\int_0^Tfe^{-i2\\pi nt/T}$ ; $a_n=c_n+c_{-n}$, $b_n=i(c_n-c_{-n})$.</li><li>$L^2$ et Parseval : toujours ; Dirichlet ($C^1$ par morceaux) : demi-somme des limites ; uniforme : $f$ continue et $\\sum|c_n|&lt;\\infty$.</li><li>Gibbs : dépassement d'environ $9\\,\\%$ du saut, persistant.</li><li>Régularité $\\leftrightarrow$ décroissance des $c_n$ ; $c_n(f')=\\frac{i2\\pi n}Tc_n(f)$.</li></ul>",
     "debut": 12,
     "fin": 15,
     "partie": null,
     "sections": [
      {
       "titre": "Polynômes trigonométriques",
       "page": 12
      },
      {
       "titre": "Convergence de la série de Fourier",
       "page": 13
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Étudier une série de Fourier",
       "page": 14
      }
     ],
     "pdf": "docs/integration/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Transformée de Fourier",
     "intro": "La transformée de Fourier généralise les séries de Fourier aux fonctions non périodiques : quand la période $T$ augmente, les raies du spectre (aux fréquences $n/T$) se rapprochent, et l'on passe d'un spectre discret à un spectre continu.",
     "objectifs": "<ul><li>Définir la TF dans $L^1$ et connaître ses propriétés (Riemann–Lebesgue, transfert, dérivation, inversion).</li><li>Étendre la TF à $L^2$ (Plancherel).</li><li>Manipuler la convolution et son lien avec la TF ; filtres linéaires.</li><li>Utiliser le formulaire.</li></ul>",
     "prerequis": "Chapitres 2 (convergence dominée, Fubini) et 3.",
     "essentiel": "<ul><li>$\\hat f(\\nu)=\\int fe^{-i2\\pi\\nu t}$ ; $\\hat f$ continue bornée, $\\to0$ à l'infini ; $\\nrm{\\hat f}_\\infty\\le\\nrm f_1$.</li><li>Inversion si $f,\\hat f\\in L^1$ ; ponctuelle (demi-somme) sinon, en valeur principale.</li><li>$L^2$ : TF isométrique et bijective ; $\\int|\\hat f|^2=\\int|f|^2$.</li><li>$\\widehat{f*g}=\\hat f\\hat g$ ; filtre linéaire : $\\hat y=\\hat h\\hat x$.</li></ul>",
     "debut": 16,
     "fin": 20,
     "partie": null,
     "sections": [
      {
       "titre": "Transformée de Fourier dans L1(R)",
       "page": 16
      },
      {
       "titre": "Transformée de Fourier dans L2(R)",
       "page": 18
      },
      {
       "titre": "Produit de convolution",
       "page": 18
      },
      {
       "titre": "Formulaire",
       "page": 19
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Calculer une transformée de Fourier",
       "page": 20
      }
     ],
     "pdf": "docs/integration/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Distributions",
     "intro": "Les distributions apparaissent quand on veut dériver des fonctions non dérivables ou passer à la limite dans certaines suites de fonctions. L'« impulsion de Dirac », « infinie en 0 et nulle ailleurs », n'est pas une fonction ; Laurent Schwartz l'a définie rigoureusement au milieu du <span class=\"sc\">xx</span><sup>e</sup> siècle comme une <em>forme linéaire</em> : $\\delta(\\varphi)=\\varphi(0)$. Comme en physique, on n'observe pas l'impulsion directement, mais à travers une fonction test $\\varphi$ représentant l'appareil de mesure. L'objectif est modeste : définitions rigoureuses et propriétés utiles.",
     "objectifs": "<ul><li>Connaître $\\Dc(\\R)$, $\\Dc'(\\R)$, $\\Sc(\\R)$, $\\Sc'(\\R)$ et leurs convergences.</li><li>Dériver une distribution ; appliquer la formule des sauts.</li><li>Calculer la TF d'une distribution tempérée ($\\delta$, peigne de Dirac).</li><li>Énoncer et démontrer le théorème d'échantillonnage de Shannon.</li></ul>",
     "prerequis": "Chapitres 2 et 4.",
     "essentiel": "<ul><li>$\\Dc$ : $C^\\infty$ à support compact ; $\\Dc'$ : formes linéaires continues ; $f\\in L^1_{loc}\\mapsto T_f$ injective.</li><li>$\\ps{T'}\\varphi=-\\ps T{\\varphi'}$ ; formule des sauts : $T_f'=T_{\\{f'\\}}+\\sum\\sigma_n\\delta_{a_n}$.</li><li>$\\Sc$ stable par TF ; $\\ps{\\hat T}\\varphi=\\ps T{\\hat\\varphi}$ sur $\\Sc'$ ; $\\hat\\delta=1$, $\\hat1=\\delta$, $\\widehat{\\Delta_a}=\\frac1a\\Delta_{1/a}$.</li><li>Shannon : $F_e&gt;2B$, reconstruction par sinus cardinaux ; sinon repliement.</li></ul>",
     "debut": 21,
     "fin": 24,
     "partie": null,
     "sections": [
      {
       "titre": "Fonctions tests et distributions",
       "page": 21
      },
      {
       "titre": "Dérivées des distributions",
       "page": 22
      },
      {
       "titre": "Transformée de Fourier des distributions",
       "page": 22
      },
      {
       "titre": "Théorème d'échantillonnage",
       "page": 23
      }
     ],
     "methodes": [],
     "pdf": "docs/integration/chapitre-05.pdf"
    }
   ]
  },
  {
   "id": "analyse-complexe",
   "matiere": "maths",
   "titre": "Analyse complexe",
   "description": "Fonctions holomorphes, intégration complexe et théorème des résidus, transformée de Laplace, transformée en Z.",
   "pages": 23,
   "pdf": "docs/analyse-complexe.pdf",
   "fiche": "docs/analyse-complexe/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Nombres complexes et fonctions holomorphes",
     "intro": "Toute l'analyse complexe repose sur la dérivabilité au sens complexe, condition beaucoup plus forte que la différentiabilité dans $\\R^2$ : elle lie partie réelle et partie imaginaire.",
     "objectifs": "<ul><li>Revoir le corps $\\C$, module, argument, topologie, séries.</li><li>Connaître séries entières, rayon de convergence, exponentielle et fonctions trigonométriques complexes.</li><li>Manipuler les déterminations de l'argument, du logarithme et des puissances.</li><li>Caractériser l'holomorphie par les conditions de Cauchy–Riemann.</li></ul>",
     "prerequis": "Nombres complexes (lycée), séries numériques, fonctions de deux variables.",
     "essentiel": "<ul><li>$R=1/\\limsup|a_n|^{1/n}$ ; convergence normale sur les compacts du disque ouvert ; rien de général sur le bord.</li><li>$e^z=1\\iff z\\in2i\\pi\\Z$ ; $\\cos$, $\\sin$, $\\cosh$, $\\sinh$ définis sur $\\C$.</li><li>Détermination $\\arg_{k,\\alpha}$ sur $\\C\\setminus D_\\alpha$ ; $\\log z=\\ln|z|+i\\arg z$ ; $z^\\beta=e^{\\beta\\log z}$ ; $(\\log z)'=1/z$.</li><li>Holomorphe $\\iff$ différentiable et Cauchy–Riemann : $P_x=Q_y$, $P_y=-Q_x$.</li></ul>",
     "debut": 4,
     "fin": 8,
     "partie": null,
     "sections": [
      {
       "titre": "Le corps des complexes",
       "page": 4
      },
      {
       "titre": "Topologie et convergences",
       "page": 5
      },
      {
       "titre": "Fonctions usuelles et séries entières",
       "page": 5
      },
      {
       "titre": "Argument, logarithme et puissances",
       "page": 7
      },
      {
       "titre": "Fonctions holomorphes",
       "page": 7
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Montrer qu'une fonction est holomorphe",
       "page": 8
      }
     ],
     "pdf": "docs/analyse-complexe/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Intégration complexe et théorème des résidus",
     "intro": "On intègre désormais le long de chemins du plan. La rigidité des fonctions holomorphes fait que leur intégrale sur un lacet ne dépend que des singularités entourées : c'est le théorème des résidus, outil de calcul majeur de l'ingénieur.",
     "objectifs": "<ul><li>Calculer une intégrale curviligne ; savoir démontrer les lemmes de Jordan.</li><li>Énoncer le théorème de Cauchy et ses conséquences (primitives, formule intégrale, Laurent).</li><li>Calculer des résidus et appliquer le théorème des résidus au calcul d'intégrales réelles.</li></ul>",
     "prerequis": "Chapitre 1 ; convergence dominée (livre <em>Intégration</em>, chapitre 2).",
     "essentiel": "<ul><li>$\\int_\\gamma f\\dd z=\\int f(\\gamma(t))\\gamma'(t)\\dd t$ ; $\\oint\\frac{\\dd z}{z-a}=2i\\pi$.</li><li>Jordan 1 : $|zf|\\to0$ ; Jordan 2 : $|f|\\to0$ et $e^{imz}$ dans le bon demi-plan.</li><li>Cauchy : $\\oint f=0$ sur un domaine simplement connexe ; primitives ; Laurent.</li><li>$\\oint f=2i\\pi\\sum\\Res$ ; pôle simple : $P(z_0)/Q'(z_0)$ ; pôle d'ordre $p$ : formule de dérivation.</li></ul>",
     "debut": 9,
     "fin": 14,
     "partie": null,
     "sections": [
      {
       "titre": "Intégrale curviligne",
       "page": 9
      },
      {
       "titre": "Lemmes de Jordan",
       "page": 10
      },
      {
       "titre": "Théorème de Cauchy et conséquences",
       "page": 10
      },
      {
       "titre": "Singularités et résidus",
       "page": 11
      },
      {
       "titre": "Applications au calcul d'intégrales",
       "page": 12
      },
      {
       "titre": "Fonctions harmoniques (H.P.)",
       "page": 13
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Intégrale $\\int _{-\\infty }^{+\\infty }g(x)\\,\\mathrm {d}x$",
       "page": 13
      }
     ],
     "pdf": "docs/analyse-complexe/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Transformée de Laplace",
     "intro": "Outil majeur pour les équations différentielles et aux dérivées partielles linéaires (tout l'automatique travaille « dans le domaine de Laplace »), la transformée de Laplace change des fonctions ne décroissant que faiblement à l'infini en fonctions holomorphes sur un demi-plan. On se limite aux signaux <em>causaux</em> (transformée unilatérale ; il existe une version bilatérale).",
     "objectifs": "<ul><li>Définir la transformée et ses abscisses de convergence.</li><li>Utiliser les propriétés (dérivation, intégration, translations, convolution, valeurs initiale et finale) et la table.</li><li>Inverser par la table, par éléments simples ou par la formule de Bromwich.</li><li>Résoudre des équations différentielles et des EDP linéaires.</li></ul>",
     "prerequis": "Chapitres 1 et 2 ; transformée de Fourier (livre <em>Intégration</em>, chapitre 4).",
     "essentiel": "<ul><li>$F(p)=\\int_0^\\infty e^{-pt}f$, holomorphe pour $\\Re p&gt;x_{ca}$ ; $x_c$ = partie réelle maximale des singularités.</li><li>$\\TL(f')=pF-f(0^+)$ ; $\\TL(tf)=-F'$ ; $\\TL(\\int_0^tf)=F/p$ ; retard $e^{-ap}F$ ; $\\TL(e^{at}f)=F(p-a)$.</li><li>Convolution causale $\\to$ produit ; valeurs initiale et finale par $pF(p)$.</li><li>Inversion : table, éléments simples, Bromwich + résidus. EDO : $Y=P/H+F/H$.</li></ul>",
     "debut": 15,
     "fin": 19,
     "partie": null,
     "sections": [
      {
       "titre": "Définition et domaine de convergence",
       "page": 15
      },
      {
       "titre": "Propriétés",
       "page": 16
      },
      {
       "titre": "Table",
       "page": 17
      },
      {
       "titre": "Inversion",
       "page": 17
      },
      {
       "titre": "Applications",
       "page": 18
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Inverser une transformée de Laplace",
       "page": 18
      },
      {
       "num": "3.2",
       "titre": "Équation différentielle linéaire à coefficients constants",
       "page": 18
      }
     ],
     "pdf": "docs/analyse-complexe/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Transformée en Z",
     "intro": "En pratique, on n'a accès qu'à une version échantillonnée des signaux. La transformée en Z offre pour les suites un traitement analogue à celui de la transformée de Laplace : elle est aux récurrences linéaires ce que Laplace est aux équations différentielles.",
     "objectifs": "<ul><li>Définir la transformée en Z et sa région de convergence.</li><li>Utiliser ses propriétés et la formule d'inversion.</li><li>Résoudre des récurrences linéaires ; relier transformée en Z et transformée de Laplace.</li></ul>",
     "prerequis": "Séries de Laurent et résidus (chapitre 2) ; transformée de Laplace (chapitre 3).",
     "essentiel": "<ul><li>$U(z)=\\sum u_nz^{-n}$, convergente sur un anneau $R^-&lt;|z|&lt;R^+$.</li><li>Retard $z^{-n_0}$ ; $a^nx\\to X(z/a)$ ; $nx\\to-zX'$ ; convolution $\\to$ produit.</li><li>$u(n)=\\frac1{2i\\pi}\\oint U(z)z^{n-1}\\dd z$ ; $a^n\\1_{n\\ge0}\\leftrightarrow\\frac1{1-az^{-1}}$, $|z|&gt;|a|$.</li><li>Échantillonnage : $z=e^{pT}$.</li></ul>",
     "debut": 20,
     "fin": 23,
     "partie": null,
     "sections": [
      {
       "titre": "Définition et propriétés",
       "page": 20
      },
      {
       "titre": "Applications",
       "page": 21
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Résoudre une récurrence linéaire",
       "page": 22
      }
     ],
     "pdf": "docs/analyse-complexe/chapitre-04.pdf"
    }
   ]
  },
  {
   "id": "probabilites",
   "matiere": "maths",
   "titre": "Probabilités",
   "description": "Espaces de probabilité, variables et vecteurs aléatoires, lois usuelles, fonction caractéristique, théorèmes limites.",
   "pages": 25,
   "pdf": "docs/probabilites.pdf",
   "fiche": "docs/probabilites/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Espaces de probabilité",
     "intro": "La théorie des probabilités, née au <span class=\"sc\">xvii</span><sup>e</sup> siècle (Pascal, Fermat), cherche les régularités du hasard ; elle sert aussi bien en physique (mécanique quantique) qu'en ingénierie (sûreté de fonctionnement, estimation de paramètres). Mathématiquement, une probabilité est une mesure de masse totale 1 (livre <em>Intégration</em>, chapitre 2).",
     "objectifs": "<ul><li>Définir tribu, probabilité, espace probabilisé.</li><li>Construire des probabilités discrètes et la probabilité uniforme.</li><li>Utiliser conditionnement, probabilités composées et totales, formule de Bayes.</li><li>Distinguer indépendance deux à deux et mutuelle ; lemme de Borel–Cantelli.</li></ul>",
     "prerequis": "Théorie des ensembles, dénombrement ; mesure (livre <em>Intégration</em>, chapitre 2).",
     "essentiel": "<ul><li>Tribu (stable par complémentaire et réunion dénombrable) ; probabilité $\\sigma$-additive de masse 1.</li><li>$\\P(A\\cup B)=\\P(A)+\\P(B)-\\P(A\\cap B)$ ; continuité monotone.</li><li>$\\P(A|B)=\\P(A\\cap B)/\\P(B)$ ; probabilités composées, totales ; Bayes.</li><li>Indépendance : $\\P(A\\cap B)=\\P(A)\\P(B)$ ; mutuelle $\\ne$ deux à deux ; Borel–Cantelli.</li></ul>",
     "debut": 4,
     "fin": 6,
     "partie": null,
     "sections": [
      {
       "titre": "Événements et univers",
       "page": 4
      },
      {
       "titre": "Premiers exemples",
       "page": 5
      },
      {
       "titre": "Conditionnement",
       "page": 5
      },
      {
       "titre": "Indépendance",
       "page": 6
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Conditionner",
       "page": 6
      }
     ],
     "pdf": "docs/probabilites/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Variables aléatoires réelles",
     "intro": "L'objet d'intérêt n'est souvent pas l'univers lui-même mais une quantité numérique mesurée sur l'expérience : une variable aléatoire. Ce qui compte alors est sa <em>loi</em>, mesure de probabilité sur $\\R$.",
     "objectifs": "<ul><li>Définir variable aléatoire, loi, fonction de répartition, espérance, variance.</li><li>Connaître les lois discrètes (uniforme, Bernoulli, binomiale, géométrique, Poisson) et à densité (uniforme, exponentielle, gamma, normale, log-normale, Cauchy).</li><li>Calculer la loi d'une fonction d'une variable à densité.</li></ul>",
     "prerequis": "Chapitre 1 ; intégrale de Lebesgue (livre <em>Intégration</em>, chapitre 2).",
     "essentiel": "<ul><li>Loi $\\P_X$, fonction de répartition $F$ ; transfert $\\Esp\\Phi(X)=\\int\\Phi\\dd\\P_X$.</li><li>$V(X)=\\Esp X^2-(\\Esp X)^2$ ; variance additive pour des variables indépendantes.</li><li>Tables des lois discrètes et à densité (moyenne, variance, génératrice) ; lois sans mémoire : géométrique, exponentielle.</li><li>Densité de $\\Psi(X)$ : $f_X(x(y))|x'(y)|$ ; par morceaux : somme des contributions ; discret : somme sur les antécédents.</li><li>Variable mixte : atomes $p_i$ + densité $p$, $\\sum p_i+\\int p=1$.</li></ul>",
     "debut": 7,
     "fin": 12,
     "partie": null,
     "sections": [
      {
       "titre": "Outils généraux",
       "page": 7
      },
      {
       "titre": "Variables discrètes",
       "page": 8
      },
      {
       "titre": "Variables à densité",
       "page": 9
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Loi de $Y=g(X)$",
       "page": 11
      }
     ],
     "pdf": "docs/probabilites/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Vecteurs aléatoires",
     "intro": "Étudier plusieurs variables simultanément, $X=(X_1,\\dots,X_d)$, permet de prendre en compte la structure d'association qui les lie. La plupart des notions univariées se généralisent, mais de nouveaux phénomènes apparaissent : covariance, lois marginales, indépendance.",
     "objectifs": "<ul><li>Définir la loi, la fonction de répartition et la densité d'un vecteur aléatoire.</li><li>Calculer espérance, matrice de covariance, coefficient de corrélation.</li><li>Connaître la loi multinomiale et les vecteurs gaussiens (transformation affine, lois conditionnelles, $\\chi^2$, Student, Fisher).</li><li>Obtenir les lois marginales, tester l'indépendance, changer de variables.</li></ul>",
     "prerequis": "Chapitre 2 ; Fubini et changement de variables (livre <em>Intégration</em>, chapitre 2).",
     "essentiel": "<ul><li>Loi conjointe $\\Rightarrow$ marginales (somme ou intégrale), pas l'inverse.</li><li>$\\Lambda$ symétrique positive ; $\\rho\\in[-1,1]$ ; indépendance $\\Rightarrow$ non-corrélation (équivalence si gaussien).</li><li>Indépendance $\\iff$ $F$ ou densité produit.</li><li>Densité de $T(X)$ : $f\\circ T^{-1}\\,|J_{T^{-1}}|$ ; somme indépendante : convolution des densités.</li><li>Conditionnelles $p(x|y)=p(x,y)/p_Y(y)$, Bayes ; $\\Esp[\\alpha(X,Y)]=\\Esp_X\\big[\\Esp_Y[\\alpha|X]\\big]$.</li><li>$AX+b\\sim\\mathcal N_p(Am+b,A\\Sigma A^\\top)$ ; blocs indépendants $\\iff\\Sigma_{12}=0$ ; $X_1|X_2=a\\sim\\mathcal N(m_1+\\Sigma_{12}\\Sigma_2^{-1}(a-m_2),\\Sigma_1-\\Sigma_{12}\\Sigma_2^{-1}\\Sigma_{12}^\\top)$.</li><li>$\\chi^2_n$ (moyenne $n$, variance $2n$), Student $X/\\sqrt{Y/n}$, Fisher $\\frac{X/n}{Y/m}$.</li></ul>",
     "debut": 13,
     "fin": 19,
     "partie": null,
     "sections": [
      {
       "titre": "Loi d'un vecteur aléatoire",
       "page": 13
      },
      {
       "titre": "Espérance, covariance, corrélation",
       "page": 14
      },
      {
       "titre": "Deux exemples",
       "page": 14
      },
      {
       "titre": "Calculer avec plusieurs aléas",
       "page": 15
      },
      {
       "titre": "Vecteurs gaussiens : transformations et lois dérivées",
       "page": 17
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Loi de $X+Y$, $XY$, $X/Y$",
       "page": 17
      }
     ],
     "pdf": "docs/probabilites/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Fonction caractéristique et théorèmes limites",
     "intro": "La fonction caractéristique, transformée de Fourier d'une loi, caractérise celle-ci et transforme les sommes de variables indépendantes en produits. Elle permet d'établir les grands théorèmes limites : loi des grands nombres (la fréquence empirique converge vers la probabilité) et théorème central limite (les fluctuations sont gaussiennes).",
     "objectifs": "<ul><li>Calculer et utiliser la fonction caractéristique.</li><li>Connaître les modes de convergence (loi, $L^p$, probabilité, presque sûre) et leurs liens.</li><li>Énoncer et appliquer la loi des grands nombres et le théorème central limite.</li></ul>",
     "prerequis": "Chapitres 2 et 3 ; transformée de Fourier (livre <em>Intégration</em>, chapitre 4).",
     "essentiel": "<ul><li>$\\varphi_X(t)=\\Esp e^{itX}$ caractérise la loi ; somme indépendante $\\to$ produit ; $\\varphi^{(k)}(0)=i^k\\Esp X^k$.</li><li>Loi (via $F$ ou Lévy) $\\Leftarrow$ probabilité $\\Leftarrow$ $L^1$ $\\Leftarrow$ $L^2$ ; p.s. $\\Rightarrow$ probabilité.</li><li>Markov, Bienaymé–Tchebychev.</li><li>Inversion : $p(u)=\\frac1{2\\pi}\\int e^{-iut}\\varphi(t)\\dd t$ ; $p_n\\to p$ p.p. $\\Rightarrow$ loi ; $g$ continue préserve loi et probabilité.</li><li>LGN : $\\bar X_n\\to m$ (probabilité, p.s. ; $L^2$ si variance finie) ; TCL : $\\sqrt n(\\bar X_n-m)/\\sigma\\to\\mathcal N(0,1)$ en loi.</li><li>Monte-Carlo : $\\frac1n\\sum h(X_i)\\to\\int hf$ ; importance : $\\frac1n\\sum h\\frac fg(X_i)$, $X_i\\sim g$.</li></ul>",
     "debut": 20,
     "fin": 25,
     "partie": null,
     "sections": [
      {
       "titre": "Fonction caractéristique",
       "page": 20
      },
      {
       "titre": "Modes de convergence",
       "page": 21
      },
      {
       "titre": "Théorèmes limites",
       "page": 22
      },
      {
       "titre": "Méthodes de Monte-Carlo",
       "page": 24
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Identifier la loi d'une somme indépendante",
       "page": 21
      }
     ],
     "pdf": "docs/probabilites/chapitre-04.pdf"
    }
   ]
  },
  {
   "id": "allemand-le-colle",
   "matiere": "langues",
   "titre": "Allemand",
   "description": "Lire et écrire, noms et verbes, phrase et négation, cas et lieux, nombres et dates, se présenter, humeurs et préférences, vocabulaire.",
   "pages": 26,
   "pdf": "docs/allemand-le-colle.pdf",
   "fiche": "docs/allemand-le-colle/fiche-revision.pdf",
   "chapitres": [
    {
     "n": 1,
     "titre": "Lire et écrire l'allemand",
     "intro": "L'allemand se lit presque toujours comme il s'écrit : une fois les correspondances entre lettres et sons connues, on sait prononcer n'importe quel mot. Quelques sons n'existent pas en français et demandent un peu d'entraînement.",
     "objectifs": "<ul><li>Lire les approximations de prononciation du livre.</li><li>Épeler avec l'alphabet allemand.</li><li>Prononcer voyelles, Umlaut, groupes de lettres et consonnes particulières.</li><li>Écrire correctement : majuscules, <span class=\"de\">ß</span> ou <span class=\"de\">ss</span>.</li></ul>",
     "prerequis": "Aucun.",
     "essentiel": "<ul><li><span class=\"de\">ei</span> = <span class=\"pr\">«&#8239;aï&#8239;»</span>, <span class=\"de\">ie</span> = <span class=\"pr\">«&#8239;i&#8239;»</span>, <span class=\"de\">eu/äu</span> = <span class=\"pr\">«&#8239;oï&#8239;»</span>, <span class=\"de\">sch</span> = <span class=\"pr\">«&#8239;ch&#8239;»</span>, <span class=\"de\">z</span> = <span class=\"pr\">«&#8239;ts&#8239;»</span>, <span class=\"de\">w</span> = <span class=\"pr\">«&#8239;v&#8239;»</span>, <span class=\"de\">v</span> = <span class=\"pr\">«&#8239;f&#8239;»</span>, <span class=\"de\">j</span> = <span class=\"pr\">«&#8239;y&#8239;»</span>, <span class=\"de\">sp/st</span> initial = <span class=\"pr\">«&#8239;chp/cht&#8239;»</span>.</li><li><span class=\"de\">ch</span> : <span class=\"pr\">«&#8239;kh&#8239;»</span> après a, o, u, au ; <span class=\"pr\">«&#8239;ç&#8239;»</span> ailleurs ; jamais le « ch » français.</li><li>Pas de nasales, tout se prononce ; <span class=\"de\">b, d, g</span> finaux durcis ; <span class=\"de\">-er</span> final = <span class=\"pr\">«&#8239;a&#8239;»</span>.</li><li>Accent sur la première syllabe (sauf mots étrangers).</li><li>Majuscule à tous les noms et à <span class=\"de\">Sie</span> ; <span class=\"de\">ß</span> après voyelle longue, <span class=\"de\">ss</span> après voyelle courte.</li></ul>",
     "debut": 4,
     "fin": 6,
     "partie": null,
     "sections": [
      {
       "titre": "Lire les approximations et l'accent",
       "page": 4
      },
      {
       "titre": "L'alphabet",
       "page": 4
      },
      {
       "titre": "Les voyelles : longues, courtes, Umlaut",
       "page": 5
      },
      {
       "titre": "Groupes de lettres et consonnes",
       "page": 5
      },
      {
       "titre": "Écrire : majuscules, ß et ss",
       "page": 6
      }
     ],
     "methodes": [
      {
       "num": "1.1",
       "titre": "Lire un mot inconnu",
       "page": 5
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-01.pdf"
    },
    {
     "n": 2,
     "titre": "Les noms et les verbes",
     "intro": "Chaque nom allemand a un genre, que l'article rend visible, et un pluriel qu'il faut apprendre avec lui. Le verbe, lui, s'accorde avec son sujet par une terminaison : un seul modèle suffit pour presque tous les verbes, plus trois irréguliers à connaître par cœur.",
     "objectifs": "<ul><li>Employer les articles selon le genre et former le pluriel.</li><li>Comprendre les noms composés.</li><li>Distinguer <span class=\"de\">sie</span>, <span class=\"de\">sie</span> et <span class=\"de\">Sie</span>.</li><li>Conjuguer au présent les verbes réguliers, <span class=\"de\">sein</span>, <span class=\"de\">haben</span> et <span class=\"de\">mögen</span>.</li></ul>",
     "prerequis": "Chapitre 1.",
     "essentiel": "<ul><li><span class=\"de\">der</span> (m.), <span class=\"de\">die</span> (f.), <span class=\"de\">das</span> (n.), <span class=\"de\">die</span> (pl.) ; <span class=\"de\">ein, eine, ein</span>, pas d'article au pluriel.</li><li>Pluriel à apprendre avec le nom ; nom composé : genre du dernier élément.</li><li>Terminaisons <span class=\"de\">-e, -st, -t, -en, -t, -en</span> ; <span class=\"de\">du arbeitest</span>, <span class=\"de\">du heißt</span>, <span class=\"de\">du sprichst / er spricht</span>.</li><li><span class=\"de\">sein</span> : bin, bist, ist, sind, seid, sind ; <span class=\"de\">haben</span> : habe, hast, hat, haben, habt, haben ; <span class=\"de\">mögen</span> : mag, magst, mag, mögen, mögt, mögen.</li><li><span class=\"de\">man</span> + 3<sup>e</sup> personne du singulier ; <span class=\"de\">sie ist</span> / <span class=\"de\">sie sind</span> / <span class=\"de\">Sie sind</span>.</li></ul>",
     "debut": 7,
     "fin": 9,
     "partie": null,
     "sections": [
      {
       "titre": "Article et genre",
       "page": 7
      },
      {
       "titre": "Le pluriel",
       "page": 7
      },
      {
       "titre": "Les noms composés",
       "page": 8
      },
      {
       "titre": "Les pronoms sujets",
       "page": 8
      },
      {
       "titre": "Le présent des verbes réguliers",
       "page": 8
      },
      {
       "titre": "Trois verbes irréguliers et man",
       "page": 9
      }
     ],
     "methodes": [
      {
       "num": "2.1",
       "titre": "Conjuguer un verbe au présent",
       "page": 8
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-02.pdf"
    },
    {
     "n": 3,
     "titre": "Construire une phrase",
     "intro": "Ce qui structure la phrase allemande, c'est la <strong>place du verbe conjugué</strong> : en tête, en deuxième position ou à la fin selon le type de phrase. Le reste de l'ordre des mots en découle, y compris la place de la négation.",
     "objectifs": "<ul><li>Placer le verbe conjugué selon le type de phrase.</li><li>Poser des questions fermées et ouvertes.</li><li>Donner un ordre (impératif) et une raison (<span class=\"de\">weil</span>).</li><li>Nier avec <span class=\"de\">nicht</span> ou <span class=\"de\">kein</span>.</li></ul>",
     "prerequis": "Chapitre 2.",
     "essentiel": "<ul><li>Verbe 1<sup>er</sup> : question oui/non, impératif ; 2<sup>e</sup> : déclarative, question en W- ; dernier : après <span class=\"de\">weil</span>, <span class=\"de\">dass</span>, <span class=\"de\">was</span>.</li><li>Autre élément que le sujet en tête ⇒ inversion : <span class=\"de\">Heute haben wir Montag.</span></li><li><span class=\"de\">wer, was, wie, wo, woher, wohin, wann, warum, wie alt, wie groß</span> ; <span class=\"de\">welcher / welche / welches</span>, <span class=\"de\">welchen</span> au COD masculin.</li><li><span class=\"de\">Warum …?</span> — <span class=\"de\">…, weil er krank ist.</span> (virgule, verbe à la fin).</li><li><span class=\"de\">kein</span> devant un nom sans article ou avec <span class=\"de\">ein</span> ; <span class=\"de\">nicht</span> ailleurs, en fin de phrase s'il nie tout.</li></ul>",
     "debut": 10,
     "fin": 12,
     "partie": null,
     "sections": [
      {
       "titre": "La place du verbe conjugué",
       "page": 10
      },
      {
       "titre": "Poser une question",
       "page": 10
      },
      {
       "titre": "« Quel ? » : welcher",
       "page": 11
      },
      {
       "titre": "L'impératif",
       "page": 11
      },
      {
       "titre": "Donner une raison : weil",
       "page": 11
      },
      {
       "titre": "La négation",
       "page": 11
      }
     ],
     "methodes": [
      {
       "num": "3.1",
       "titre": "Répondre à « Warum? » avec weil",
       "page": 11
      },
      {
       "num": "3.2",
       "titre": "Construire une phrase",
       "page": 12
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-03.pdf"
    },
    {
     "n": 4,
     "titre": "Les cas, la possession et les lieux",
     "intro": "En allemand, l'article et le possessif changent selon la fonction du nom dans la phrase : c'est le système des <strong>cas</strong>. Trois cas ont été vus ; ils suffisent pour dire à qui appartient quelque chose, pour situer un lieu et pour dire comment va quelqu'un.",
     "objectifs": "<ul><li>Reconnaître nominatif, accusatif et datif.</li><li>Choisir le bon possessif et sa terminaison.</li><li>Exprimer le possesseur (<span class=\"de\">Leos</span>, <span class=\"de\">von</span> + datif).</li><li>Situer et dire la provenance avec <span class=\"de\">in</span>, <span class=\"de\">an</span>, <span class=\"de\">aus</span>.</li></ul>",
     "prerequis": "Chapitres 2 et 3.",
     "essentiel": "<ul><li>Accusatif : seul le masculin change (<span class=\"de\">den, einen, meinen, keinen, welchen</span>).</li><li>Datif après <span class=\"de\">von, aus, mit</span> et <span class=\"de\">in / an</span> pour situer : <span class=\"de\">dem / der / dem / den</span>.</li><li>Possessif : le possesseur choisit le mot (<span class=\"de\">sein</span> / <span class=\"de\">ihr</span>), le nom possédé la terminaison ; <span class=\"de\">dein</span> ↔ <span class=\"de\">mein</span> dans les réponses.</li><li><span class=\"de\">Leos Bruder</span> (sans apostrophe) ou <span class=\"de\">der Bruder von Leo</span>.</li><li><span class=\"de\">im = in dem</span>, <span class=\"de\">am = an dem</span>, <span class=\"de\">vom = von dem</span> ; <span class=\"de\">aus</span> = provenance.</li></ul>",
     "debut": 13,
     "fin": 14,
     "partie": null,
     "sections": [
      {
       "titre": "Les trois cas",
       "page": 13
      },
      {
       "titre": "Les possessifs",
       "page": 13
      },
      {
       "titre": "Le possesseur : nom + s ou von + datif",
       "page": 14
      },
      {
       "titre": "Où ? D'où ? Où aller ?",
       "page": 14
      }
     ],
     "methodes": [
      {
       "num": "4.1",
       "titre": "Choisir le possessif",
       "page": 13
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-04.pdf"
    },
    {
     "n": 5,
     "titre": "Nombres, dates et temps",
     "intro": "Les nombres allemands se lisent « à l'envers » : l'unité avant la dizaine, le tout en un seul mot. Avec les nombres ordinaux, on dit ensuite la date ; avec <span class=\"de\">am</span> et <span class=\"de\">im</span>, on situe un anniversaire dans l'année.",
     "objectifs": "<ul><li>Compter et écrire un nombre en un mot ; lire une année.</li><li>Dire la date avec les jours, les mois et les ordinaux.</li><li>Choisir entre <span class=\"de\">am</span>, <span class=\"de\">im</span> et l'année seule.</li><li>Parler de sa naissance, de son âge et de son anniversaire.</li></ul>",
     "prerequis": "Chapitre 1.",
     "essentiel": "<ul><li>Unité + <span class=\"de\">und</span> + dizaine, en un mot : <span class=\"de\">vierundfünfzig</span> ; <span class=\"de\">einundzwanzig</span>, mais <span class=\"de\">eins</span> seul.</li><li><span class=\"de\">elf, zwölf, sechzehn, siebzehn, zwanzig, dreißig, sechzig, siebzig</span>.</li><li>Années : centaines jusqu'à 1999, milliers ensuite ; année seule, jamais <span class=\"de\">in 2006</span>.</li><li>Ordinaux : <span class=\"de\">-te</span> jusqu'à 19, <span class=\"de\">-ste</span> ensuite ; <span class=\"de\">erste, dritte, siebte, achte</span> ; <span class=\"de\">am ersten Juni</span>.</li><li><span class=\"de\">am</span> + date, <span class=\"de\">im</span> + mois ou saison ; jours, mois et saisons masculins.</li><li><span class=\"de\">geboren sein</span>, <span class=\"de\">gestorben sein</span>, <span class=\"de\">Ich bin 20 Jahre alt</span> ; <span class=\"de\">Er hat am 24. April Geburtstag</span>.</li></ul>",
     "debut": 15,
     "fin": 17,
     "partie": null,
     "sections": [
      {
       "titre": "Compter",
       "page": 15
      },
      {
       "titre": "Jours, mois, saisons",
       "page": 16
      },
      {
       "titre": "Les ordinaux et la date",
       "page": 16
      },
      {
       "titre": "Le temps qui passe",
       "page": 16
      },
      {
       "titre": "Naissance, âge, anniversaire",
       "page": 17
      }
     ],
     "methodes": [
      {
       "num": "5.1",
       "titre": "Écrire un nombre en lettres",
       "page": 15
      },
      {
       "num": "5.2",
       "titre": "Répondre à une question de date",
       "page": 16
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-05.pdf"
    },
    {
     "n": 6,
     "titre": "Saluer, se présenter, présenter quelqu'un",
     "intro": "Ce chapitre réunit les chapitres précédents dans la situation la plus fréquente : saluer, se présenter, puis parler d'un ami. Les phrases sont à apprendre telles quelles.",
     "objectifs": "<ul><li>Saluer et prendre congé selon le moment, le registre et la région.</li><li>Poser les questions de présentation et y répondre.</li><li>Interroger quelqu'un sur son meilleur ami et le présenter à l'écrit.</li></ul>",
     "prerequis": "Chapitres 2 à 5.",
     "essentiel": "<ul><li><span class=\"de\">Hallo / Guten Morgen / Guten Tag / Guten Abend / Gute Nacht</span> ; <span class=\"de\">Tschüss / Auf Wiedersehen</span> ; <span class=\"de\">Servus, Grüß Gott</span> (Bavière, Autriche), <span class=\"de\">Grüezi</span> (Suisse) ; <span class=\"de\">Freut mich!</span></li><li><span class=\"de\">Ich heiße…, ich komme aus…, ich wohne in…, ich bin in… geboren, ich bin… Jahre alt.</span></li><li>Métier sans article ; <span class=\"de\">meinen besten Freund</span> au COD.</li><li><span class=\"de\">Wie heißt dein bester Freund? Wann hat er Geburtstag? Was mag er?</span> ; vouvoiement <span class=\"de\">Ihr</span>.</li></ul>",
     "debut": 18,
     "fin": 20,
     "partie": null,
     "sections": [
      {
       "titre": "Saluer et prendre congé",
       "page": 18
      },
      {
       "titre": "Se présenter",
       "page": 18
      },
      {
       "titre": "Parler de son meilleur ami",
       "page": 19
      },
      {
       "titre": "Textes modèles",
       "page": 19
      }
     ],
     "methodes": [
      {
       "num": "6.1",
       "titre": "Présenter quelqu'un à l'écrit",
       "page": 20
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-06.pdf"
    },
    {
     "n": 7,
     "titre": "Comment ça va ? Humeurs et préférences",
     "intro": "Pour dire comment on va, l'allemand ne met pas la personne en sujet : il dit « ça va bien <em>à moi</em> ». Ce chapitre donne cette construction, le vocabulaire des sensations et des émotions, puis la façon de décrire une situation et de dire ce qu'on aime, en justifiant avec <span class=\"de\">weil</span>.",
     "objectifs": "<ul><li>Demander et dire comment on va, avec <span class=\"de\">mir, dir, ihm, ihr</span>.</li><li>Dire qu'on a faim, soif, chaud ou froid.</li><li>Décrire une humeur ou une émotion et la justifier avec <span class=\"de\">weil</span>.</li><li>Dire quel jour on aime ou non, et pourquoi.</li></ul>",
     "prerequis": "Chapitres 3 et 4.",
     "essentiel": "<ul><li><span class=\"de\">Wie geht es dir / ihm / ihr / Ihnen?</span> — <span class=\"de\">Es geht mir gut</span> = <span class=\"de\">Mir geht's gut</span> ; <span class=\"de\">ich → mir</span>, <span class=\"de\">du → dir</span>, <span class=\"de\">er → ihm</span>, <span class=\"de\">sie → ihr</span>.</li><li>De <span class=\"de\">wunderbar</span> à <span class=\"de\">schlecht</span> ; <span class=\"de\">soso</span>, <span class=\"de\">es geht</span> = moyen.</li><li><span class=\"de\">Hunger / Durst / Angst haben</span> ; <span class=\"de\">müde, krank, froh, glücklich, traurig, böse, begeistert, gestresst sein</span>.</li><li><span class=\"de\">Mir ist kalt / warm / heiß</span>, jamais <span class=\"de\">ich bin kalt</span>.</li><li><span class=\"de\">Ich mag den Samstag, weil ich keine Schule habe.</span> — <span class=\"de\">Ich mag den Montag nicht.</span></li></ul>",
     "debut": 21,
     "fin": 23,
     "partie": null,
     "sections": [
      {
       "titre": "Wie geht's?",
       "page": 21
      },
      {
       "titre": "Sensations : faim, soif, chaud, froid",
       "page": 21
      },
      {
       "titre": "Émotions et santé",
       "page": 22
      },
      {
       "titre": "Décrire une situation, dire ce qu'on aime",
       "page": 22
      }
     ],
     "methodes": [
      {
       "num": "7.1",
       "titre": "Décrire l'humeur de quelqu'un et la justifier",
       "page": 22
      }
     ],
     "pdf": "docs/allemand-le-colle/chapitre-07.pdf"
    },
    {
     "n": 8,
     "titre": "Vocabulaire thématique",
     "intro": "Le vocabulaire des séances qui n'a pas trouvé sa place dans les chapitres précédents, classé par thème. Chaque nom est donné avec son article et son pluriel.",
     "objectifs": "<ul><li>Parler de ses études, de son métier, des langues et de son entourage.</li><li>Situer une ville ou un pays ; nommer les pays voisins.</li><li>Connaître le vocabulaire de la vie quotidienne et des dates historiques.</li></ul>",
     "prerequis": "Chapitres 2 et 4.",
     "essentiel": "<ul><li><span class=\"de\">Ich studiere Elektronik</span> (sans article) ; langues avec majuscule et sans article.</li><li><span class=\"de\">X liegt im Osten von…, an der Donau, in der Nähe von…, an der Grenze zu…</span></li><li><span class=\"de\">die Schweiz</span>, <span class=\"de\">die Niederlande</span>, <span class=\"de\">die Tschechische Republik</span> : avec article.</li><li><span class=\"de\">der See</span> (lac) / <span class=\"de\">die See</span> (mer) ; une ville se reprend par <span class=\"de\">es</span>.</li></ul>",
     "debut": 24,
     "fin": 26,
     "partie": null,
     "sections": [
      {
       "titre": "Études, métiers, langues, entourage",
       "page": 24
      },
      {
       "titre": "Géographie : se situer",
       "page": 24
      },
      {
       "titre": "Vie quotidienne",
       "page": 25
      },
      {
       "titre": "Histoire : dates et vocabulaire",
       "page": 26
      }
     ],
     "methodes": [],
     "pdf": "docs/allemand-le-colle/chapitre-08.pdf"
    }
   ]
  }
 ]
};
