IMAGE ?= ghcr.io/romainsire/portfolio2026
TAG   ?= latest

.PHONY: dev build preview image push check

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
