# portfolio202609

## Gestionnaire de paquets

pnpm, partout : en local, dans le `Dockerfile`, dans la CI. Toute commande écrite
dans un fichier du repo — `Makefile`, `Dockerfile`, workflow, documentation —
s'écrit avec `pnpm`. `npx <paquet>` devient `pnpm dlx <paquet>` ; un binaire
local s'appelle par `pnpm exec`.

`sharp` figure en dépendance directe alors que c'est Astro qui l'utilise : pnpm
ne remonte pas les dépendances indirectes à la racine de `node_modules`, et
`astro:assets` ne la trouve plus. La retirer casse le build de l'image.

## Vocabulaire et décisions

Avant de toucher à une zone du code, lire `CONTEXT.md` (le glossaire) et les ADR
de `docs/adr/` qui la concernent, et nommer les concepts du domaine avec les
termes du glossaire. Protocole complet : `docs/agents/domain.md`.

## Tickets

Specs et tickets sont des fichiers markdown sous `.scratch/<feature>/`. Pour en
publier un, en lire un, ou tenir une carte de wayfinder :
`docs/agents/issue-tracker.md`.

L'état de triage est la ligne `Status:` en tête de ticket ; les cinq valeurs
possibles sont dans `docs/agents/triage-labels.md`.
