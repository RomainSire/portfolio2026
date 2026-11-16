# Spec : une identité sans le monogramme

Status: ready-for-agent

Ce que la carte « une identité sans le monogramme » a décidé, prêt à
implémenter. La spec dit **quoi** changer et où ; le **pourquoi** reste dans
chaque ticket résolu, auquel elle renvoie, et dans l'ADR-0006.

Avant d'implémenter, lire `CONTEXT.md` et les ADR 0001, 0003, 0004 et 0006.

## Point de départ

Le **retrait provisoire** (`.scratch/retrait-monogramme/issues/01-retrait-provisoire.md`)
est fait avant cette spec, ou en même temps : `<Monogram>`, les SVG du signe,
le script du tracé et ses styles ont disparu, le favicon et l'image OG sont
des versions typographiques provisoires en Geist Mono, l'étude de cas du
portfolio est corrigée. La spec part de cet état et remplace les pièces
provisoires par les définitives.

## 1. Typographie : Overpass + Overpass Mono

Décision : [Choix de la typographie](issues/03-choix-de-la-typographie.md) ;
candidats et licences : [Typographies libres candidates](issues/02-typographies-libres-candidates.md).

- Overpass remplace Geist (`--sans`), Overpass Mono remplace Geist Mono
  (`--mono`). Woff2 variables auto-hébergés dans `public/fonts/`,
  `@font-face` de `src/styles/global.css` repris. Les woff2 Geist sont
  supprimés.
- Plages de graisse servies : sans 400–600 (le nom du header est en 600),
  mono 400–500. L'instanciation et le sous-ensemble sont permis (OFL 1.1,
  pas de nom réservé).
- Sous-ensemble latin qui **garde Ÿ et U+202F** (espace fine insécable).
- Livrer `public/fonts/OFL.txt` avec les woff2 : l'OFL l'exige, et le
  dossier n'en a pas aujourd'hui.
- Prévoir la largeur d'Overpass Mono : la pastille et les puces de stack
  prennent plus de place qu'en Geist Mono. Vérifier à 320 px de large.
- Le commentaire de `.shu` dans `global.css` cite le point carré de Geist :
  le reformuler pour Overpass (le point reste dessiné, pas un glyphe) et
  retirer la mention du monogramme.

## 2. Règle des labels : la mono tient les données

Décision : [Diagnostic : qu'est-ce qui fait « AI made » ?](issues/01-diagnostic-du-fait-ia.md)
(élément B), validée sur pièce dans [Choix de la typographie](issues/03-choix-de-la-typographie.md).

Le partage mono/sans devient : **le monospace tient les données, le sans
tient le discours.**

- **Restent en mono** : la fiche d'étude de cas (organisation, secteur,
  période, nature), les dates, la stack, les numéros d'index (« 01 »), la
  date de mise à jour des pages légales, la pastille de disponibilité.
- **Passent au sans** : titres de section (« Travaux », « Rôle », « La
  contrainte », « Décisions »…), navigation, fil d'Ariane, intitulés.
- **Plus de capitales espacées** nulle part : la mono se compose en bas de
  casse, sans interlettrage.

Valeurs, fixées d'après le prototype :

| Emploi | Famille | Corps | Graisse | Casse / interlettrage |
| --- | --- | --- | --- | --- |
| donnée (`.chrome`) | mono | 12 px (`--t-chrome: 0.75rem`) | 400 | bas de casse, 0 |
| titre de section, intitulé, fil d'Ariane | sans | 13 px (`--t-caption`) | 500 | 0 |
| navigation | sans | 13 px (`--t-caption`) | 400 | 0 |

- `.chrome` perd `text-transform: uppercase` et `letter-spacing`.
- `--tr-caps` est supprimé de `tokens.css`, ainsi que la ligne qui le
  décrit dans le commentaire d'interlettrage.
- Les 44 emplois actuels de `.chrome` (accueil, À propos, contact, étude de
  cas, pages légales, `Header`, `Footer`, `WorkRow`, `Absent`, 404) sont
  triés un à un : donnée, ils gardent `.chrome` ; sinon, ils passent à une
  classe sans (par exemple `.label`), à créer dans `global.css`.
- Le commentaire de `.chrome` (« Le monospace tient la structure… ») est
  réécrit selon la nouvelle règle.

## 3. Marque : le nom seul

Décision : [Choix de la marque](issues/04-choix-de-la-marque.md) ; ADR-0006.

- **Header** : « Romain Siré » en sans, 15 px (`--t-body`), graisse 600,
  interlettrage −0,01em, suivi du point shu (`.shu`). Le nom reste visible
  sur mobile : la règle qui le masquait est supprimée. Le lien garde
  `aria-label="Romain Siré — accueil"`.
- **Pied de page** : la ligne « Romain Siré · année » suivie du point shu.
  Rien au-dessus.
- **Hero de l'accueil, 404, À propos, filigrane des emplacements sans
  capture (`Absent`)** : aucun signe. Le hero commence par le titre.
  `Absent` garde son cadre et son texte, sans filigrane.

