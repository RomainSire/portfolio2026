---
titre: "Thess"
nature: "Mission"
organisation: "Thess — Therapy Smart System"
secteur: "Santé — télésurveillance de patients"
periode: "3 ans"
accroche: "Une application de télésurveillance médicale, et un socle technique à faire migrer sans jamais l'arrêter."
role: >-
  Développement front, au sein d'une équipe Scrum de dix personnes. En CDI,
  puis en freelance. Nouvelles fonctionnalités, maintenance, tests, et le
  chantier de migration du code historique vers TypeScript, puis vers React.
ordre: 3
sansVisuel: "Application médicale — captures non diffusables."
stack: ["TypeScript", "React", "SASS", "JSX"]
contraintes:
  - titre: "Migrer sans jamais tout arrêter"
    texte: >-
      L'application reposait sur un socle JavaScript écrit en interne, plus
      tard porté en TypeScript. Le réécrire d'un bloc était hors de question :
      c'est un produit médical, il tourne chez des patients. L'ancien code et
      le nouveau devaient donc fonctionner côte à côte pendant toute la durée
      de la migration — pas quelques semaines, des années.
  - titre: "Le domaine ne pardonne pas l'à-peu-près"
    texte: >-
      Le produit suit des patients à domicile et pilote un distributeur de
      médicaments. Ici, une erreur ne se rattrape pas au sprint suivant.
decisions:
  - titre: "Ouvrir le capot du runtime plutôt que le contourner"
    texte: >-
      Pour faire cohabiter les deux mondes, le lead technique avait écrit un
      runtime JSX maison : le rendu se déclarait en JSX, mais sans React. Ce
      runtime n'est pas de moi. Ce qui est de moi, c'est de l'avoir ouvert,
      lu, compris, et d'y avoir porté des modifications — plutôt que de le
      traiter comme une boîte noire qu'on apprend à éviter.
  - titre: "Avancer par pans, pas par grand soir"
    texte: >-
      La migration s'est faite écran par écran, à fonctionnalités constantes,
      avec les deux systèmes en production simultanément.
resultat: >-
  Trois ans sur le produit, du développement de fonctionnalités à la
  maintenance du socle. Une application qui a un effet direct sur le suivi des
  patients.
liens:
  - label: "Le produit"
    url: "https://www.lavaleriane.fr/solutions/thess"
  - label: "Dépôt"
    url: ""
    note: "Privé."
---

Thess — Therapy Smart System — est une solution de télésurveillance de
patients, adossée à un distributeur de médicaments sécurisé et réglable.
