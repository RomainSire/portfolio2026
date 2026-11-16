# Retrait du monogramme et du tracé ; marque au nom seul

Status: resolved
Type: task

Spec : [§3 Marque](../spec.md), [§8 Le tracé disparaît](../spec.md). Remplace
l'ancien ticket de retrait provisoire, supprimé : on passe directement à
l'état définitif.

## À faire

- Retirer `<Monogram>` de `Header`, `Footer`, `Absent`, `404`, `a-propos` et
  de l'accueil, avec les styles qui ne servaient qu'à lui (`.mark`, `.decor`,
  `.wm`…). Supprimer `src/components/Monogram.astro`,
  `src/assets/monogram.svg`, `src/assets/monogram-trace.svg`.
- Header et pied de page : spec §3 (nom en sans 15 px / 600 / −0,01em + point
  shu, visible sur mobile ; pied « Romain Siré · année » + point shu, rien
  au-dessus). La **famille** des labels du pied (`.chrome`) relève du
  ticket 12 : ne pas y toucher ici.
- Tracé : spec §8. `Base.astro` : retirer `sceau()`, son écouteur
  `astro:after-swap` et son commentaire ; réécrire le commentaire d'en-tête
  du script en conséquence. `tokens.css` : retirer `--dur-seal`, renommer
  `--seal` en `--shu-point` (tous les emplois, dont `Legal.astro`).
- `global.css`, bloc `.shu` : renommer le titre « Sceau shu » en « Point
  shu », reformuler le commentaire pour Overpass (le point typographique
  d'Overpass n'est pas un disque d'un rayon unique, donc on le dessine) et
  retirer la mention du monogramme.
- Étude de cas du portfolio (`src/content/travaux/portfolio.md`),
  formulations validées par Romain :
  - `accroche` : « Une identité construite sur une règle, un site écrit avec
    un agent IA, et un dépôt public pour le vérifier. »
  - Décision « Une règle plutôt qu'une mode », `texte` : « Toute forme du site
    est un segment droit ou un arc d'un rayon unique, du plus petit bouton à
    la mise en page. Cette règle ne dépend d'aucune tendance, et ne vieillira
    pas avec elles. »
  - Paragraphe du corps qui commence par « Le monogramme est antérieur… » :
    « La charte tient en quelques règles : des segments droits et des arcs
    d'un rayon unique, sept couleurs nommées, et un seul rouge, qui ponctue
    sans jamais remplir. »

## Fini quand

`pnpm build` passe ; `grep -riE "monogram|dur-seal|data-seal|--seal\b|sceau"`
sur `src/` ne renvoie rien.
