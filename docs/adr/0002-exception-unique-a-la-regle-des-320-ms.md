---
status: accepted
---

# Une exception unique à la règle des 320 ms : le tracé du monogramme

La charte est catégorique sur le mouvement : une seule courbe d'accélération
(`cubic-bezier(.2, 0, 0, 1)`), rien au-delà de 320 ms, aucun rebond, et tout
ce qui apparaît entre par un déplacement plutôt que par un fondu. Le tracé du
monogramme au premier chargement viole cette règle : un balayage lisible
demande environ 900 ms. Nous accordons cette exception, une seule fois, sur ce
seul élément, matérialisée par un jeton distinct — `--dur-seal` — et bornée à
une occurrence par session.

## Consequences

Un lecteur qui trouvera une animation de 900 ms dans une base de code dont tous
les jetons de durée plafonnent à 320 ms doit pouvoir constater que c'est
délibéré, et non une négligence : `--dur-seal` porte le commentaire et renvoie
ici. Toute autre durée supérieure à 320 ms est un bug.

L'exception est cohérente avec la règle du shu, qui gouverne la couleur rouge
de la même façon : elle ponctue, elle ne remplit pas. Une charte sans aucune
exception n'a pas de sceau — mais une deuxième exception détruirait la
première.
