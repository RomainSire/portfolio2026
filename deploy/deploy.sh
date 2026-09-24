#!/bin/sh
# Copie de référence de /opt/docker/portfolio-2026/deploy.sh sur le VPS.
#
# Met en ligne une version publiée sur GHCR.
#   À la main :  ./deploy.sh 1.0.0
#   Depuis la CI : la clé SSH de déploiement est liée à ce script par une
#   commande forcée (authorized_keys) ; la version arrive alors dans
#   SSH_ORIGINAL_COMMAND, et la clé ne peut rien faire d'autre.
set -eu

cd "$(dirname "$0")"

VERSION="${1:-${SSH_ORIGINAL_COMMAND:-}}"
if ! printf '%s' "$VERSION" | grep -Eq '^[0-9]+\.[0-9]+\.[0-9]+$'; then
	echo "version invalide : « $VERSION » (attendu : X.Y.Z)" >&2
	exit 64
fi

export TAG="$VERSION"
docker compose pull
# --wait attend le healthcheck de l'image : un conteneur qui ne répond pas fait
# échouer le script, donc le job de la CI.
docker compose up -d --remove-orphans --wait
# Écrit après succès seulement : un « docker compose up » à la main relance la
# dernière version qui a fonctionné.
echo "TAG=$VERSION" > .env
docker image prune -f

echo "romainsire.com : version $VERSION en ligne"
