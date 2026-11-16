# Typographies libres candidates pour remplacer Geist / Geist Mono

Recherche du 2026-11-16 pour le ticket
`.scratch/identite-sans-monogramme/issues/02-typographies-libres-candidates.md`.

## Méthode et sources

- **Licence** : lue dans le fichier de licence du dépôt amont de chaque famille
  (`gh api repos/<dépôt>/license`, puis ligne de copyright et éventuelle
  *Reserved Font Name* lues dans le texte). Lien direct donné pour chaque
  candidat.
- **Graisses et axes** : `METADATA.pb` de chaque famille dans
  [google/fonts](https://github.com/google/fonts) (le dépôt qui alimente
  Google Fonts), ou README / table `fvar` du fichier amont quand la famille n'y
  figure pas.
- **Diacritiques français** : vérifiés sur le fichier de police lui-même
  (`fontTools`, table `cmap`) pour le jeu
  `àâäçéèêëîïôöùûüÿœæ ÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸŒÆ « » ’ … – — €`, plus l'espace
  insécable U+00A0 et l'espace fine insécable U+202F. **Tous les candidats
  retenus couvrent le jeu complet et U+00A0.** U+202F n'est présente que chez
  quelques-uns (signalé) ; le navigateur la prend alors dans une police de
  repli, à surveiller si le site en compose.
- **Fréquence d'usage** : rang de popularité Google Fonts, champ `popularity`
  de [fonts.google.com/metadata/fonts](https://fonts.google.com/metadata/fonts)
  (1 961 familles ; 1 = la plus servie). C'est une mesure du service Google
  Fonts uniquement : elle ignore l'auto-hébergement et les paquets npm. Pour
  repère : Inter 5, JetBrains Mono 42, IBM Plex Sans 51, Space Grotesk 58,
  **Geist 94, Geist Mono 132**, DM Mono 151. Le jugement « vu sur les sites de
  développeurs / rendus générés » qui l'accompagne est une **appréciation**,
  pas une mesure.
- **Ajustement *droit + arc*** : appréciation, à valider sur pièces.

### Ce que dit l'OFL sur l'usage en marque et l'auto-hébergement

Source : [OFL-FAQ](https://openfontlicense.org/ofl-faq/).

- Logo, marque : autorisé sans permission supplémentaire (FAQ 1.1 : « logos,
  posters, business cards… »). Le logo dessiné reste la propriété de son
  auteur (1.1.1).
- Webfont auto-hébergée : autorisée (2.1) ; c'est une *distribution*, donc
  le fichier de licence (OFL.txt avec copyright) doit accompagner les polices.
- WOFF2 : la conversion compte comme *modification* sauf si elle ne fait que
  compresser des données inchangées (2.2, 2.2.1). Un **sous-ensemble** est une
  modification. Ça ne pose problème que pour une famille à *Reserved Font
  Name* (RFN) : la version modifiée doit alors changer de nom. Dans la liste,
  seule **Red Hat** a une RFN.

## Les candidats

Classés par ajustement estimé au brief (rare + droit/arc + couple cohérent).

### 1. Overpass + Overpass Mono

- **Licence** : OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/RedHatOfficial/Overpass/blob/master/OFL.txt)
  (« Copyright 2021 The Overpass Project Authors »).
- **Lien** : <https://github.com/RedHatOfficial/Overpass> (release v3.0.5).
- **Axes** : Overpass `wght` 100–900 (+ italiques) ; Overpass Mono `wght`
  300–700.
- **Caractère** : dérivée de la *Highway Gothic* des panneaux routiers
  américains : fûts droits, courbes à rayon quasi constant, terminaisons
  coupées net. La plus littéralement *droit + arc* de la liste.
- **Usage** : rang 150 (sans) et 588 (mono). Le sans est assez servi
  (sites institutionnels, Red Hat l'a longtemps utilisé), mais quasi absent
  des portfolios de développeurs et des rendus générés ; le mono est rare.
- **Note** : couvre U+202F. Association historique à Red Hat, mais aucune
  RFN, aucune restriction.

### 2. Sono (sans et mono dans un seul fichier)

- **Licence** : OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/sursly/sono/blob/master/OFL.txt)
  (« Copyright 2020 The Sono Project Authors »).
- **Lien** : <https://github.com/sursly/sono> (Tyler Finck).
- **Axes** : `wght` 200–800, `MONO` 0–1 (0 = proportionnel, 1 = chasse fixe).
- **Caractère** : monospace adoucie dont l'axe `MONO` donne une version
  proportionnelle : une seule famille, un seul dessin, deux rôles. Formes
  rondes et ouvertes, un peu « machine à écrire moderne ».
- **Usage** : rang 1 253. Très rarement vue.
- **Note** : un seul woff2 pour les deux rôles. Le sans reste marqué par son
  origine monospace (largeurs peu contrastées), ce qui peut plaire ou non.

### 3. Iosevka Charon + Iosevka Charon Mono

- **Licence** : polices sous OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/jul-sh/iosevka-charon/blob/main/OFL.txt)
  (« Copyright 2025, the Iosevka Project authors »). Attention : le fichier
  `LICENSE` du même dépôt est MIT, mais il couvre les scripts de build ; les
  polices relèvent de l'OFL (c'est aussi ce que déclare Google Fonts,
  `ofl/iosevkacharon/METADATA.pb`). Amont Iosevka : OFL 1.1,
  [LICENSE.md](https://github.com/be5invis/Iosevka/blob/main/LICENSE.md).
- **Lien** : <https://github.com/jul-sh/iosevka-charon> (release v34.801,
  archive `iosevka-charon-webfonts.zip` fournie).
