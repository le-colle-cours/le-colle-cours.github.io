#!/usr/bin/env python3
"""Génère les données du site Le Collé à partir des livres compilés.

Entrées : les .tex finaux (dossier FINAL) et les .aux/.met de compilation (dossier V2/<n>/).
Sorties : site/data/livres.js, site/docs/<livre>.pdf, site/docs/<livre>/chapitre-NN.pdf, site/docs/<livre>/fiche-revision.pdf.
"""
import json, re, shutil, sys
from pathlib import Path
import pypdf

FINAL = Path('/home/claude/final')
V2 = Path('/home/claude/v2')
FICHES = Path('/home/claude/fiches/out')
SITE = Path(sys.argv[1] if len(sys.argv) > 1 else '/home/claude/site')

MATIERES = [
    ('electricite', 'Électricité et électronique', "Circuits linéaires, mesure et puissance électrique, travaux pratiques de courants faibles."),
    ('numerique', 'Numérique et informatique', "Logique, circuits numériques, architecture des processeurs et conception d'algorithmes."),
    ('physique', 'Physique', "Électromagnétisme, propagation dans les lignes et physique des matériaux."),
    ('maths', 'Mathématiques', "Intégration et analyse de Fourier, analyse complexe, probabilités."),
    ('langues', 'Langues', "Allemand, niveau débutant."),
]
LIVRES = [
    (1, 'methodes-analyse-circuits', 'electricite', "Méthodes d'analyse des circuits",
     "Signaux, dipôles, lois de Kirchhoff et théorèmes généraux, transformée de Laplace et fonctions de transfert, quadripôles."),
    (2, 'metrologie-circuits-puissance', 'electricite', 'Métrologie et circuits de puissance',
     "Unités et incertitudes, instruments et mesures électriques, puissance en monophasé et systèmes triphasés."),
    (16, 'tp-courants-faibles', 'electricite', "TP de circuits (courants faibles) : consignes et préparations",
     "Consignes de la salle de TP et mode d'emploi des appareils (GBF, oscilloscope, multimètre), prise en main de PLECS et PSpice, puis pour chaque TP (simulation RLC, instrumentation et ordre 1, bobine réelle) : ce qu'il faut préparer, la théorie, les réglages et les résultats attendus chiffrés."),
    ('4a', 'logique-combinatoire', 'numerique', 'Logique combinatoire',
     "Conception des systèmes logiques, partie I : algèbre de Boole, tables de vérité, Karnaugh, états indéterminés ; codage et numération binaire (complément à 2, virgule fixe et flottante, codes)."),
    ('4b', 'logique-sequentielle', 'numerique', 'Logique séquentielle',
     "Conception des systèmes logiques, partie II : asynchrone et synchrone, aléas, machines de Moore et de Mealy, diagrammes d'états, synthèse et initialisation des machines à états."),
    ('4c', 'fonctions-logiques', 'numerique', 'Fonctions logiques',
     "Conception des systèmes logiques, partie III : logique CMOS, circuits combinatoires, bascules et registres, compteurs, mémoires, composants programmables, et le cours appliqué au BE (armoire à vidéoprojecteurs)."),
    (14, 'be-logique-armoire', 'numerique', "BE de logique : l'armoire à vidéoprojecteurs",
     "Compte rendu illustré des séances 1 et 2 (MA7, MCV), préparation des séances 3 à 6 (MD20, MA20, MCC, chef d'orchestre) et brouillon de la fiche de synthèse."),
    (15, 'be-eros', 'numerique', "BE EROS : programmer un processeur en assembleur",
     "Carnet de bureau d'études : langage machine et assembleur, micro-instructions, modes d'adressage, premiers programmes, puis entrées/sorties et pilotage de PINGOO. Programmes vérifiés sur simulateur."),
    (10, 'architecture-assembleur', 'numerique', 'Architecture et programmation en assembleur',
     "Codage, architecture de Von Neumann, processeur EROS et micro-instructions, modes d'adressage, mémoire et décodage, interfaçage, interruptions."),
    (3, 'raffinage-algorithme', 'numerique', "Du raffinage à l'algorithme",
     "Analyse descendante, structures de contrôle, variables, sous-programmes et une étude de cas complète."),
    (8, 'electromagnetisme', 'physique', 'Électromagnétisme',
     "Outils vectoriels, électrostatique, magnétostatique, induction, inductances, équations de Maxwell, ondes et milieux matériels."),
    (9, 'propagation-lignes', 'physique', 'Propagation dans les lignes',
     "Modèle RLCG, propagation, ligne chargée et adaptation, paramètres S, réflectométrie, couplage et diaphonie."),
    (5, 'physique-des-materiaux', 'physique', 'Physique des matériaux',
     "Équations de Maxwell dans la matière, diélectriques en régime statique et variable, sphères polarisée et aimantée, matériaux magnétiques."),
    (11, 'integration', 'maths', "Intégration",
     "Espaces normés, intégrale de Lebesgue, séries et transformée de Fourier, convolution, distributions et échantillonnage."),
    (12, 'analyse-complexe', 'maths', "Analyse complexe",
     "Fonctions holomorphes, intégration complexe et théorème des résidus, transformée de Laplace, transformée en Z."),
    (13, 'probabilites', 'maths', "Probabilités",
     "Espaces de probabilité, variables et vecteurs aléatoires, lois usuelles, fonction caractéristique, théorèmes limites."),
    (7, 'allemand-le-colle', 'langues', 'Allemand',
     "Lire et écrire, noms et verbes, phrase et négation, cas et lieux, nombres et dates, se présenter, humeurs et préférences, vocabulaire, lexique complet allemand–français ; tout est traduit."),
]

