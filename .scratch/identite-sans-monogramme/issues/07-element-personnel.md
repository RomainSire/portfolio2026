# Élément personnel

Type: grilling
Status: resolved
Blocked by: 05, 06

## Question

Une fois Overpass, le nom seul et une encre teintée de bleu en place, le site
a-t-il encore besoin d'un élément personnel pour ne plus ressembler à un rendu
généré ? Si oui, de quelle famille : écriture manuscrite (par exemple le nom
ou une signature, que le tracé pourrait dessiner), matière photographique sans
portrait, ou autre ? Où l'élément apparaît-il, et dans quelle limite, compte
tenu de la règle du shu et du principe « la courbe est fonctionnelle, jamais
décorative » ? Pas de photo de Romain.

## Contexte

- « Sort du tracé » (`issues/05-sort-du-trace.md`) : le tracé disparaît et
  `--dur-seal` avec lui ; la révélation est la seule apparition. Un élément
  manuscrit qui se dessinerait serait une nouvelle apparition à partir de
  rien, à justifier ici, avec son propre jeton et son ADR.
- Diagnostic : `issues/01-diagnostic-du-fait-ia.md`.
- « Température de l'encre et du washi » (`issues/06-temperature-de-l-encre-et-du-washi.md`) :
  encre et washi teintés de bleu, pas réchauffés. Le shu devient le seul
  accent chaud du site.
- Prototype : branche `prototype/rendu-combine`
  (`src/components/PrototypeCombine.astro` : tout le décidé ensemble sur les
  vraies pages, bascule avant / après).

## Answer

**Pas d'élément personnel.** Jugé sur le rendu combiné (Overpass et la règle
des labels, le nom seul ponctué du shu, l'encre et le washi bleus, la
pastille en bas de casse) : le site ne paraît plus généré, rien n'est à
ajouter. La spec ne prévoit ni écriture manuscrite, ni matière
photographique, ni nouvelle apparition.

Le « trop froid » du diagnostic voulait dire **impersonnel**, sans auteur
visible, et non une température de couleur : c'est pourquoi le bleu a pu être
retenu. Les changements déjà décidés y répondent.

Garde-fous validés, pour le cas où un élément personnel reviendrait un jour
dans un autre chantier :

1. **Il vient de Romain** (sa main, ses photos) : ni stock, ni image générée,
   ni police « manuscrite ».
2. **Il est statique** : il ne se dessine pas, et la révélation reste la seule
   apparition (pas de nouveau jeton, pas d'ADR de mouvement).
3. **Il ne touche pas au système formel** : règle du shu, courbe
   fonctionnelle.

Conséquence pour la rédaction finale : rien à ajouter à la spec ni à
`CONTEXT.md` au titre de ce ticket.
