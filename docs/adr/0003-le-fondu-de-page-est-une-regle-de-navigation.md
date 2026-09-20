---
status: accepted
---

# Le fondu de page est une règle de navigation, pas une exception au mouvement

Le site bascule de registre entre certaines pages : la home est en nuit, la
page à propos en galerie. Jusqu'ici la bascule était instantanée — et un
changement de fond brutal, sans cause visible, ne se lit pas comme une
rupture voulue : il se lit comme un défaut d'affichage. Le visiteur n'a aucun
moyen de distinguer l'intention du bug.

Nous adoptons donc les *View Transitions* — `ClientRouter` d'Astro — avec un
fondu croisé de `--dur-slow` (320 ms) sur la courbe unique du système, sur
**toute navigation interne**, neutralisé sous `prefers-reduced-motion`.

## La question qui se pose : est-ce une deuxième exception ?

L'ADR-0002 accorde une exception unique à la règle du mouvement et se termine
par « une deuxième exception détruirait la première ». Il faut donc démontrer
que cette décision n'en est pas une.

La charte dit : *ce qui apparaît entre par un déplacement plutôt que par un
fondu*. Cette règle gouverne un **élément qui entre dans une page** : il vient
d'un endroit, il va à un autre, le déplacement raconte ce trajet. Une page n'a
pas ce trajet. Elle ne se déplace pas : elle est **remplacée**, et les deux
états occupent exactement le même espace. Le déplacement n'y a pas de sens à
exprimer — le fondu, si.

Ce n'est donc pas une entorse à la règle du mouvement, c'est une règle de
navigation, qui s'applique là où la première n'avait rien à dire. Le jeton
`--dur-slow` portait d'ailleurs déjà le commentaire `/* page, révélation */` :
la charte avait réservé la place, elle était restée vide.

La démonstration ne tient qu'à une condition, et c'est pourquoi elle est
écrite ici : le fondu doit être **uniforme**. S'il n'était appliqué qu'aux
bascules nuit ↔ galerie, il redeviendrait un cas particulier — donc une
seconde exception, et l'ADR-0002 tomberait avec lui.

## Consequences

Le `ClientRouter` coûte environ 4,6 ko de JavaScript compressé, là où le site
n'en servait qu'environ 2. C'est le poste le plus lourd du site et de loin ;
l'étude de cas de ce portfolio annonce le chiffre plutôt que de le taire.

Toute la logique client doit devenir rejouable : le script d'entrée s'accroche
à `astro:page-load` au lieu de s'exécuter une fois. Le tracé du monogramme se
restaure sur `astro:after-swap`, avant le premier rendu de la nouvelle page,
sinon l'attribut `data-seal` serait perdu au remplacement du document et le
sceau se retracerait à chaque navigation — ce qui violerait la borne « une
occurrence par session » de l'ADR-0002.

Corollaire visible : `theme-color` suit désormais le registre. Une barre
d'adresse encre au-dessus d'une page washi produisait exactement le défaut
que cet ADR cherche à supprimer.