# ------------------------------------------------------------------ lecture LaTeX

def arg(s, i):
    """Argument entre accolades commençant à s[i] (après espaces) ; renvoie (contenu, indice après)."""
    while s[i] in ' \n%':
        if s[i] == '%':
            i = s.index('\n', i)
        i += 1
    if s[i] == '[':  # argument optionnel ignoré
        d = 0
        while True:
            d += s[i] == '['; d -= s[i] == ']'; i += 1
            if d == 0: break
        return arg(s, i)
    assert s[i] == '{', s[i:i + 40]
    d, j = 0, i
    while True:
        c = s[j]
        if c == '\\': j += 2; continue
        d += c == '{'; d -= c == '}'; j += 1
        if d == 0: return s[i + 1:j - 1], j


def sans_commentaires(s):
    return re.sub(r'(?<!\\)%.*', '', s)


def labels(aux):
    out = {}
    for m in re.finditer(r'\\newlabel\{([^}]*)\}\{\{([^}]*)\}', aux.read_text(errors='ignore')):
        out[m.group(1)] = m.group(2)
    return out

# ------------------------------------------------------------------ LaTeX -> HTML (texte), maths laissées à KaTeX

MATH = re.compile(r'(\\\[.*?\\\]|\$\$.*?\$\$|(?<!\\)\$.*?(?<!\\)\$|\\begin\{(align\*?|equation\*?|gather\*?)\}.*?\\end\{\2\})', re.S)
SIMPLES = {'emph': 'em', 'textit': 'em', 'textbf': 'strong', 'kw': 'strong', 'texttt': 'code', 'underline': 'u',
           'textsuperscript': 'sup', 'textsc': 'span class="sc"', 'textsf': 'span', 'textrm': 'span', 'mbox': 'span',
           'de': 'span class="de"', 'fr': 'em class="fr"', 'entete': 'span', 'ins': 'code', 'reg': 'span'}
REMPL = [(r'\ldots', '…'), (r'\dots', '…'), (r'\S', '§'), (r'\textcopyright', '©'), (r'\quad', ' '), (r'\qquad', ' '),
         (r'\,', '\u202f'), (r'\ ', ' '), (r'\enspace', ' '), (r'\HP', '[HP]'), (r'\&', '&amp;'), (r'\%', '%'),
         (r'\leavevmode', ''), (r'\noindent', ''), (r'\smallskip', ''), (r'\medskip', ''), (r'\par', ' '), (r'\hfill', ' '),
         (r'\og', '«'), (r'\fg', '»'), (r'\-', ''), (r'\newline', '<br>'), (r'\xor', '⊕'), (r'\'', "'")]


