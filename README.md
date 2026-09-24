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

Une version se livre en poussant son tag :

```sh
pnpm version 1.1.0 --no-git-tag-version   # met à jour package.json
# commit, puis :
git tag v1.1.0 && git push origin main v1.1.0
```

Le workflow `.github/workflows/deploy.yml` vérifie chaque push sur `main`. Sur
un tag `vX.Y.Z`, et seulement là, il publie l'image sur GHCR
(`ghcr.io/romainsire/portfolio2026:X.Y.Z`, plus `latest`) puis la met en ligne
par SSH. Le tag doit correspondre au champ `version` de `package.json`, sinon
le job échoue.

Côté VPS, `/opt/docker/portfolio-2026/` contient une copie de
[`deploy/docker-compose.yml`](./deploy/docker-compose.yml) et de
[`deploy/deploy.sh`](./deploy/deploy.sh). La clé SSH de la CI est liée à
`deploy.sh` par une commande forcée dans `authorized_keys` : elle ne peut rien
faire d'autre que livrer une version. Une modification de ces deux fichiers
dans le dépôt doit être recopiée à la main sur le VPS.

Revenir à une version précédente, sur le VPS :

```sh
/opt/docker/portfolio-2026/deploy.sh 1.0.0
```

Secrets du dépôt : `DEPLOY_SSH_KEY`,
`DEPLOY_KNOWN_HOSTS`, `DEPLOY_TARGET` (`ssh://utilisateur@hôte:port`).

## Ce que le site ne fait pas

Pas de formulaire, pas de mesure d'audience, pas de cookie, pas de ressource
tierce. C'est un choix de conception, et c'est ce qui rend la page
confidentialité vraie. Y toucher, c'est réécrire cette page et les mentions
légales.
