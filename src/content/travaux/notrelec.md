---
titre: "Notrelec"
nature: "Mission"
organisation: "Notrelec — Toulouse"
secteur: "Énergie — autoconsommation collective"
periode: "Depuis 2024"
accroche: "La plateforme qui monte et administre des communautés d'autoconsommation d'énergie renouvelable."
role: >-
  Développement front, en régie, au sein d'une petite équipe. Quelques
  contributions côté back. Design d'interface, déploiement, formation
  d'alternants.
ordre: 1
visuel: "../../assets/work/notrelec.webp"
visuelAlt: "Interface de la plateforme Notrelec."
stack: ["TypeScript", "React", "Tailwind", "TanStack Query", "Vite", "NestJS"]
contraintes:
  - titre: "Le mandat ENEDIS est un point de non-retour"
    texte: >-
      Les données de comptage n'arrivent que par mandat ENEDIS. Se tromper sur
      un mandat ne produit pas un bug : l'accès est coupé, et sans accès il n'y
      a plus de plateforme. C'est la contrainte qui hiérarchise toutes les
      autres — une fonctionnalité qui touche au mandat ne se livre pas comme
      une autre.
  - titre: "L'échelle arrive d'un coup, pas progressivement"
    texte: >-
      Un courtier qui entre sur la plateforme n'apporte pas dix compteurs : il
      en apporte plusieurs milliers, parfois plusieurs dizaines de milliers, à
      intégrer en une fois. La montée en charge n'est pas une courbe, c'est une
      marche. Les écrans et les traitements doivent tenir le volume dès le
      premier client, pas au bout d'un an.
decisions:
  - titre: "Porter plusieurs casquettes plutôt qu'attendre"
    texte: >-
      L'équipe est petite et le périmètre large. Plutôt que de rester sur le
      seul front, j'ai pris ce qui bloquait : des endpoints, des contrôleurs et
      des services côté NestJS, le design des écrans, le déploiement. Une
      dizaine de contributions back, courtes et ciblées — pas de refonte.
  - titre: "Former plutôt que centraliser"
    texte: >-
      Sur une équipe de cette taille, un développeur qui garde son domaine pour
      lui devient un goulot d'étranglement. J'ai formé les alternants sur le front
      pour que les écrans puissent avancer sans moi.
  - titre: "Aligner l'agent avant de le laisser coder"
    texte: >-
      Je développe récemment avec un agent IA : une conception détaillée d'abord, un agent aligné sur le besoin avant la première ligne, puis relecture du code et tests dans l'interface. Quand le cadrage est bon, il y a rarement besoin d'y revenir. L'autre développeur expérimenté de l'équipe était arrivé seul à la même méthode, et je l'ai transmise à l'alternante.
resultat: >-
  Mission longue, toujours en cours. Le secteur — les énergies renouvelables —
  est celui où j'ai passé les dix ans qui ont précédé le développement.
liens:
  - label: "Landing page de la société"
    url: "https://notrelec.fr/"
  - label: "Dépôt"
    url: ""
    note: "Privé."
---

Notrelec monte et administre des communautés d'autoconsommation collective :
des producteurs d'électricité renouvelable et des consommateurs réunis autour
d'un même périmètre, avec une clé de répartition à tenir et des compteurs à
suivre. La plateforme fait le lien entre les deux.