def deplier_df(s):
    """\\df{allemand}{traduction} -> \\de{allemand}\\ \\fr{traduction} (livre d'allemand)."""
    def arg(i):
        d, j = 1, i + 1
        while d and j < len(s):
            d += {'{': 1, '}': -1}.get(s[j], 0); j += 1
        return s[i + 1:j - 1], j
    while True:
        k = s.find('\\df{')
        if k < 0:
            return s
        a, j = arg(k + 3)
        b, j = arg(j) if j < len(s) and s[j] == '{' else ('', j)
        s = s[:k] + '\\de{' + a + '}' + (' \\fr{' + b + '}' if b else '') + s[j:]


def texte(s, L, avertir):
    s = deplier_df(sans_commentaires(s))
    morceaux, pos, out = [], 0, []
    for m in MATH.finditer(s):
        out.append(('t', s[pos:m.start()])); out.append(('m', m.group(0))); pos = m.end()
    out.append(('t', s[pos:]))
    html = []
    for k, v in out:
        if k == 'm':
            v = v.strip()
            m = re.match(r'\\begin\{(align|equation|gather)\*?\}(.*)\\end\{\1\*?\}', v, re.S)
            if m:
                env = 'aligned' if m.group(1) == 'align' else ('gathered' if m.group(1) == 'gather' else '')
                v = '\\[' + (f'\\begin{{{env}}}{m.group(2)}\\end{{{env}}}' if env else m.group(2)) + '\\]'
            v = re.sub(r'\\ref\{([^}]*)\}', lambda m: L.get(m.group(1), '?'), v)
            v = re.sub(r'\\label\{[^}]*\}|\\qedhere|\\nonumber', '', v)
            html.append(v.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))
        else:
            html.append(texte_seul(v, L, avertir))
    return ''.join(html).strip()


def texte_seul(s, L, avertir):
    s = s.replace('<', '&lt;').replace('>', '&gt;').replace('{}', '')
    s = re.sub(r'\\(?:ref|eqref)\{([^}]*)\}', lambda m: L.get(m.group(1), ''), s)
    s = re.sub(r'\\(?:label|index|hypertarget|phantomsection|vspace\*?|hspace\*?)\{[^}]*\}(\{\})?', '', s)
    s = re.sub(r'\\(?:color|textcolor)\{[^}]*\}', '', s)
    s = re.sub(r'\\pr\{', r'\\prx{', s)
    for _ in range(6):  # commandes imbriquées : de l'intérieur vers l'extérieur
        avant = s
        s = re.sub(r'\\prx\{([^{}]*)\}', r'<span class="pr">«&#8239;\1&#8239;»</span>', s)
        for c, t in SIMPLES.items():
            fin = t.split()[0]
            s = re.sub(r'\\' + c + r'\{([^{}]*)\}', lambda m, t=t, fin=fin: f'<{t}>{m.group(1)}</{fin}>', s)
        s = re.sub(r'\{\\(?:bfseries|sffamily|small|footnotesize|itshape|scriptsize)\s*([^{}]*)\}', r'\1', s)
        if s == avant: break
    for a, b in REMPL:
        s = s.replace(a, b)
    s = s.replace('\\\\', '<br>').replace('---', '—').replace('--', '–').replace('~', '\u00a0')
    s = re.sub(r'\\(bfseries|sffamily|small|footnotesize|itshape|scriptsize|centering|raggedright)\b\s*', '', s)
    s = re.sub(r'(?<!\\)\{|(?<!\\)\}', '', s)
    s = s.replace('\\{', '{').replace('\\}', '}').replace('\\$', '$').replace('\\_', '_').replace('\\#', '#')
    if re.search(r'\\[A-Za-z]', s):
        avertir(re.findall(r'\\[A-Za-z]+', s))
    return re.sub(r'\s+', ' ', s)


