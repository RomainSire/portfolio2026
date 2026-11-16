# Typographie Overpass et palette bleue

Status: resolved
Type: task

Spec : [§1 Typographie](../spec.md), [§6 Palette bleue](../spec.md).

## À faire

- §1 en entier, **sauf** le commentaire de `.shu` (ticket 10) et la largeur
  de la pastille et des puces à 320 px (ticket 12). Overpass et Overpass Mono
  variables (OFL 1.1), instanciés sur sans 400–600 / mono 400–500,
  sous-ensemble latin gardant Ÿ et U+202F, woff2 dans `public/fonts/` +
  `public/fonts/OFL.txt`. Supprimer les woff2 Geist. `@font-face` de
  `global.css`, `--sans` / `--mono` de `tokens.css`, préchargements de
  `Base.astro`.
- Garder aussi les **sources TTF variables complètes** hors du repo, dans
  `$JOB_TMP/fonts/`, pour la vectorisation du ticket 13.
- Crédit des polices dans `src/pages/mentions-legales.astro` : Overpass et
  Overpass Mono à la place de Geist et Geist Mono.
- §6 en entier : valeurs de `tokens.css`, commentaires de ratio,
  `theme-color` de `Base.astro`.

## Fini quand

`pnpm build` passe ; plus de `geist` (insensible à la casse) dans `src/` ni
`public/` ; les deux woff2 servent bien les graisses attendues.
