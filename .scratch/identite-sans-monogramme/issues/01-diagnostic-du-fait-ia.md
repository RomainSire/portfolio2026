# Diagnostic : qu'est-ce qui fait « AI made » ?

Type: grilling
Status: resolved
Blocked by:

## Question

Quels éléments précis de la charte et du site actuels donnent l'impression
d'un rendu généré, et lesquels remplace-t-on (2 ou 3 au plus) ? Hypothèse de
départ : le couple Geist / Geist Mono, les petits labels en monospace, le fond
encre à filets fins, c'est-à-dire le style par défaut de Vercel. À confirmer ou
corriger sur le site réel, page par page, et à formuler comme un brief qui
servira au choix de la typo et de la marque.

## Answer

Le regard visé est celui de Romain : ressenti personnel. La police y est pour
beaucoup, et l'ensemble paraît trop froid. Pas de plafond au nombre
d'éléments remplacés : quatre aujourd'hui, davantage si le besoin apparaît,
tant qu'on ne bascule pas dans un redesign.

### Ce qu'on change

- **A. Geist / Geist Mono** : remplacé par un couple libre (ticket 03).
- **B. Labels `.chrome`** (mono 11 px, capitales, +0,14em, 36 emplois) : plus
  parcimonieux. Le principe « le monospace tient la structure, le sans tient
  le discours » est conservé, mais la mono est réservée aux **données** :
  fiche d'étude de cas (organisation, secteur, période, nature), dates,
  stack, numéros d'index. Les titres de section (« Travaux », « Rôle »,
  « La contrainte », « Décisions »…) passent au sans. Plus de capitales
  espacées : la mono se compose en bas de casse. Rendu à juger dans le
  prototype du ticket 03.
- **C. Pastille de disponibilité** (accueil) : conservée, bordure et rayon
  diagonal compris, mais en bas de casse. Son texte devient « Actuellement en
  mission chez Notrelec · Toulouse ». C'est la seule retouche de texte du
  chantier.
- **G. Température de l'encre et du washi** : l'encre (`#0b0d0e`, légèrement
  froide) et le washi (`#f4f1ea`, déjà chaud) doivent être un peu plus
  teintés. On conserve les noms, les rôles et les relations entre couleurs ;
  les codes hexadécimaux sont ajustables. La teinte n'est pas tranchée
  (ticket 06). Contrastes à revérifier, notamment `--ash-deep` et
  `--hamon-deep`, calibrés sur le washi actuel.

### Ce qu'on garde tel quel

- **D. Hero** (grand titre en 500, −0,04em, chapeau gris) : jugé correct.
  Il ne change qu'à travers la nouvelle typo.
- **E. Index « 01 » et séparateurs « · »** : conservés ; ils suivent la typo.
- **F. Fond encre et filets à 0,5 px** : conservés (système formel).
- **Point shu** : conservé, en connaissance de cause. Il est répandu dans les
  DA, mais c'est le seul accent du site.

### Hors périmètre

La rédaction. On ne touche au texte nulle part, sauf la ligne de la pastille (C).
