# Rédaction finale

Type: task
Status: resolved
Blocked by: 08

## Question

Écrire ce que la carte a décidé, prêt à implémenter :

- la spec consolidée, `.scratch/identite-sans-monogramme/spec.md` (marque,
  typographie et règle des labels, palette bleue, pastille, favicon, image OG,
  retrait du tracé), qui renvoie à chaque ticket résolu plutôt que de le
  recopier ;
- le nouvel ADR du remplacement du monogramme, qui remplace l'ADR-0005 et
  amende les ADR-0004 et 0003, comme fixé par « Sort du tracé » ;
- les entrées Monogramme, Tracé, Apparition, Révélation et Système formel de
  `CONTEXT.md`.

## Contexte

- Décisions : la section « Decisions so far » de `map.md`, et le détail dans
  chaque ticket résolu (01 à 08).
- « Transition de page » ne change rien : le fondu reste, l'ADR-0003 et
  l'entrée Galerie ne bougent pas à ce titre.
- Protocole ADR et glossaire : skill « domain-modeling »,
  `docs/agents/domain.md`.

## Answer

Écrit :

- **Spec** : `spec.md`, en huit parties (typographie, règle des labels,
  marque, favicon, image OG, palette bleue, pastille, retrait du tracé), avec
  les vérifications. Chaque partie renvoie à son ticket.
- **ADR-0006** (`docs/adr/0006-une-identite-sans-monogramme.md`) : remplace
  l'ADR-0005, amende les ADR-0004 et 0003 comme fixé par « Sort du tracé »,
  et amende aussi l'ADR-0001, dont la dernière phrase disait que le
  monogramme « reste ». Frontmatter des quatre ADR mis à jour ; leur corps
  n'est pas réécrit.
- **`CONTEXT.md`** : entrées Monogramme et Tracé supprimées ; Marque
  nominale devient toute la marque (nom + point shu) et dit pourquoi on ne
  parle plus de logo ni de monogramme ; Apparition n'en compte plus qu'une ;
  Révélation ne s'oppose plus au tracé ; Système formel : « le monospace
  tient les données ».

Choix faits en rédigeant, à valider à la relecture :

- valeurs de travail du prototype fixées telles quelles (données en mono
  12 px, titres en sans 13 px 500, navigation en sans 13 px 400, nom du
  header 15 px 600) ; graisses servies : sans 400–600, mono 400–500 ;
- le jeton de couleur `--seal` est renommé `--shu-point`, pour qu'aucun
  « sceau » ne survive dans le code ;
- le ticket de retrait provisoire ne touche plus à `CONTEXT.md`, déjà à
  jour en version définitive.
