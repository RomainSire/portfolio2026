# Contexte

Glossaire du portfolio de Romain Siré. Vocabulaire uniquement : aucune
décision d'implémentation ici (celles-ci vont dans `docs/adr/`).

## Marque

### Monogramme
Le signe **SR**, monoline, construit uniquement de segments droits et d'arcs
d'un rayon unique. C'est la seule marque figurative du site. Non négociable :
il préexiste à cette charte.

Sa grille est symétrique par rotation à 180° ; ses éléments ne le sont pas.
Le S porte un crochet haut dont le R n'a pas d'équivalent en bas, et les deux
moitiés n'ont pas la même structure — on ne dérive pas l'une de l'autre.
L'écart est voulu : la charte en fait la signature du signe, et la rotation à
180° s'entend comme principe de construction, non comme égalité mesurable.

### Tracé
Le geste par lequel le monogramme se révèle au premier chargement, une fois
par session : le signe pousse depuis son centre vers ses extrémités, chaque
moitié partant d'un **germe**, et les deux germes sont images l'un de l'autre
par rotation à 180°. C'est la seule symétrie que le signe permette : ses
éléments, eux, ne se répondent pas. La plus longue **apparition** du site, et
la seule qui ne soit pas un déplacement : tout le reste entre en bougeant, le
tracé seul surgit de rien. « Sceau » désigne le résultat, « tracé » le geste ;
aucun des deux n'est affiché au visiteur.

### Marque nominale
**Romain Siré**. Il n'y a pas de nom de studio, pas de raison sociale
affichée hors mentions légales.

Le nom « sori » et le kanji 反り de la charte v1.0 sont **abandonnés**. Le
système formel qui en découlait (droit + arc, rayon diagonal, palette,
partage mono/sans, ton) est conservé intégralement, mais comme méthode de
construction : rien de japonais n'est visible ni évoqué côté visiteur.

### Développeur indépendant
La façon dont Romain se désigne. **Jamais « freelance »** dans le texte
visible : le mot est un anglicisme dans un site dont tout le ton est français,
et il décrit une ressource là où « indépendant » décrit un interlocuteur.

Deux survivances volontaires, et deux seulement : la `description` meta de la
home, où le mot est le terme réellement tapé dans les moteurs de recherche ; et
l'étude de cas Thess, où « en CDI, puis en freelance » décrit un changement de
contrat réel, pas une identité.

Cette règle ne porte que sur ce mot. Le vocabulaire technique — *landing page*,
*runtime*, *front*, *back*, *stack* — n'est pas concerné : il s'adresse à un
lecteur du métier, et le traduire sonnerait faux.

### Système formel
L'ensemble des règles héritées de la charte v1.0 : la règle *droit + arc*,
le *rayon diagonal* (deux coins opposés arrondis, deux à angle vif), la
palette encre/acier/cendre/kasumi/washi/hamon/shu, la *règle du shu* (le
rouge ponctue, ne remplit jamais), les filets à 0,5 px, la courbe
d'accélération unique.

## Travaux

### Travail
L'unité de contenu du portfolio. Un travail est soit une **mission**, soit
une **réalisation** ; sa nature est affichée, jamais implicite. C'est aussi
le nom de la section du site : on ne dit ni « projets », ni « portfolio »,
ni « réalisations » comme terme générique.

L'interdiction ne porte que sur ce sens générique. « Un projet » qui désigne
**le projet du visiteur** est légitime, et c'est le sens employé sur la page
de contact : on ne le corrige pas.

### Mission
Un travail effectué en régie, dans la durée, au sein d'une équipe, où
Romain n'a pas décidé seul du périmètre ni de la technique.
Exemples : Notrelec, Thess.

### Réalisation
Un travail livré à périmètre fermé, dont Romain a porté seul la conception,
le développement et la livraison.
Exemples : Doglife, LM Énergie, ce portfolio.

### Étude de cas
La page dédiée d'un travail. Format contraint et identique pour tous :
contexte, rôle, contrainte dure, deux ou trois décisions assumées,
résultat. Jamais un texte libre.

## Registres visuels

Le registre n'est pas un choix éditorial page par page : il se déduit de ce
que la page montre. **Nuit pour les pages qui montrent du travail, Galerie
pour les pages qui parlent de Romain ou de l'administratif.** La règle vaut
pour toute page future, sans arbitrage.

### Nuit
Le registre par défaut : fond encre, texte washi. Home, études de cas, 404.
Une étude de cas est Nuit par définition, pas par décision — la nature du
registre n'est pas une donnée de contenu.

### Galerie
Le registre clair : fond washi, texte encre. À propos, contact, mentions
légales, CGV, confidentialité. Le passage d'un registre à l'autre est une
rupture franche, jamais un dégradé progressif : il se lit au changement de
page, porté par le fondu de navigation (ADR-0003), et le chrome du navigateur
suit le registre.

## Mouvement

Le site distingue deux familles de mouvement, et c'est la distinction dont
dépendent toutes les durées.

### Réaction
Un mouvement qui répond à un geste du visiteur : un survol, une prise de
focus, un panneau qui s'ouvre, une page qui en remplace une autre. Le
visiteur l'attend, puisqu'il vient de le déclencher — une réaction lente se
lit comme une lenteur du site. C'est le domaine où le plafond de la charte
est juste.

### Apparition
Un mouvement que personne n'a demandé : un contenu qui prend sa place. Le
visiteur ne l'attend pas, donc rien ne presse — et s'il va trop vite, on ne
voit pas un mouvement mais deux états, un avant et un après. Une apparition
a besoin de durer pour exister.

La charte v1.0 n'avait qu'une échelle de durée, parce qu'elle n'avait
rencontré que des réactions. Confondre les deux familles était l'erreur
d'origine, pas la valeur du plafond.

Deux apparitions au site, et deux seulement : la **révélation** et le
**tracé**.

### Révélation
Le geste par lequel un bloc de contenu prend sa place quand la lecture
l'atteint : il monte sur une courte distance et finit de se colorer en
arrivant. Le déplacement est le geste ; la couleur ne fait que
l'accompagner.

Une révélation qu'on ne voit pas n'a pas eu lieu. Le geste se joue donc là
où se porte le regard, jamais au ras du bord de la fenêtre : un bloc qui
s'anime en lisière arrive dans la zone de lecture déjà posé, et le site
paraît immobile.

Ce n'est pas un dévoilement. Un bloc pas encore révélé n'est pas caché : il
est une **silhouette**. C'est là que la révélation se sépare du **tracé**,
qui, lui, fait apparaître ce qui n'était pas là — et reste la seule
apparition du site à partir de rien.

Sa raison d'être tient en une conséquence : un bas de page ne se lit jamais
comme une fin de page. La suite s'annonce d'elle-même, et le site n'a donc
aucun repère d'interface — flèche, pastille, dégradé de bord — pour inviter
à faire défiler. Il n'en aura pas : un tel repère serait un mouvement
permanent, et la charte n'accorde qu'une exception, déjà prise.

### Silhouette
L'état d'un bloc avant sa révélation. Une silhouette ne réserve pas une
place : elle est déjà le bloc, à sa place et à sa hauteur. Sa transparence se
tient en deçà de la lisibilité — une silhouette qu'on peut lire est un
défaut, une silhouette qu'on ne distingue pas en est un autre.

Le bas de la fenêtre porte en permanence une **lisière** de silhouettes :
les blocs entrés dans le champ mais pas encore atteints par la lecture. Ce
n'est pas un état transitoire à corriger, c'est ce qui annonce la suite —
et c'est pourquoi le site n'a besoin d'aucun repère d'interface pour
inviter à faire défiler.
