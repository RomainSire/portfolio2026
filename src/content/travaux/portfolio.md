---
titre: "Ce portfolio"
nature: "Réalisation"
organisation: "Personnel"
secteur: "Identité et site"
periode: "2026"
accroche: "Une charte graphique déduite d'un monogramme, et un site qui tient sans framework."
role: "Charte graphique, conception, développement, déploiement."
ordre: 5
visuelAlt: "Page d'accueil de ce site."
sansVisuel: "Vous la regardez."
stack: ["Astro", "TypeScript", "CSS", "Docker", "nginx"]
contraintes:
  - titre: "Le précédent portfolio avait vieilli en deux ans"
    texte: >-
      Il était en néo-brutalisme. Le style était juste au moment où je l'ai
      choisi, et daté peu après. Refaire un site à la mode du moment, c'est
      reprogrammer la même obsolescence.
  - titre: "Un système, pas une préférence"
    texte: >-
      Une forme ne tient dans le temps que si elle est déductible d'une règle.
      Encore faut-il écrire la règle avant de dessiner.
decisions:
  - titre: "Droit + arc, et rien d'autre"
    texte: >-
      Toute forme du système est soit un segment droit, soit un arc du rayon de
      référence. La règle vient du monogramme, qui est construit ainsi ; elle
      gouverne ensuite toute l'interface. Le rayon s'applique en
      diagonale — coin supérieur gauche et coin inférieur droit arrondis, les
      deux autres à angle vif. Quatre coins identiques sont interdits :
      l'asymétrie est la signature.
  - titre: "Une seule courbe d'accélération"
    texte: >-
      Attaque franche, sortie courbe, partout dans le site. Rien au-delà de
      320 ms, aucun rebond. Un élément qui apparaît entre par un déplacement,
      jamais par un simple fondu — une page, elle, n'a nulle part où se
      déplacer : elle est remplacée, et c'est le seul endroit où le fondu est
      la règle. Une seule exception aux durées, écrite et assumée : le tracé du
      monogramme au premier chargement.
  - titre: "Aucun framework d'interface"
    texte: >-
      Astro, et rien au-dessus. Douze pages statiques n'ont besoin d'aucun
      runtime. Le site sert moins de sept kilo-octets de JavaScript compressé,
      dont les deux tiers pour le routeur qui enchaîne les pages. Le reste fait
      trois choses : révéler les blocs à l'entrée dans le cadre, précharger les
      liens au survol, et reconstituer l'adresse email qui n'est pas écrite en
      clair dans le HTML. Rien d'autre. Le corollaire :
      pas de formulaire, pas de mesure d'audience, pas de cookie — donc aucune
      donnée personnelle traitée, et une page de confidentialité qui tient en
      cinq lignes, et qui dit vrai.
resultat: >-
  Image nginx immuable, construite par intégration continue, déployée par
  conteneur. Le site que vous lisez.
liens:
  - label: "Voir le code"
    url: "https://github.com/RomainSire/portfolio202609"
---

Le monogramme est antérieur à tout le reste : il existait avant la charte, et
c'est de lui que la charte a été déduite. Un S et un R, monoline, faits de
segments droits et d'arcs d'un rayon unique.
