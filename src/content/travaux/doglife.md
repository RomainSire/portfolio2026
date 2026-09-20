---
titre: "Doglife"
nature: "Réalisation"
organisation: "Doglife — Montpellier"
secteur: "Éducation canine"
periode: "2024, puis 2026"
accroche: "Une landing page livrée, puis un serveur compromis à reprendre deux ans plus tard."
role: >-
  Conception, maquettage, développement et mise en ligne. Puis, deuxième
  mission au forfait : reprise et assainissement du serveur.
ordre: 4
visuel: "../../assets/work/doglife.webp"
visuelAlt: "Page d'accueil du site Doglife."
stack: ["Astro", "TypeScript", "React", "Figma"]
contraintes:
  - titre: "Un client seul, sans budget de maintenance"
    texte: >-
      Un éducateur canin indépendant. Toute solution qui suppose un développeur
      d'astreinte, ou un abonnement de plus à surveiller, tombera en panne le
      jour où elle ne sera plus payée.
  - titre: "Un intrus déjà sur la machine"
    texte: >-
      Deux ans après la livraison, le client rappelle : un ami hébergeait ses
      propres affaires sur le même serveur, dont un vieux WordPress laissé sans
      mise à jour. Ce WordPress a été piraté. Le problème n'était pas mon site,
      il était à côté — et sur la même machine.
decisions:
  - titre: "Des îlots, pas une application"
    texte: >-
      Le site est en Astro, statique, avec quelques îlots React là où
      l'interaction le justifie. Le reste ne charge aucun JavaScript.
  - titre: "Un back-end que le client peut s'offrir : aucun"
    texte: >-
      Airtable pour le contenu qu'il fait vivre, Formspree pour les demandes de
      contact. Pas de serveur applicatif, donc pas de serveur applicatif à
      maintenir, à mettre à jour ni à sécuriser. C'est exactement ce qui a
      manqué au WordPress d'à côté.
  - titre: "Expulser, puis faire le ménage"
    texte: >-
      Sur la deuxième mission : sortir les intrus, remettre le serveur au
      propre, et supprimer ce qui n'avait rien à y faire. La cause de
      l'incident n'était pas une faille exotique, c'était un logiciel installé
      et oublié.
resultat: >-
  Site en ligne depuis 2024. Toujours client aujourd'hui : c'est lui qui est
  revenu pour la seconde mission.
liens:
  - label: "Voir le site"
    url: "https://doglife34.fr/"
  - label: "Dépôt"
    url: ""
    note: "Privé."
---

Doglife est une landing page pour un éducateur canin installé à Montpellier,
qui travaille en méthodes douces et positives.
