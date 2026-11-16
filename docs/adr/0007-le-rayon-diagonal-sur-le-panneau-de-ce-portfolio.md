---
status: accepted
amends: 0006-une-identite-sans-monogramme.md
---

# Le rayon diagonal paraît aussi sur le panneau sans visuel de « Ce portfolio »

L'ADR-0006 réservait le rayon diagonal en deux coins à l'image OG, « seul
endroit du site où un signe figure ». L'étude de cas « Ce portfolio » n'a pas
de capture : son panneau sans visuel ne montrait que la stack et « Vous la
regardez. », et se lisait comme un vide plutôt que comme un parti pris. Nous y
posons le même rayon, en tête du panneau, sur la vignette de la home comme sur
la page de détail.

L'argument de l'ADR-0006 est tenu : le rayon se lit comme une icône de
chargement **à petite taille**. Sur ce panneau, il ne descend jamais sous
56 px et va jusqu'à 160 px sur la page de détail, avec le trait du même
rapport que sur l'image OG. Il reste un élément du système formel, pas une
marque : la marque est toujours le nom seul, et le rayon n'apparaît ni dans
l'en-tête, ni dans le pied de page, ni dans le favicon.

Le rayon est à sa place sur ce travail-là, parce que le sujet de l'étude de
cas est justement le système formel. Sur un autre travail sans capture, il
deviendrait une illustration de remplissage, ce que le panneau sans visuel
refuse par principe.

## Considered Options

- **Laisser le panneau tel quel.** Rejeté : à côté des quatre captures de la
  liste, le cinquième panneau paraît inachevé plutôt que délibéré.
- **Une vraie capture du site.** Rejeté : le visiteur est déjà dessus, d'où
  la raison « Vous la regardez. ». Une capture de la page qu'on lit serait
  redondante.
- **Le rayon sur tous les panneaux sans visuel.** Rejeté : sur un produit
  dont la capture n'est pas diffusable, il se lirait comme un logo de
  remplacement, et contredirait l'ADR-0006 sur le fond.

## Consequences

- **ADR-0006 est amendé** sur un point : l'image OG n'est plus le seul
  endroit où le rayon figure. Son autre usage est ce panneau, toujours en
  grand. Tout nouvel emplacement doit avoir son propre ADR.
- Le panneau sans visuel prend le champ `rayon` (faux par défaut). Seul
  `portfolio.md` l'active.
- `CONTEXT.md` (Marque nominale) nomme les deux emplacements.
