# Contexte

Glossaire du portfolio de Romain Siré. Vocabulaire uniquement : aucune
décision d'implémentation ici (celles-ci vont dans `docs/adr/`).

## Marque

### Monogramme
Le signe **SR**, monoline, symétrique par rotation à 180°, construit
uniquement de segments droits et d'arcs d'un rayon unique. C'est la seule
marque figurative du site. Non négociable : il préexiste à cette charte.

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