## 4. Favicon

Décision : [Choix de la marque](issues/04-choix-de-la-marque.md).

`public/favicon.svg` : « rs » en bas de casse, washi sur un carré d'encre,
suivi d'un point shu. Lettres en Overpass **vectorisées** dans le SVG (un
favicon ne charge pas de police). Couleurs : nouvelles valeurs de la §6.

## 5. Image OG

Décision : [Choix de la marque](issues/04-choix-de-la-marque.md).

`resources/og.svg`, puis `public/og.png` exporté depuis lui (1200 × 630).
Mise en page actuelle de `resources/og.svg`, avec :

- en haut à gauche, le **rayon diagonal ouvert** en trait washi, à la place
  du monogramme : viewBox 24, trait 2,6, extrémités franches,
  `M2 15V10A8 8 0 0 1 10 2H15` et `M22 9V14A8 8 0 0 1 14 22H9` ;
- le filet, « Romain Siré » en Overpass 500, le sous-titre en cendre, la
  ligne de mentions en Overpass Mono en bas de casse, le point shu en bas à
  droite ;
- fond encre et couleurs de la §6 ; textes vectorisés.

Ce signe ne paraît **que** sur l'image OG : ni sur le site, ni dans le
favicon.

## 6. Palette bleue

Décision et tableau des contrastes : [Température de l'encre et du washi](issues/06-temperature-de-l-encre-et-du-washi.md).

Dans `src/styles/tokens.css` :

| Jeton | Avant | Après |
| --- | --- | --- |
| `--ink` | `#0b0d0e` | `#090f15` |
| `--steel` | `#2a2e30` | `#262c32` |
| `--ash` | `#767b7d` | `#787c81` |
| `--ash-deep` | `#656a6c` | `#686c71` |
| `--kasumi` | `#c9c6be` | `#c0c6cd` |
| `--washi` | `#f4f1ea` | `#ebf2fb` |
| `--bg-raised` (Galerie) | `#fffdf8` | `#f9fcff` |

`--hamon`, `--hamon-deep`, `--shu`, `--shu-tx` sont inchangés.

- Commentaires de ratio : `--ash-deep` passe à 4,69:1, `--hamon-deep`
  reste 6,26:1.
- `theme-color` de `src/layouts/Base.astro` (codes en dur) : `#ebf2fb` en
  Galerie, `#090f15` en Nuit.
- Les couleurs en dur du favicon et de l'image OG prennent les mêmes
  valeurs.

## 7. Pastille de disponibilité

Décision : [Diagnostic : qu'est-ce qui fait « AI made » ?](issues/01-diagnostic-du-fait-ia.md) (élément C).

Conservée sur l'accueil, bordure et rayon diagonal compris, en mono bas de
casse (§2). Son texte devient « Actuellement en mission chez Notrelec ·
Toulouse ». C'est la seule retouche de texte du chantier.

## 8. Le tracé disparaît

Décision : [Sort du tracé](issues/05-sort-du-trace.md) ; ADR-0006.

- `--dur-seal` est supprimé de `tokens.css`, avec son commentaire. La
  famille apparition ne garde que `--dur-reveal` ; le commentaire de bloc
  « Mouvement » de `tokens.css` reste juste.
- Plus aucune trace de `data-seal` ni d'écouteur `astro:after-swap` lié au
  sceau dans `Base.astro`. Les autres scripts restent accrochés à
  `astro:page-load` (ADR-0003).
- Le jeton `--seal` (couleur du point shu selon le registre) n'a rien à voir
  avec le tracé : il **reste**, mais on le renomme `--shu-point` pour qu'il
  ne survive plus de « sceau » dans le code. Tous ses emplois suivent.

## Ce qui ne change pas

- Le fondu croisé de page, sa durée et son uniformité :
  [Transition de page](issues/08-transition-de-page.md), ADR-0003.
- Hero, index « 01 », séparateurs « · », filets à 0,5 px, point shu, rayon
  diagonal des panneaux, registres Nuit et Galerie.
- Aucun élément personnel : [Élément personnel](issues/07-element-personnel.md).
- Le texte du site, hors pastille.

## Vérifications

- `pnpm build` passe.
- `grep -riE "monogram|geist|dur-seal|data-seal|tr-caps|--seal\b"` sur `src/`,
  `public/` et `resources/og.svg` ne renvoie rien.
- Contrastes de la §6 vérifiés sur les pages réelles (accueil, une étude de
  cas, À propos, contact).
- Aucun texte en capitales espacées ; pas de débordement de la pastille ni
  des puces de stack à 320 px.
- Favicon lisible à 16 px ; aperçu de partage contrôlé (validateur LinkedIn
  ou équivalent) après déploiement.

## Hors périmètre

Charte PDF v1.0, bannière LinkedIn, CV : ils suivront cette spec, ailleurs.
La charte de référence est `CONTEXT.md` et les ADR.
