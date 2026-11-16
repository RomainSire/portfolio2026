---
status: accepted
supersedes: 0005-le-trace-se-joue-a-chaque-chargement-de-document.md
amends:
  - 0001-systeme-formel-sans-le-nom-sori.md
  - 0003-le-fondu-de-page-est-une-regle-de-navigation.md
  - 0004-deux-familles-de-mouvement-reaction-et-apparition.md
amended-by: 0007-le-rayon-diagonal-sur-le-panneau-de-ce-portfolio.md
---

# Une identité sans monogramme : le nom seul, et plus de tracé

Le monogramme SR vient d'Adobe Stock, dont la licence interdit l'usage comme
logo ou marque, même payante. Plutôt que de régulariser, nous retirons le
signe entièrement et ne le remplaçons par aucun autre : la marque du site est
le nom, « Romain Siré », ponctué du point shu. Le tracé, qui était le geste
propre au monogramme, disparaît avec lui, sans remplaçant.

Le nom seul a été retenu sur pièce face à deux signes construits dans le
système formel. Le **rayon diagonal en deux coins** se lit comme une icône de
chargement à petite taille : il ne survit qu'en grand, sur l'image OG, seul
endroit du site où un signe figure. Un **SR reconstruit** en droits et arcs
d'un rayon unique aurait été un monogramme de remplacement, avec le même rôle
et sans l'histoire qui justifiait l'ancien. Le favicon suit le nom : « rs »
en bas de casse, suivi du point shu.

## Considered Options

Pour le tracé, une fois le signe parti :

- **Le point shu qui se pose.** Rejeté : à quelques pixels, 900 ms ne se
  voient pas, ou se lisent comme une notification. Le shu deviendrait un
  effet au lieu de ponctuer.
- **Le nom qui s'écrit.** Rejeté : Overpass est à formes pleines, sans ligne
  médiane à parcourir, et un nom qui se dessine à l'ouverture est un effet de
  gabarit, ce que ce chantier retire.

Une apparition à partir de rien devra désormais se justifier pour elle-même,
avec son jeton et son ADR. Aucune n'est prévue.

## Consequences

- **ADR-0005 est remplacé.** Il bornait le tracé au document ; sans tracé,
  la borne n'a plus d'objet.
- **ADR-0004 est amendé.** La famille apparition ne compte plus qu'une durée,
  `--dur-reveal` ; `--dur-seal` est supprimé, pas gardé en réserve. L'argument
  de l'ADR porte sur les familles, pas sur le nombre de leurs jetons : les
  deux familles et leur axe sont inchangés. La note sur la ligne médiane
  distincte du contour (`monogram.svg`, `monogram-trace.svg`) tombe avec les
  fichiers. La révélation devient la seule apparition du site.
- **ADR-0003 est amendé.** Le paragraphe sur la restauration de `data-seal`
  à `astro:after-swap` est caduc. La règle qui le motivait reste : toute la
  logique client est rejouable et s'accroche à `astro:page-load`. Le fondu
  lui-même est inchangé ; il a été remis en jeu face à cinq autres
  transitions et retenu comme la plus fluide.
- **ADR-0001 est amendé** sur sa dernière phrase : le monogramme, qui
  « préexistait » et « restait », ne reste pas. Le système formel, lui, est
  conservé tel que l'ADR le décrit, à deux nuances près, décidées dans le
  même chantier : les valeurs de la palette ont bougé (encre et washi teintés
  de bleu), et le partage mono/sans s'est resserré (le monospace tient les
  données, plus toute la structure).
- **ADR-0002** est déjà remplacé par l'ADR-0004 ; il n'est pas touché.
- La charte PDF v1.0 n'est pas rééditée. La charte de référence est
  désormais `CONTEXT.md` et les ADR.

Le détail des décisions vit dans `.scratch/identite-sans-monogramme/` : la
carte, ses tickets résolus et la spec.
