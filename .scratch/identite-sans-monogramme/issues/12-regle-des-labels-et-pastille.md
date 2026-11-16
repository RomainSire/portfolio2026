# Règle des labels et pastille de disponibilité

Status: resolved
Type: task
Blocked by: 10, 11

Spec : [§2 Règle des labels](../spec.md), [§7 Pastille](../spec.md).

## À faire

- §2 en entier : `.chrome` en bas de casse sans interlettrage, `--t-chrome`
  à 12 px, suppression de `--tr-caps` (et de sa ligne de commentaire),
  nouvelle classe sans (`.label`) dans `global.css`, tri un à un de chaque
  emploi de `.chrome`, réécriture du commentaire de `.chrome`. Les textes
  source écrits en capitales pour la mono (s'il y en a) passent en casse
  normale de phrase, sans changer les mots.
- §7 : texte de la pastille « Actuellement en mission chez Notrelec ·
  Toulouse », en mono bas de casse.
- Vérifier à 320 px que la pastille et les puces de stack ne débordent pas
  (spec §1, dernière puce).

## Fini quand

`pnpm build` passe ; plus de `tr-caps` ni de `uppercase` appliqué à du texte
dans `src/` ; captures à 320 px et en bureau sans débordement.
