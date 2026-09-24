---
status: accepted
---

# Le tracé se joue à chaque chargement de document, plus une fois par session

ADR-0002 bornait le tracé du monogramme à une occurrence par session, et
ADR-0004 a gardé cette borne telle quelle. Elle reposait sur l'idée qu'une
exception se raréfie pour rester une exception. ADR-0004 a changé ce
fondement : le tracé n'est plus une exception de durée, c'est une
**apparition**, singulière par sa nature. La borne, elle, n'a pas été
réexaminée.

À l'usage, elle prive du tracé les mauvaises personnes. Le tracé n'existe que
sur l'accueil, et le visiteur qui y arrive le voit quelle que soit la borne.
Elle n'agit que sur deux cas. Le premier est celui qui **revient** sur
l'accueil pendant sa visite. Il a déjà vu le tracé et vient de déclencher la
navigation lui-même ; pour lui, 900 ms de signe qui se dessine se lisent comme
un accueil qui tarde. Le second est celui qui **recharge** la page ou rouvre
le site dans le même onglet : la session le prive alors d'un geste qu'il
redemande explicitement.

Nous bornons donc le tracé au **document** et non plus à la session : il se
joue à chaque chargement complet de la page (arrivée directe, nouvel onglet,
rechargement) et jamais sur une navigation interne. Un sceau se pose une fois
par visite, et une visite commence au chargement.

## Consequences

Le `sessionStorage` disparaît. Un document neuf n'a pas l'attribut
`data-seal`, le tracé s'y joue. `astro:after-swap` pose `data-seal="done"`
sur chaque page remplacée par le `ClientRouter`, avant son premier rendu,
comme l'exigeait déjà ADR-0003 pour ne pas retracer le sceau à chaque
navigation. Seul le déclencheur change : on ne restaure plus un état
mémorisé, on le déduit du type de chargement. Le mécanisme d'ADR-0003 reste
entier ; seule la borne qu'il protège a changé.

La clé `seal` que d'anciennes visites ont laissée dans le `sessionStorage`
n'est plus lue. Elle disparaît avec l'onglet.

Le retour arrière du navigateur vers l'accueil passe par le `ClientRouter` :
il ne retrace pas le signe. Une page restaurée depuis le cache du navigateur
(*bfcache*) réapparaît dans l'état où on l'a quittée, sceau posé.

Cette décision remplace la seule borne « une occurrence par session »
d'ADR-0004 ; le reste de cet ADR (les deux familles, les jetons, la ligne
médiane distincte du contour) est inchangé.
