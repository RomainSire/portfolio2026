# Choix de la typographie

Type: prototype
Status: resolved
Blocked by: 01, 02

## Question

Parmi les candidats retenus par la recherche, filtrés par le brief du
diagnostic, quel couple sans + mono remplace Geist ? Prototype : les mêmes
pages réelles (accueil Nuit, À propos Galerie, une étude de cas) composées
avec 3 ou 4 couples, à comparer côte à côte.

## Contexte

- Brief du diagnostic : `issues/01-diagnostic-du-fait-ia.md`. Le prototype
  doit aussi montrer la nouvelle règle des labels (élément B : mono réservée
  aux données, en bas de casse, titres de section en sans) et la pastille en
  bas de casse (élément C).
- Prototype : branche `prototype/choix-typographie`
  (`src/components/PrototypeTypo.astro`, `?variant=` sur les vraies pages).

## Answer

**Overpass + Overpass Mono** remplacent Geist et Geist Mono.

Finale entre Overpass et Recursive. Recursive est très stylée et colle à la
charte, mais elle fait trop « mono » : sans et mono partagent le même dessin,
on ne voit pas assez la différence entre les deux, et le partage mono/sans
ne se lit plus. Overpass garde deux voix distinctes tout en restant dans
*droit + arc* : c'est la meilleure pour le portfolio et la charte actuelle.
Geist, Sono et Iosevka Charon n'ont pas été retenues.

Le prototype appliquait aussi la nouvelle règle des labels du diagnostic, et
Romain n'a fait aucune remarque dessus :

- mono réservée aux données (fiche, nature, période, secteur, stack,
  numéros d'index, date de mise à jour), en bas de casse, sans
  interlettrage ;
- titres de section, navigation, fil d'Ariane et intitulés en sans ;
- pastille en bas de casse avec le nouveau texte. Elle reste en mono dans
  le prototype ; le passage au sans n'a pas été demandé.

Les corps et graisses du prototype (mono à 12 px, titres sans à 13 px en
500) sont des valeurs de travail, à fixer dans la spec.

Faits pour la suite : Overpass est sous OFL 1.1 sans nom réservé
(sous-ensemble et instanciation permis). Ses axes sont `wght` 100–900 pour
le sans et 300–700 pour le mono, et elle couvre U+202F. Il faudra livrer
`OFL.txt` avec les woff2 et garder Ÿ dans le sous-ensemble (voir
« Typographies libres candidates »). Overpass Mono est large : à 12 px, la
pastille et les puces de stack prennent plus de place qu'avec Geist Mono.
