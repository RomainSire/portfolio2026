# Température de l'encre et du washi

Type: prototype
Status: resolved
Blocked by:

## Question

De quelle teinte, et avec quelle intensité, colore-t-on l'encre et le washi
pour que le site paraisse moins froid ? Mini-prototype : plusieurs couples
encre/washi, chacun dans une teinte (ocre, bleu, vert, rouge, etc.) et à deux
ou trois intensités, du presque neutre au nettement teinté. Ils sont posés sur
les vraies pages (accueil Nuit, À propos Galerie) avec les autres couleurs de
la palette (acier, cendre, kasumi, hamon, shu) et les contrastes AA vérifiés.
Les noms et les rôles de la palette ne changent pas, seules les valeurs
bougent (voir « Diagnostic : qu'est-ce qui fait « AI made » ? »).

## Contexte

- Diagnostic : `issues/01-diagnostic-du-fait-ia.md`, élément G.
- Prototype : branche `prototype/temperature-encre`
  (`src/components/PrototypeTemperature.astro` : ocre et bleu côte à côte
  dans deux iframes, intensité 1 à 3, panneau des contrastes).

## Answer

**Le bleu** (teinte OKLCH 250), retenu face à l'ocre en comparaison directe,
avec une intensité différente selon le registre où la couleur sert de fond :

- **L'encre**, fond du registre Nuit (accueil, travaux, études de cas, 404),
  est au niveau 2, **teinté**. L'acier et la cendre suivent l'encre.
- **Le washi**, fond du registre Galerie (À propos, contact, pages légales),
  est au niveau 1, **presque neutre**. Le kasumi et le fond de panneau Galerie
  suivent le washi.

Chaque couleur garde une seule valeur, quel que soit le registre : l'encre
qui sert de texte en Galerie est la même que celle du fond Nuit. Les noms,
les rôles et les relations de la palette ne changent pas.

### Valeurs

| Couleur | Actuelle | Nouvelle | OKLCH (L, C, h) |
| --- | --- | --- | --- |
| encre | `#0b0d0e` | `#090f15` | 0,165 · 0,016 · 249 |
| acier | `#2a2e30` | `#262c32` | 0,290 · 0,014 · 248 |
| cendre | `#767b7d` | `#787c81` | 0,585 · 0,009 · 254 |
| cendre profonde | `#656a6c` | `#686c71` | 0,529 · 0,009 · 254 |
| kasumi | `#c9c6be` | `#c0c6cd` | 0,824 · 0,012 · 252 |
| washi | `#f4f1ea` | `#ebf2fb` | 0,958 · 0,014 · 255 |
| panneau Galerie | `#fffdf8` | `#f9fcff` | 0,990 · 0,005 · 248 |
| hamon | `#8fa8b2` | inchangé | |
| hamon profond | `#455c66` | inchangé | |
| shu | `#c8402a` | inchangé | |
| shu texte | `#a33320` | inchangé | |

La cendre profonde est assombrie juste assez pour rester au-dessus de 4,5:1
sur le nouveau washi. Le hamon profond et le shu texte passent sans retouche.

### Contrastes (WCAG)

- Nuit : texte washi sur encre 17,08:1 ; cendre 4,58:1 ; lien hamon 7,71:1 ;
  point shu 3,87:1 (élément non textuel, seuil 3:1) ; lien d'évitement sur
  acier 12,51:1.
- Galerie : texte encre sur washi 17,08:1 ; cendre profonde 4,69:1 ;
  lien hamon profond 6,26:1 ; shu texte 6,10:1 ; encre sur panneau 18,70:1.

### Pour l'implémentation

- `--bg-raised` du registre Galerie et la couleur `theme-color` de
  `Base.astro` sont des codes en dur : ils prennent les nouvelles valeurs
  (panneau Galerie, washi, encre).
- Les commentaires de `tokens.css` qui citent les ratios de la cendre
  profonde (4,86:1) et du hamon profond sont à mettre à jour.
- Avec une encre bleue, le shu devient le seul accent chaud du site.