- **Graisses** : statiques 300, 400, 500, 700 + italiques (pas de variable).
- **Caractère** : Iosevka est construite paramétriquement, segments droits et
  arcs ; Charon en est la version *quasi proportionnelle* pour l'écriture
  technique, appariée à sa jumelle mono. Étroite, dense, très ingénieure.
- **Usage** : rang 1 334 (sans) et 1 657 (mono), entrée sur Google Fonts en
  février 2026. Iosevka est connue des terminaux, presque jamais vue sur des
  sites.
- **Note** : couvre U+202F. Couverture linguistique très large (fichiers plus
  lourds : sous-ensemble à prévoir).

### 4. Recursive (sans et mono dans un seul fichier)

- **Licence** : OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/arrowtype/recursive/blob/main/OFL.txt)
  (« Copyright 2020 The Recursive Project Authors »).
- **Lien** : <https://github.com/arrowtype/recursive> (Arrow Type).
- **Axes** : `wght` 300–1000, `MONO` 0–1, `CASL` 0–1, `slnt` −15–0,
  `CRSV` 0–1.
- **Caractère** : à `CASL 0` (« Linear »), une grotesque technique nette ;
  l'axe `MONO` donne le mono sans changer de dessin. Les axes casual/cursive
  sont à laisser à zéro pour rester dans *droit + arc*.
- **Usage** : rang 806. Connue des typographes, rare en portfolio.
- **Note** : fichier variable lourd (5 axes) ; on peut l'instancier
  (`fonttools varLib.instancer`) pour figer `CASL`/`CRSV`, ce qui est une
  modification permise (pas de RFN).

### 5. B612 + B612 Mono

- **Licence** : OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/polarsys/b612/blob/master/OFL.txt)
  (« Copyright 2012 The B612 Project Authors »).
- **Lien** : <https://github.com/polarsys/b612> (Airbus / Intactile, pour les
  écrans de cockpit).
- **Graisses** : 400 et 700 seulement (+ italiques), statiques.
- **Caractère** : dessinée pour la lisibilité sur instruments d'avion :
  formes ouvertes, contreformes généreuses, un air technique sans être
  « tech startup ». Très française d'origine (Toulouse).
- **Usage** : rangs 778 / 727. Rare.
- **Note** : seulement deux graisses, c'est la vraie limite pour une
  hiérarchie typographique.

### 6. M PLUS 1 + M PLUS 1 Code

