# Carte : une identité sans le monogramme

Labels: wayfinder:map

## Destination

Une spec de l'identité qui remplace le monogramme SR (la marque, le sort du
tracé, la typographie, et ce qu'on change de la charte pour qu'elle ne fasse
plus « générée »), avec ADR et `CONTEXT.md` à jour, prête à implémenter.
L'implémentation reste hors carte.

## Notes

- Origine : le monogramme vient d'Adobe Stock. Sa licence interdit l'usage
  comme logo ou marque, même payante. Romain ne veut pas régulariser : le
  signe disparaît entièrement.
- Le retrait provisoire se fait **hors carte**, tout de suite :
  `.scratch/retrait-monogramme/`. La carte décide sans urgence.
- Le **système formel** est conservé (palette, rayon diagonal, règle du shu,
  filets, courbe unique, droit + arc). On cherche les 2 ou 3 éléments qui font
  générique et on les remplace ; pas de redesign complet.
- Toute ressource nouvelle (typo, forme) doit être libre sans ambiguïté :
  OFL ou création propre, auto-hébergée.
- Lire `CONTEXT.md` et les ADR 0001 à 0005 avant chaque ticket. Grilling :
  skills « grilling » et « domain-modeling ». Prototype : skill « prototype ».
- Préférence de Romain : il n'est pas designer et veut réagir sur pièces
  (candidats concrets), pas sur des descriptions.

## Decisions so far

<!-- une ligne par ticket résolu -->

- [Typographies libres candidates](issues/02-typographies-libres-candidates.md) : 12 couples OFL vérifiés ; tête de liste Overpass, Sono, Iosevka Charon, Recursive.

## Not yet specified

- **Un élément personnel** qui distingue le site d'un rendu généré. Pas de
  photo de Romain. Le reste est ouvert (écriture manuscrite, matière
  photographique non portrait, autre). À revoir une fois typo et marque
  tranchées.
- **La composition** : si le diagnostic du « fait IA » pointe autre chose
  que la typo (labels en mono, grille, densité), ce qu'on en change.
- **La rédaction finale** : spec consolidée, nouvel ADR (remplacement du
  monogramme, statut d'ADR-0002 et ADR-0005), entrées Monogramme / Tracé /
  Système formel de `CONTEXT.md`.

## Out of scope

- Régulariser la licence Adobe Stock : exclu par Romain.
- Un redesign complet repartant d'une page blanche : déjà écarté par
  ADR-0001, et confirmé ici.
- Une photo de Romain sur le site.
- La refonte des supports hors site (charte PDF v1.0, bannière LinkedIn, CV) :
  ils suivront la spec, ailleurs. La charte de référence devient
  `CONTEXT.md` + ADR ; pas de réédition du PDF.
