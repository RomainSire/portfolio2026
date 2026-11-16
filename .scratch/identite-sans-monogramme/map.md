# Carte : une identité sans le monogramme

Labels: wayfinder:map

## Destination

Une spec de l'identité qui remplace le monogramme SR (la marque, le sort du
tracé, la typographie, et ce qu'on change de la charte pour qu'elle ne fasse
plus « générée »), avec ADR et `CONTEXT.md` à jour, prête à implémenter.
L'implémentation reste hors carte.

## Notes

- Origine : le monogramme vient d'Adobe Stock. Sa licence interdit l'usage
  comme logo ou marque, même payante. Romain ne veut pas régulariser : le
  signe disparaît entièrement.
- Le retrait provisoire se fait **hors carte**, tout de suite :
  `.scratch/retrait-monogramme/`. La carte décide sans urgence.
- Le **système formel** est conservé (palette, rayon diagonal, règle du shu,
  filets, courbe unique, droit + arc, partage mono/sans). Pour la palette,
  ce sont les noms, les rôles et les relations qui sont conservés ; les
  valeurs hexadécimales sont ajustables. On remplace les éléments qui font
  générique, autant qu'il le faut, sans aller jusqu'au redesign complet.
- Toute ressource nouvelle (typo, forme) doit être libre sans ambiguïté :
  OFL ou création propre, auto-hébergée.
- Lire `CONTEXT.md` et les ADR 0001 à 0005 avant chaque ticket. Grilling :
  skills « grilling » et « domain-modeling ». Prototype : skill « prototype ».
- Préférence de Romain : il n'est pas designer et veut réagir sur pièces
  (candidats concrets), pas sur des descriptions.

## Decisions so far

<!-- une ligne par ticket résolu -->

- [Diagnostic : qu'est-ce qui fait « AI made » ?](issues/01-diagnostic-du-fait-ia.md) : quatre éléments à changer, le couple Geist, les labels mono en capitales (mono réservée aux données, en bas de casse), la pastille et la température de l'encre et du washi ; le hero, les filets et le point shu restent.
- [Typographies libres candidates](issues/02-typographies-libres-candidates.md) : 12 couples OFL vérifiés ; tête de liste Overpass, Sono, Iosevka Charon, Recursive.
- [Choix de la typographie](issues/03-choix-de-la-typographie.md) : Overpass + Overpass Mono ; Recursive écartée car sans et mono trop proches ; la règle des labels du prototype n'a pas été contestée.
- [Choix de la marque](issues/04-choix-de-la-marque.md) : le nom seul, « Romain Siré » ponctué du point shu, sans signe figuratif ; favicon « rs » + point shu ; seule l'image OG porte un signe, le rayon diagonal en deux coins ; le monogramme disparaît du hero, de la 404, d'À propos et des filigranes.
- [Sort du tracé](issues/05-sort-du-trace.md) : le tracé disparaît sans remplaçant, la révélation devient la seule apparition ; `--dur-seal` supprimé ; le nouvel ADR remplace 0005 et amende 0004 et 0003 ; entrée Tracé retirée du glossaire. L'étude de cas du portfolio est corrigée dans le retrait provisoire.
- [Température de l'encre et du washi](issues/06-temperature-de-l-encre-et-du-washi.md) : bleu (OKLCH 250) ; encre teintée (niveau 2, `#090f15`), washi presque neutre (niveau 1, `#ebf2fb`) ; acier, cendre, kasumi suivent ; hamon et shu inchangés ; AA tenu partout.
- [Élément personnel](issues/07-element-personnel.md) : aucun ; jugé sur le rendu combiné, le site ne paraît plus généré. « Trop froid » voulait dire impersonnel, pas une température.

## Not yet specified

- **La rédaction finale** : spec consolidée, nouvel ADR (remplacement du
  monogramme ; ce qu'il fait d'ADR-0003, 0004 et 0005 est fixé par « Sort du
  tracé »), entrées Monogramme / Tracé / Apparition / Révélation / Système
  formel de `CONTEXT.md`. Elle attend « Transition de page »
  (`issues/08-transition-de-page.md`), qui peut amender ADR-0003 et l'entrée
  Galerie.

## Out of scope

- Régulariser la licence Adobe Stock : exclu par Romain.
- Un redesign complet repartant d'une page blanche : déjà écarté par
  ADR-0001, et confirmé ici.
- Une photo de Romain sur le site.
- La rédaction du site : on ne touche pas au texte, à deux exceptions près :
  la ligne de la pastille de disponibilité (voir le diagnostic), et les trois
  phrases de l'étude de cas du portfolio qui citent le monogramme, corrigées
  dans le retrait provisoire (voir « Sort du tracé »).
- La refonte des supports hors site (charte PDF v1.0, bannière LinkedIn, CV) :
  ils suivront la spec, ailleurs. La charte de référence devient
  `CONTEXT.md` + ADR ; pas de réédition du PDF.
