IMAGE ?= ghcr.io/romainsire/portfolio202609
TAG   ?= latest

.PHONY: dev build preview image push deploy check

dev:      ## Serveur de développement
	pnpm run dev

build:    ## Construction statique dans dist/
	pnpm run build

preview:  ## Sert dist/ localement
	pnpm run preview

check:    ## Vérification des types et du contenu
	pnpm run check

image:    ## Construit l'image Docker localement
	docker build -t $(IMAGE):$(TAG) .

push: image
	docker push $(IMAGE):$(TAG)

deploy:   ## À lancer sur le VPS
	docker compose pull && docker compose up -d && docker image prune -f
