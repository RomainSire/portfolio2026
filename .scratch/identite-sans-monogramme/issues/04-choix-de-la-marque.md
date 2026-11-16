# Choix de la marque

Type: prototype
Status: resolved
Blocked by: 03

## Question

Quelle marque remplace le monogramme ? Trois familles à prototyper dans la
typo choisie, posées sur le header, le footer, le favicon et l'image OG :
(a) le rayon diagonal comme signe, (b) un SR construit uniquement de segments
droits et d'arcs d'un rayon unique, (c) le nom seul, sans signe figuratif.
Contrainte souple : (a) et (b) doivent pouvoir se tracer.

## Contexte

- Typo choisie : Overpass + Overpass Mono (`issues/03-choix-de-la-typographie.md`).
- Prototype : branche `prototype/choix-marque`
  (`src/components/PrototypeMarque.astro`, `?variant=` sur les vraies pages,
  `&planche` pour le favicon et l'image OG).

## Answer

**Le nom seul (c).** Sur le site, aucun signe figuratif ne remplace le
monogramme : la marque est « Romain Siré », ponctué du point shu. Seule
exception, l'image OG (voir plus bas).

Retenu sur le prototype, variante 5/5 `nom`, telle qu'elle était posée :

- **Header** : « Romain Siré » en Overpass, 15 px, graisse 600, suivi du
  point shu. Le nom ne se masque plus sur mobile, puisqu'il est désormais
  toute la marque.
- **Favicon** : « rs » en bas de casse, washi sur un carré d'encre, suivi
  d'un point shu.
- **Image OG** (et donc l'aperçu de partage LinkedIn, qui la reprend) :
  exception, c'est la planche de la variante 2/5 `coins` qui est retenue.
  En haut à gauche, le rayon diagonal ouvert : les deux seuls coins arrondis
  (haut gauche, bas droit), en trait washi. Puis le filet, « Romain Siré »
  en Overpass 500, le sous-titre en cendre, la ligne de mentions en
  Overpass Mono en bas de casse, et le point shu en bas à droite. C'est la
  mise en page actuelle de `resources/og.svg`, avec ce signe à la place du
  monogramme.
  Ce signe ne paraît **que** là : ni sur le site, ni dans le favicon.
  Géométrie (viewBox 24, trait 2,6, extrémités franches) :
  `M2 15V10A8 8 0 0 1 10 2H15` et `M22 9V14A8 8 0 0 1 14 22H9`.
- **Emplacements décoratifs du monogramme** (hero de l'accueil, 404, À propos,
  filigrane des emplacements sans capture) : plus rien. Le hero commence
  directement par le titre.
- **Pied de page** : la ligne « Romain Siré · année » suivie du point shu
  suffit ; le signe au-dessus disparaît.

Écartées pour le site : (a) le rayon diagonal en coins (il se lit comme une
icône de chargement à petite taille, d'où son seul emploi en grand sur l'image
OG) ou en cadre, et (b) le SR construit.

Les valeurs (corps, graisse, position du point) sont celles du prototype ;
elles restent à fixer dans la spec.

Conséquence pour la suite : le tracé n'a plus de signe sur lequel se jouer.
« Sort du tracé » doit trancher s'il passe au nom ou s'il disparaît.
