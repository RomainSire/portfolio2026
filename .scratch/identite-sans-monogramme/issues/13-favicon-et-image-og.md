# Favicon et image OG

Status: resolved
Type: task
Blocked by: 11

Spec : [§4 Favicon](../spec.md), [§5 Image OG](../spec.md), couleurs de la
[§6](../spec.md).

## À faire

- `public/favicon.svg` selon §4, lettres Overpass vectorisées.
- `resources/og.svg` selon §5 (texte vectorisé, rayon diagonal ouvert à la
  place du monogramme), puis `public/og.png` exporté en 1200 × 630.
- Les sources TTF d'Overpass sont dans `$JOB_TMP/fonts/` (ticket 11).

## Fini quand

`grep -iE "monogram|geist"` sur ces fichiers ne renvoie rien ; le favicon
reste lisible rendu à 16 px ; `og.png` fait 1200 × 630.