def liste(s, L, avertir):
    """Bloc LaTeX (itemize / enumerate / texte / tableau) -> HTML."""
    s = sans_commentaires(s).strip()
    s = re.sub(r'\[leftmargin=[^\]]*\]', '', s)
    if '\\begin{tabular}' in s or '\\begin{tableau}' in s:
        return tableau(s, L, avertir)
    def items(env, bloc):
        parts = re.split(r'\\item\b', bloc)
        tete, its = parts[0], parts[1:]
        h = (f'<p>{texte(tete, L, avertir)}</p>' if tete.strip() else '')
        tag = 'ol' if env == 'enumerate' else 'ul'
        return h + f'<{tag}>' + ''.join(f'<li>{texte(i, L, avertir)}</li>' for i in its) + f'</{tag}>'
    m = re.search(r'\\begin\{(itemize|enumerate)\}(.*)\\end\{\1\}', s, re.S)
    if m:
        avant, apres = s[:m.start()], s[m.end():]
        interne = m.group(2)
        if re.search(r'\\begin\{(itemize|enumerate)\}', interne):  # listes imbriquées : aplatir
            interne = re.sub(r'\\(begin|end)\{(itemize|enumerate)\}', '', interne)
        return ''.join([f'<p>{texte(avant, L, avertir)}</p>' if avant.strip() else '', items(m.group(1), interne),
                        f'<p>{texte(apres, L, avertir)}</p>' if apres.strip() else ''])
    return f'<p>{texte(s, L, avertir)}</p>'


def tableau(s, L, avertir):
    m = re.search(r'\\begin\{(tabular|tableau)\}(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})?(.*?)\\end\{\1\}', s, re.S)
    corps = m.group(2)
    corps = re.sub(r'\\(toprule|midrule|bottomrule|hline)', '', corps)
    lignes = [l for l in re.split(r'\\\\', corps) if l.strip()]
    rows = []
    for l in lignes:
        cells = re.split(r'(?<!\\)&', l)
        rows.append('<tr>' + ''.join(f'<td>{texte(c, L, avertir)}</td>' for c in cells) + '</tr>')
    avant = s[:m.start()]
    return (f'<p>{texte(avant, L, avertir)}</p>' if avant.strip() else '') + '<div class="tab-wrap"><table class="tab">' + ''.join(rows) + '</table></div>'

# ------------------------------------------------------------------ extraction d'un livre

def extraire(num, ident):
    tex = (FINAL / f'{ident}.tex').read_text()
    corps = tex[tex.index('\\begin{document}'):]
    L = labels(V2 / str(num) / f'{ident}.aux')
    met = (V2 / str(num) / f'{ident}.met').read_text()
    pdf = pypdf.PdfReader(FINAL / f'{ident}.pdf')
    total = len(pdf.pages)
    # signets : chapitres (niveau 0) et sections (niveau 1)
    plat = []
    def walk(o, niv):
        for x in o:
            if isinstance(x, list): walk(x, niv + 1)
            else: plat.append((niv, x.title, pdf.get_destination_page_number(x) + 1))
    walk(pdf.outline, 0)
    nsec = len(re.findall(r'\n\\section\{', corps))
    nivc = next(n for n in range(4) if sum(1 for e in plat if e[0] == n) == nsec)
    chap_sig, partie = [], None
    for niv, t, p in plat:
        if niv == nivc - 1:
            partie = t
            if chap_sig and 'borne' not in chap_sig[-1]: chap_sig[-1]['borne'] = p - 1
        elif niv == nivc:
            if chap_sig and 'borne' not in chap_sig[-1]: chap_sig[-1]['borne'] = p - 1
            chap_sig.append({'titre': t, 'page': p, 'partie': partie, 'sections': []})
        elif niv == nivc + 1 and chap_sig: chap_sig[-1]['sections'].append({'titre': t, 'page': p})
    # décalage page imprimée -> page physique (chiffres arabes à partir du chapitre 1)
    p1 = int(next(v for k, v in re.findall(r'\\newlabel\{([^}]*)\}\{\{[^}]*\}\{(\d+)\}', (V2 / str(num) / f'{ident}.aux').read_text(errors='ignore')) if k.startswith('sec:')))
    decal = chap_sig[0]['page'] - p1
    meths = {}
    for n, t, p in re.findall(r'\\makebox \[[^\]]*\]\[l\]\{([\d.]+)\}(.*?)\}\{(\d+)\}\{', met):
        t = t.replace('\\intop \\ilimits@', '\\int').replace('\\protect ', '')
        meths.setdefault(n.split('.')[0], []).append({'num': n, 'titre': t, 'page': int(p) + decal})
    blocs = re.split(r'\n\\section\{', corps)[1:]
    assert len(blocs) == len(chap_sig), (ident, len(blocs), len(chap_sig))
    alertes = []
    av = lambda x: alertes.append(x)
    chapitres = []
    for i, (b, sig) in enumerate(zip(blocs, chap_sig)):
        titre, j = arg('{' + b, 0)
        titre_html = texte(titre, L, av)
        reste = b[j - 1:]
        fin_intro = min([k for k in (reste.find('\\ouverture'), reste.find('\\subsection')) if k >= 0] or [0])
        intro = re.sub(r'\\label\{[^}]*\}', '', reste[:fin_intro]).strip()
        objectifs = prerequis = ''
        k = reste.find('\\ouverture')
        if k >= 0:
            a1, k2 = arg(reste, k + len('\\ouverture'))
            a2, _ = arg(reste, k2)
            objectifs, prerequis = liste(a1, L, av), texte(a2, L, av)
        ess = re.search(r'\\begin\{essentiel\}(.*?)\\end\{essentiel\}', reste, re.S)
        debut = sig['page']
        fin = sig.get('borne', total)
        chapitres.append({
            'n': i + 1, 'titre': titre_html, 'intro': texte(intro, L, av) if intro else '',
            'objectifs': objectifs, 'prerequis': prerequis,
            'essentiel': liste(ess.group(1), L, av) if ess else '',
            'debut': debut, 'fin': fin, 'partie': sig['partie'],
            'sections': [{'titre': texte_seul(s['titre'], L, av), 'page': s['page']} for s in sig['sections']],
            'methodes': [{'num': m['num'], 'titre': texte(m['titre'], L, av), 'page': m['page']} for m in meths.get(str(i + 1), [])],
        })
    return chapitres, total, alertes


