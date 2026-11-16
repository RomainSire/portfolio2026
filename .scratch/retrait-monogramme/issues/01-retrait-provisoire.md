# Retrait provisoire du monogramme

Status: ready-for-agent

## Contexte

Le monogramme SR vient d'Adobe Stock et sa licence en interdit l'usage comme
logo. Il doit quitter le site en ligne sans attendre la nouvelle identité
(carte `.scratch/identite-sans-monogramme/`).

## À faire

- Retirer `<Monogram>` de `Header`, `Footer`, `Absent`, `404`, `a-propos` et
  de l'accueil (y compris le tracé : script de `Base.astro`, styles associés).
- Supprimer `src/assets/monogram.svg`, `src/assets/monogram-trace.svg`,
  `src/components/Monogram.astro`.
- Remplacer `public/favicon.svg`, `public/og.png` et `resources/og.svg` par des
  versions typographiques (`rs` / « Romain Siré » en Geist Mono, couleurs du
  système).
- Retirer le monogramme de `resources/linkedin/banniere.*` et vérifier
  `resources/cv/`.
- Mentionner la marque dans `CONTEXT.md` : entrée Monogramme marquée retirée
  (provisoire, en attente de la carte), et l'entrée Tracé suspendue.
- Corriger l'étude de cas du portfolio (`src/content/travaux/portfolio.md`),
  qui décrit l'identité comme déduite du monogramme. Formulations validées par
  Romain :
  - `accroche` : « Une identité construite sur une règle, un site écrit avec
    un agent IA, et un dépôt public pour le vérifier. »
  - Décision « Une règle plutôt qu'une mode », `texte` : « Toute forme du site
    est un segment droit ou un arc d'un rayon unique, du plus petit bouton à
    la mise en page. Cette règle ne dépend d'aucune tendance, et ne vieillira
    pas avec elles. »
  - Paragraphe du corps : « La charte tient en quelques règles : des segments
    droits et des arcs d'un rayon unique, sept couleurs nommées, et un seul
    rouge, qui ponctue sans jamais remplir. »
- Vérifier que le build passe et qu'aucune référence ne subsiste
  (`grep -ri monogram`).

## Hors périmètre

Toute nouvelle marque ou typo : c'est l'objet de la carte.
