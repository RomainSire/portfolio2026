# romainsire.com

Portfolio de Romain Siré. Site statique Astro.

- **Vocabulaire du projet** : [`CONTEXT.md`](./CONTEXT.md)
- **Décisions gravées** : [`docs/adr/`](./docs/adr/)
- **Système formel** : hérité d'une charte graphique tenue hors dépôt. Son nom, « sori », est abandonné ; ses règles sont conservées — voir [ADR-0001](./docs/adr/0001-systeme-formel-sans-le-nom-sori.md)

## Développer

**Le gestionnaire de paquets du projet est pnpm, partout et sans exception** :
en local, dans le `Dockerfile` et dans la CI. Ni `npm`, ni `yarn`. La version
est épinglée par le champ `packageManager` de `package.json` ; `corepack enable
pnpm` suffit à l'installer.

```sh
pnpm install
pnpm run dev        # http://localhost:4321
pnpm run build      # -> dist/
pnpm run preview
pnpm run check      # types + schéma de contenu
```

`sharp` figure dans les dépendances alors que c'est Astro qui l'utilise : pnpm
ne remonte pas les dépendances indirectes à la racine de `node_modules`, et
`astro:assets` ne la trouverait pas. Ne pas la retirer.

`pnpm-lock.yaml` est le seul fichier de verrouillage commité. Un `package-lock.json`
ou un `yarn.lock` qui apparaît est une erreur : le supprimer, relancer
`pnpm install`. Un `preinstall` refuse d'ailleurs tout autre gestionnaire, et les
deux autres locks sont ignorés par Git pour qu'ils ne puissent pas être commités
par accident.

## Ajouter ou modifier un travail

Un travail est un fichier Markdown dans `src/content/travaux/`. Le schéma
complet est dans `src/content.config.ts` : il est strict, une erreur fait
échouer le build plutôt que de passer en silence.

Points qui comptent :

- `nature` vaut `Mission` ou `Réalisation`, jamais autre chose. La distinction
  est définie dans `CONTEXT.md` et s'affiche sur la carte.
- `ordre` fixe la position dans la liste de la page d'accueil. **L'ordre est le
  discours** : il est délibéré, pas chronologique.
- `contraintes` et `decisions` sont des listes de `{ titre, texte }`. Le format
  est contraint exprès — on répond à des questions, on ne rédige pas un texte
  libre.

### Ajouter une capture

1. Déposer le fichier dans `src/assets/work/` (WebP, au moins 1600 px de large).
2. Ajouter la ligne dans le frontmatter du travail concerné :

   ```yaml
   visuel: "../../assets/work/mon-fichier.webp"
   visuelAlt: "Description de ce que montre la capture."
   ```

3. Supprimer la ligne `sansVisuel` s'il y en avait une.

Astro se charge du redimensionnement, du format et du `srcset`. La vignette de
la liste est recadrée en 16/10 ; cadrer la capture en conséquence.

Sans `visuel`, le travail affiche un panneau typographique portant le texte de
`sansVisuel`. C'est un parti pris, pas un trou : ne pas y mettre de maquette
générique.

## Déployer

L'image finale ne contient que `dist/` servi par nginx : aucun Node, aucune
dépendance, aucun secret.

```sh
make image     # construit l'image localement
make push      # publie sur GHCR
make deploy    # à lancer sur le VPS : pull + up -d
```

`docker-compose.yml` est un **premier jet**. Avant la première mise en ligne,
il faut confirmer sur la machine :

- le nom réel du réseau Traefik (`networks.traefik.name`) ;
- le nom du résolveur ACME (`certresolver=letsencrypt`) ;
- le domaine servi et la redirection `www` → apex.

Le workflow `.github/workflows/deploy.yml` construit et publie l'image à chaque
push sur `main`. Le VPS la tire lui-même : **la voie n'est pas câblée** — webhook
(Watchtower, Diun) ou étape SSH, à trancher avec la machine sous les yeux.

## Ce que le site ne fait pas

Pas de formulaire, pas de mesure d'audience, pas de cookie, pas de ressource
tierce. C'est un choix de conception, et c'est ce qui rend la page
confidentialité vraie. Y toucher, c'est réécrire cette page et les mentions
légales.
