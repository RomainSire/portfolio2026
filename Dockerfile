# syntax=docker/dockerfile:1

# --- Étape 1 : construction ------------------------------------------------
FROM node:24-alpine AS build
WORKDIR /app

# pnpm est le seul gestionnaire du projet. La version est celle du champ
# packageManager de package.json : corepack la lit et l'active.
RUN corepack enable pnpm

# Les dépendances d'abord : la couche est réutilisée tant que le lock ne bouge pas.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# --- Étape 2 : service -----------------------------------------------------
# L'image finale ne contient que dist/ : aucun Node, aucune dépendance,
# aucun secret. Elle est immuable.
FROM nginx:1.29-alpine AS runtime

RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/site.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
