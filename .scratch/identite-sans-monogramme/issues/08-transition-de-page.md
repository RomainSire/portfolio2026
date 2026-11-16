# Transition de page

Type: prototype
Status: resolved
Blocked by: 07

## Question

Quelle transition remplace, ou pas, le fondu croisé actuel entre deux pages ?
Le prototype compare cinq candidats sur les vraies pages, déjà dans l'identité
décidée (Overpass, nom seul, encre et washi bleus). On les juge surtout aux
bascules entre les registres Nuit et Galerie (accueil → À propos, étude de
cas → contact), mais chacun s'applique à **toute** navigation interne :

1. **Fondu** : le fondu croisé actuel, la référence.
2. **Balayage vertical** : le fond de la nouvelle page monte du bas, et le
   contenu suit.
3. **Coupe diagonale** : la nouvelle page se découvre le long d'une diagonale,
   du coin haut gauche au coin bas droit (l'axe du rayon diagonal), et cette
   diagonale est **légèrement courbée** et prend une **légère rotation**.
   Le prototype propose plusieurs cambrures, et la rotation selon deux
   lectures à départager sur pièce :
   - **inclinaison fixe** : la ligne de coupe est tournée de quelques degrés
     par rapport à la diagonale exacte, et garde cet angle pendant toute la
     traversée ;
   - **pivot pendant la traversée** : la ligne de coupe tourne de quelques
     degrés à mesure qu'elle avance, comme un geste qui accompagne la coupe.
4. **Rideau puis contenu** : le fond change d'abord, puis le texte se pose en
   fondu court.
5. **Coupe franche** : aucune transition, pour vérifier que l'ADR-0003 avait
   raison de l'écarter.

## Contraintes

- **Uniforme** : la transition retenue vaut pour toute navigation interne, pas
  seulement pour les bascules de registre (ADR-0003). Si le prototype montre
  qu'il faut une transition propre au changement de registre, il faudra un
  nouvel ADR pour justifier cette seconde exception face à l'ADR-0002.
- **Réaction, pas apparition** (ADR-0004) : la page vient d'un clic, donc
  320 ms au plus (`--dur-slow`), sur la courbe unique `--ease`. Un candidat
  qui ne se lit qu'au-delà de 320 ms ne se règle pas en allongeant la durée :
  c'est une décision d'ADR.
- **La courbe de la coupe diagonale est un arc d'un seul rayon** (règle droit
  + arc), jamais une courbe libre. Elle doit rester fonctionnelle : elle
  sépare l'ancienne page de la nouvelle et ne décore rien.
- **Aucune évocation japonaise** côté visiteur (ADR-0001) : on dit « coupe
  diagonale », jamais « katana » ni « tranche ».
- Neutralisée sous `prefers-reduced-motion`. Le `theme-color` suit toujours
  le registre.

## Contexte

- Idée de Romain, en résolvant « Élément personnel »
  (`issues/07-element-personnel.md`) : le fondu actuel lui paraît trop
  simple quand on passe d'un registre à l'autre.
- ADR-0003 : pourquoi un fondu, et pourquoi il doit être uniforme.
- Le rendu combiné (branche `prototype/rendu-combine`) peut servir de base.
- Si la transition change, le nouvel ADR amende ADR-0003, en plus de ce que
  « Sort du tracé » en retire déjà, et l'entrée Galerie de `CONTEXT.md`
  (« porté par le fondu de navigation ») sera à reprendre à la rédaction
  finale.

## Answer

**On garde le fondu croisé actuel.** Jugé sur pièce, aux bascules de
registre et en navigation ordinaire : c'est la transition la plus fluide des
six. La coupe qui traverse (3a) était l'idée de départ et tient le mieux
parmi les autres, mais elle reste en deçà d'un simple fondu. La coupe puis
ouverture (3b), le balayage, le rideau et la coupe franche sont écartés.

Conséquences :

- l'ADR-0003 n'est pas amendé au titre de ce ticket (seul « Sort du tracé »
  y retire ce qui concerne le sceau) ;
- l'entrée Galerie de `CONTEXT.md` (« porté par le fondu de navigation »)
  reste juste ;
- rien à ajouter à la spec : ni nouveau jeton, ni nouvel ADR de mouvement.

Prototype : branche `prototype/transition-page`.

## Comments

- Précision de Romain en ouvrant le ticket : la coupe diagonale
  « correspondrait au mouvement que ferait un katana qui coupe la page ».
  Le mot reste interne (ADR-0001) ; côté visiteur, on dit « coupe diagonale ».
  Le candidat 3 est donc dédoublé, pour trancher sur pièce :
  - **3a, coupe qui traverse** : la ligne de coupe balaie l'écran de bas
    gauche à haut droit, la nouvelle page derrière elle ;
  - **3b, coupe puis ouverture** (la lecture « geste du sabre ») : la coupe
    file d'abord du coin haut gauche au coin bas droit (40 % du temps), puis
    la page s'ouvre de part et d'autre de la ligne (60 %).
  Pour les deux : cambrure (droite, légère, moyenne, marquée), rotation
  (aucune, inclinaison fixe de 4°, pivot de −4° à +4°), 320 ms au total.
- Prototype : branche `prototype/transition-page` (partie du rendu combiné),
  `src/components/PrototypeTransition.astro`, monté en dev dans `Base.astro`.
  Arbre de travail séparé : `../portfolio2026-transition`.