def main():
    (SITE / 'docs').mkdir(parents=True, exist_ok=True)
    (SITE / 'data').mkdir(parents=True, exist_ok=True)
    livres = []
    for num, ident, mat, titre, desc in LIVRES:
        chapitres, total, alertes = extraire(num, ident)
        if alertes:
            print(ident, 'commandes non converties :', sorted({c for a in alertes for c in a}))
        shutil.copy(FINAL / f'{ident}.pdf', SITE / 'docs' / f'{ident}.pdf')
        d = SITE / 'docs' / ident
        if d.exists(): shutil.rmtree(d)
        d.mkdir()
        src = pypdf.PdfReader(FINAL / f'{ident}.pdf')
        for c in chapitres:
            w = pypdf.PdfWriter()
            for p in range(c['debut'] - 1, c['fin']):
                w.add_page(src.pages[p])
            w.add_metadata({'/Title': f"{titre} — chapitre {c['n']}"})
            with open(d / f"chapitre-{c['n']:02d}.pdf", 'wb') as f:
                w.write(f)
            c['pdf'] = f"docs/{ident}/chapitre-{c['n']:02d}.pdf"
        fiche = None
        if (FICHES / f'{ident}.pdf').exists():
            shutil.copy(FICHES / f'{ident}.pdf', d / 'fiche-revision.pdf')
            fiche = f'docs/{ident}/fiche-revision.pdf'
        livres.append({'id': ident, 'matiere': mat, 'titre': titre, 'description': desc, 'pages': total,
                       'pdf': f'docs/{ident}.pdf', 'fiche': fiche, 'chapitres': chapitres})
        print(f'{ident}: {len(chapitres)} chapitres, {total} pages')
    donnees = {'matieres': [{'id': a, 'titre': b, 'description': c} for a, b, c in MATIERES], 'livres': livres}
    (SITE / 'data' / 'livres.js').write_text(
        '/* Généré par outils/generer_site.py — ne pas modifier à la main. */\n'
        'window.LC = ' + json.dumps(donnees, ensure_ascii=False, indent=1) + ';\n')


if __name__ == '__main__':
    main()
