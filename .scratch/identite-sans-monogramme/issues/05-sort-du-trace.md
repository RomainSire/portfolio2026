# Sort du tracé

Type: grilling
Status: resolved
Blocked by: 04

## Question

La marque est désormais le nom seul, sans signe figuratif : que devient le
tracé, la seule apparition du site à partir de rien ? Il passe au nom (et
sous quelle forme : le nom qui s'écrit, le point shu qui se pose, autre), ou
il disparaît, et l'accueil n'a plus qu'une apparition, la révélation ? Dans
chaque cas, que deviennent ADR-0002, ADR-0005, le jeton `--dur-seal` et
l'entrée Tracé de `CONTEXT.md` ?

## Contexte

- Marque choisie : le nom seul (`issues/04-choix-de-la-marque.md`). Le
  rayon diagonal en deux coins existe, mais seulement sur l'image OG : il
  n'est pas un candidat naturel pour le tracé.

## Answer

**Le tracé disparaît, sans remplaçant.** C'était le geste propre au monogramme
(germes, rotation à 180°) : sans le signe, il n'a plus d'objet. L'accueil n'a
plus qu'une apparition, la révélation ; le hero commence par le titre.

Écartés :

- **Le point shu qui se pose** : à quelques pixels, 900 ms ne se voient pas,
  ou se lisent comme une notification ou un chargement ; le shu deviendrait un
  effet au lieu de ponctuer.
- **Le nom qui s'écrit** : Overpass est une typo à formes pleines, sans ligne
  médiane à parcourir ; il faudrait en fabriquer une. Et le nom qui se dessine
  à l'ouverture est un effet de gabarit, exactement ce que le diagnostic
  retire. Une écriture manuscrite relève d'« Élément personnel » : si elle
  devait se dessiner, ce serait une nouvelle apparition à partir de rien,
  décidée là-bas pour ses propres raisons, avec son propre jeton.

Conséquences, à écrire lors de la rédaction finale :

- **ADR** : le nouvel ADR (remplacement du monogramme) **remplace ADR-0005**,
  **amende ADR-0004** (la famille apparition ne garde que `--dur-reveal` ; la
  note sur la ligne médiane distincte du contour tombe ; les deux familles et
  leur axe sont inchangés) et **amende ADR-0003** (le paragraphe sur la
  restauration de `data-seal` à `astro:after-swap` devient caduc ; la règle
  « toute la logique client est rejouable » reste). **ADR-0002** est déjà
  remplacé : on n'y touche pas.
- **Jeton** : `--dur-seal` est supprimé, pas gardé en réserve. Une famille
  apparition à une seule durée suffit : l'argument d'ADR-0004 porte sur les
  familles, pas sur leur nombre de jetons.
- **`CONTEXT.md`** : l'entrée **Tracé** est supprimée (et avec elle « sceau »
  et « germe ») ; l'historique vit dans l'ADR. **Apparition** : « Une
  apparition au site, et une seule : la révélation. » **Révélation** : on
  retire le passage qui l'oppose au tracé (« la seule apparition à partir de
  rien »), et la fin devient : le site n'a pas de repère pour inviter à faire
  défiler, parce qu'un tel repère serait un mouvement permanent et que la
  charte n'en admet aucun. L'entrée Monogramme reste à la rédaction finale.

Côté code, rien à décider : le retrait provisoire supprime déjà le mécanisme
(script de `Base.astro`, `monogram-trace.svg`, styles).

Découvert en route : l'étude de cas du portfolio
(`src/content/travaux/portfolio.md`) décrit l'identité comme déduite du
monogramme, à trois endroits. Romain l'inclut : les trois remplacements,
validés, sont ajoutés au ticket de retrait provisoire
(`.scratch/retrait-monogramme/issues/01-retrait-provisoire.md`), puisque le
texte devient faux au moment du retrait.
