---
status: accepted
amended-by: 0005-le-trace-se-joue-a-chaque-chargement-de-document.md
supersedes: 0002-exception-unique-a-la-regle-des-320-ms.md
---

# Deux familles de mouvement : réaction et apparition

La charte v1.0 plafonne toute animation à 320 ms. ADR-0002 a traité le tracé
du monogramme comme la seule dérogation possible, et a posé qu'une deuxième
exception détruirait la première. La règle était pourtant plus large que son
fondement : elle mesurait deux gestes différents à la même aune.

Une **réaction** répond à un geste du visiteur — survol, focus, panneau, page
remplacée. Elle est attendue, puisqu'il vient de la déclencher, et une
réaction lente se lit comme une lenteur du produit. Le plafond de 320 ms est
juste, et il le reste.

Une **apparition** ne répond à rien : c'est un contenu qui prend sa place.
Personne ne l'attend, donc rien ne presse. Et sous 320 ms, avec la courbe du
système, elle échoue à se lire comme un mouvement : `cubic-bezier(.2, 0, 0, 1)`
couvre 88 % du chemin en 160 ms, si bien qu'on ne perçoit pas une trajectoire
mais deux états — un état posé et un état décalé, sans rien entre les deux.
C'est la révélation des blocs au scroll qui l'a rendu manifeste : elle était
en place depuis le début du projet et personne ne la voyait.

Nous scindons donc l'échelle des durées en deux familles. Réaction :
`--dur-fast` (120 ms), `--dur-base` (200 ms), `--dur-slow` (320 ms).
Apparition : `--dur-reveal` (600 ms), `--dur-seal` (900 ms). La courbe reste
unique, et l'interdiction du rebond entière : ce qui change est la durée, pas
la manière.

## Consequences

Le tracé du monogramme cesse d'être une exception de durée. Il redevient ce
que le glossaire disait déjà de lui : la seule apparition du site qui ne soit
pas un déplacement, la seule chose qui surgisse de rien. Son statut singulier
tient désormais à sa nature et non à un chiffre — un socle plus stable que
celui d'ADR-0002, où il suffisait qu'une durée bouge pour que l'argument
tombe. `--dur-seal` reste un jeton distinct, et sa borne à une occurrence par
session est inchangée.

La note technique d'ADR-0002 survit et se lit désormais ici : le tracé passe
par une **ligne médiane distincte du contour**. `monogram.svg` porte la
silhouette du signe, `monogram-trace.svg` la ligne qui la parcourt, laquelle
n'est jamais un trait visible — seulement un `stroke` dans un masque. Deux
fichiers pour un signe, mais une dérive entre eux se constate immédiatement,
puisque le masque cesse alors de couvrir.

Ce qui reste un bug : une **réaction** au-delà de 320 ms, une deuxième courbe
d'accélération, un rebond, ou une troisième famille inventée pour loger une
durée qui ne rentre nulle part. La règle n'a pas été assouplie, elle a été
posée sur le bon axe — et l'axe n'admet que deux valeurs.

L'étude de cas du portfolio décrit la charte au visiteur et affirmait « rien
au-delà de 320 ms » ainsi qu'« une seule exception aux durées ». Le texte a
été corrigé a minima ; il demande une reprise éditoriale, hors du périmètre
de cette décision.