- **Licence** : OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/coz-m/MPLUS_FONTS/blob/master/OFL.txt)
  (« Copyright 2021 The M+ FONTS Project Authors »).
- **Lien** : <https://github.com/coz-m/MPLUS_FONTS> (Coji Morishita).
- **Axes** : M PLUS 1 `wght` 100–900 ; M PLUS 1 Code `wght` 100–700.
- **Caractère** : gothique japonaise géométrique ; le latin est fait de fûts
  droits et de courbes régulières. Lien naturel avec la palette aux noms
  japonais (kasumi, washi, hamon, shu).
- **Usage** : rangs 359 / 1 104 ; servie surtout pour le japonais, presque
  jamais vue comme police latine de portfolio.
- **Note** : les fichiers complets embarquent le japonais (lourds) : un
  sous-ensemble latin est indispensable (autorisé, pas de RFN).

### 7. Martian Grotesk + Martian Mono

- **Licence** : OFL 1.1, sans RFN —
  [grotesk/OFL.txt](https://github.com/evilmartians/grotesk/blob/main/OFL.txt),
  [mono/OFL.txt](https://github.com/evilmartians/mono/blob/main/OFL.txt).
- **Lien** : <https://github.com/evilmartians/grotesk>,
  <https://github.com/evilmartians/mono> (woff2 fournis en release).
- **Axes** : Grotesk `wght` 100–1000, `wdth` 75–200 (lu dans le fichier
  variable) ; Mono `wght` 100–800, `wdth` 75–112,5.
- **Caractère** : grotesque « légèrement brutaliste », appariement conçu
  d'origine ; chasse variable utile pour les labels.
- **Usage** : Mono rang 556 ; Grotesk absente de Google Fonts. **Mise en
  garde** : Evil Martians vise explicitement les startups d'outils
  développeurs et d'IA (README), et Martian Mono circule dans ce milieu. Risque
  de retomber dans le registre qu'on fuit.

### 8. Atkinson Hyperlegible Next + Atkinson Hyperlegible Mono

- **Licence** : OFL 1.1, sans RFN —
  [Next/OFL.txt](https://github.com/googlefonts/atkinson-hyperlegible-next/blob/main/OFL.txt),
  [Mono/OFL.txt](https://github.com/googlefonts/atkinson-hyperlegible-next-mono/blob/main/OFL.txt).
- **Lien** : <https://github.com/googlefonts/atkinson-hyperlegible-next>
  (Braille Institute).
- **Axes** : `wght` 200–800 pour les deux.
- **Caractère** : conçue pour les malvoyants, glyphes très différenciés
  (queues, empattements ponctuels) : personnalité nette, mais ces détails
  sortent de la règle *droit + arc*.
- **Usage** : rangs 449 / 897. Associée à l'accessibilité, peu aux portfolios.

### 9. Chivo + Chivo Mono

- **Licence** : OFL 1.1, sans RFN —
  [OFL.txt](https://github.com/Omnibus-Type/Chivo/blob/master/OFL.txt).
- **Lien** : <https://github.com/Omnibus-Type/Chivo> (Omnibus-Type).
- **Axes** : `wght` 100–900 pour les deux.
- **Caractère** : grotesque néo-grotesque robuste, mono au dessin « papier
  administratif » assez singulier.
- **Usage** : rangs 214 / 614. Le sans est commun dans les gabarits
  éditoriaux ; le mono plus rare.

### 10. Spline Sans + Spline Sans Mono

- **Licence** : OFL 1.1, sans RFN —
  [SplineSans/OFL.txt](https://github.com/SorkinType/SplineSans/blob/main/OFL.txt),
  [SplineSansMono/OFL.txt](https://github.com/SorkinType/SplineSansMono/blob/main/OFL.txt).
- **Lien** : <https://github.com/SorkinType/SplineSans> (Sorkin Type).
- **Axes** : `wght` 300–700 pour les deux.
- **Caractère** : grotesque contemporaine à terminaisons horizontales,
  sobre ; proche par l'esprit de ce qu'on remplace.
- **Usage** : rangs 564 / 570. Peu vue, mais **le risque est la ressemblance
  avec Geist** plutôt que la fréquence.
- **Note** : le sans couvre U+202F, pas le mono.

### 11. League Spartan + League Mono

- **Licence** : OFL 1.1, sans RFN —
  [Spartan/OFL.txt](https://github.com/theleagueof/league-spartan/blob/master/OFL.txt),
  [Mono/OFL.md](https://github.com/theleagueof/league-mono/blob/master/OFL.md).
- **Lien** : <https://github.com/theleagueof/league-spartan>,
  <https://github.com/theleagueof/league-mono>.
- **Axes** : Spartan `wght` 100–900 ; League Mono `wght` 100–800 et largeur
  50–200 (README).
- **Caractère** : géométrique à la Futura, cercles et droites purs ;
  League Mono à largeur variable. Le plus « compas et règle » après Overpass.
- **Usage** : Spartan rang 189 (fréquente dans les gabarits Canva / landing
  pages) ; League Mono hors Google Fonts, rare.
- **Note** : appariement de même fonderie, pas de même dessin.

### 12. Red Hat Text + Red Hat Mono

- **Licence** : OFL 1.1 **avec Reserved Font Name « Red Hat »** —
  [LICENSE](https://github.com/RedHatOfficial/RedHatFont/blob/master/LICENSE).
- **Lien** : <https://github.com/RedHatOfficial/RedHatFont> (MCKL).
- **Axes** : `wght` 300–700 pour les deux (+ Red Hat Display pour les titres).
- **Caractère** : grotesque géométrique chaleureuse, couple très cohérent.
- **Usage** : rangs 247 / 621. Identité Red Hat très reconnaissable.
- **Restriction** : la RFN interdit d'appeler « Red Hat » une version
  modifiée ; un woff2 sous-ensemble ou instancié est une modification (FAQ
  2.2), donc il faudrait renommer la famille dans le fichier. L'usage en logo
  reste permis, mais l'association de marque est forte. **À éviter.**

## Écartés

| Famille | Raison | Source |
| --- | --- | --- |
| Ubuntu Sans + Ubuntu Sans Mono | **Ubuntu Font Licence 1.0, pas l'OFL** ; ne confère aucun droit de marque ; hors critère « OFL ou équivalent sans ambiguïté » | [LICENCE.txt](https://github.com/canonical/Ubuntu-Sans-fonts/blob/main/LICENCE.txt) |
| Reddit Sans + Reddit Mono | OFL sans RFN, mais police de marque de Reddit, Inc. : association trop forte | [OFL.txt](https://github.com/reddit/redditsans/blob/main/OFL.txt) |
| Inter, JetBrains Mono, IBM Plex, Space Grotesk / Space Mono, DM Mono | OFL, mais parmi les plus servies (rangs 5 à 160) et typiques des rendus générés | rangs Google Fonts ci-dessus |
| Fragment Mono | OFL, mono seule (dérivée d'Helvetica) ; à garder seulement si on choisit un sans à part | [OFL.txt](https://github.com/weiweihuanghuang/fragment-mono/blob/main/OFL.txt) |

## Constats annexes

- Le `geist.woff2` et le `geist-mono.woff2` actuels (`public/fonts/`)
  **n'ont pas le glyphe Ÿ** (sous-ensemble). Sans conséquence pratique (Ÿ est
  rarissime), mais à éviter dans le prochain sous-ensemble.
- `public/fonts/` ne contient pas de fichier de licence. L'OFL demande que
  la police distribuée soit accompagnée de son copyright et de sa licence
  (OFL-FAQ 1.9 et 2.1) : la nouvelle famille devrait arriver avec son
  `OFL.txt`.

## Proposition de présélection pour les pièces

Pour réagir sur pièces (ticket 03) : **Overpass**, **Sono**, **Iosevka
Charon** et **M PLUS 1**, plus **B612** si deux graisses suffisent. Ce sont
les quatre ou cinq qui combinent rareté, couple sans + mono cohérent et
géométrie *droit + arc*.
