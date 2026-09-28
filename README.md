# Portfolio — Nafissatou SOW

Portfolio personnel bilingue (FR / EN) d'ingénieure Data & IA.
Site 100 % statique : HTML, CSS et JavaScript « vanilla », sans framework ni étape de compilation.

- Responsive (mobile → grand écran)
- Mode clair / sombre automatique (selon le système) + bouton pour forcer
- Contenu bilingue, bascule FR ↔ EN mémorisée
- Détail de chaque projet dans une fenêtre, avec une URL partageable (`#projet/identifiant`)
- SEO : balises meta, Open Graph (aperçu LinkedIn), données structurées, sitemap
- Accessibilité : contrastes AA, navigation clavier, lien « aller au contenu », labels ARIA, animations désactivées si l'utilisateur le demande

---

## 1. Arborescence

```
mon-portfolio/
├── index.html              ← structure de la page, SEO, icônes
├── favicon.svg             ← icône de l'onglet
├── robots.txt, sitemap.xml ← pour Google
├── .nojekyll               ← indique à GitHub Pages de servir les fichiers tels quels
├── assets/
│   ├── css/styles.css      ← apparence (couleurs, polices, mise en page)
│   ├── js/content.js       ← ★ TOUS LES TEXTES (FR + EN), projets, expériences
│   ├── js/main.js          ← logique (langue, thème, animations, formulaire)
│   ├── img/photo.svg       ← photo provisoire
│   ├── img/og-image.png    ← aperçu affiché quand on partage le lien (1200×630)
│   ├── img/projets/        ← vos captures d'écran de projets
│   └── cv/                 ← votre CV PDF
├── README.md
└── CHECKLIST.md            ← ce qu'il reste à faire de votre côté
```

---

## 2. Lancer le site en local

**Option la plus simple :** double-cliquez sur `index.html`. Tout fonctionne, sauf éventuellement le formulaire.

**Option recommandée** (plus proche du site en ligne), dans un terminal :

```bash
cd ~/Desktop/mon-portfolio
python3 -m http.server 8000
```

Puis ouvrez <http://localhost:8000>. Arrêtez le serveur avec `Ctrl + C`.

Avec VS Code, l'extension **Live Server** fait la même chose (clic droit sur `index.html` → *Open with Live Server*) et recharge la page à chaque sauvegarde.

---

## 3. Personnaliser

### Modifier un texte
Tout se trouve dans **`assets/js/content.js`**. Chaque texte existe en deux versions, `fr` et `en` : pensez à modifier les deux.

### Ajouter un projet
Dans `content.js`, copiez un bloc complet de la liste `PROJECTS` (de `{` à `},`), collez-le, puis modifiez :

| Champ | Rôle |
|---|---|
| `id` | identifiant unique, sans espace ni accent (ex. `"prevision-ventes"`) |
| `categories` | filtres : `"genai"`, `"data"`, `"ml"` (un ou plusieurs) |
| `pro` | `true` affiche le badge « En entreprise » |
| `cover` | visuel généré : `chat`, `traffic`, `agents`, `flow`, `bars`, `cluster`, `tree`, `cnn`, `topics` |
| `image` | couverture choisie manuellement (facultatif ; si vide, visuel généré via `cover`) |
| `github` | lien du dépôt → bouton **Code** · `"prive"` → mention « Code confidentiel » · `""` → masqué |
| `demo` | lien d'une application en ligne → bouton **Démo** (nouvel onglet) |
| `videos` | liste de vidéos (YouTube / Loom / Vimeo ou `.mp4` local) lues dans la fenêtre du projet → bouton **Vidéo** |
| `screenshots` | liste de captures → bouton **Captures** + galerie dans le détail |
| `stack` | technos affichées en tags |
| `fr` / `en` | titre, résumé, contexte, étapes, résultats, apprentissages |


### Les boutons d'une carte projet
Chaque carte affiche **Détails** (toujours), puis **Code** et **Démo / Captures** quand l'information est renseignée :

```js
github: "https://github.com/Nafissatou172/spark-kmeans",   // ou "prive", ou ""
demo: "https://huggingface.co/spaces/...",                  // démo en ligne ou vidéo YouTube / Loom
screenshots: [
  "assets/img/projets/spark-1.png",
  "assets/img/projets/spark-2.png",
],
```

Chaque bouton (**Démo**, **Vidéo**, **Captures**) s'affiche dès que le champ correspondant est rempli. La fenêtre de détail affiche toutes les vidéos puis toutes les captures.

### Ajouter des vidéos
Les vidéos se lisent directement dans la fenêtre du projet, sans quitter le site.

**Option A — YouTube (recommandée pour les vidéos de plus d'une minute)**
1. Mettez la vidéo en ligne sur YouTube en visibilité **« Non répertoriée »** : elle n'apparaît pas dans les recherches, mais le lien fonctionne.
2. Copiez le lien de partage et ajoutez-le au projet :
   ```js
   videos: ["https://youtu.be/XXXXXXXXXXX"],
   ```
Les liens Loom (`https://www.loom.com/share/...`) et Vimeo fonctionnent de la même façon.

**Option B — fichier dans le site (vidéos courtes, moins de 20 Mo)**
1. Exportez la vidéo en **MP4** (H.264, 720p). Pour réduire sa taille, utilisez HandBrake (gratuit), préréglage *Fast 720p30*.
2. Placez-la dans `assets/videos/` (ex. `assets/videos/sumo-simulation.mp4`).
3. Ajoutez son chemin :
   ```js
   videos: ["assets/videos/sumo-simulation.mp4"],
   ```

Vous pouvez mélanger les deux options et mettre plusieurs vidéos par projet :
```js
videos: ["https://youtu.be/XXXXXXXXXXX", "assets/videos/sumo-simulation.mp4"],
```

> ⚠️ GitHub refuse les fichiers de plus de 100 Mo et ralentit au-delà de quelques centaines de Mo au total : réservez l'option B aux clips courts.
> Les vidéos YouTube ne se lisent pas si vous ouvrez `index.html` par double-clic : lancez le serveur local (`python3 -m http.server 8000`).
> Un **GIF** court (une animation SUMO, par exemple) peut aussi être ajouté comme une simple capture dans `screenshots`.

### Ajouter des captures d'écran
1. Placez les images dans `assets/img/projets/` (format paysage **16:9**, environ 1280×720, en `.webp` ou `.jpg` de moins de 200 Ko chacune).
2. Nommez-les par projet : `ter-1.png`, `ter-2.png`…
3. Ajoutez leurs chemins dans `screenshots: [...]`. Elles apparaissent dans la galerie du projet ; la couverture de la carte, elle, se règle séparément avec `image`.

### Changer la photo
Placez `photo.jpg` (portrait **5:6**, par exemple 800×960) dans `assets/img/`, puis dans `content.js` :
```js
photo: "assets/img/photo.jpg",
```

### Changer les couleurs
En haut de `assets/css/styles.css` :
- **section 1** : couleurs du mode clair
- **section 2** : couleurs du mode sombre (écrites deux fois, gardez-les identiques)

Palette actuelle (inspirée du thème *Personal Portfolio* de ThemeWagon) :

| Variable | Clair | Sombre | Rôle |
|---|---|---|---|
| `--heading` | `#000A2D` | `#FFFFFF` | titres |
| `--text` | `#10285D` | `#E6E9F5` | texte |
| `--primary` | `#1F2B7B` | `#B7C0F0` | tags, sous-titre |
| `--accent` | `#CC3D33` | `#FF7A6E` | boutons, liens, petit texte, survol des cartes |
| `--accent-bright` | `#EC5B53` | `#FF7A6E` | icônes, filets, cadre photo (décoratif) |
| `--accent-soft` | `#FFF4F4` | corail 12 % | ronds des icônes, encadrés |

`--accent` est un peu plus foncé que le corail d'origine (`#EC5B53`) pour garder un contraste lisible (AA) avec le texte blanc des boutons.
Si vous changez l'accent, vérifiez le contraste sur <https://webaim.org/resources/contrastchecker/> (au moins 4.5:1).

### Changer les polices
Remplacez le lien Google Fonts dans `index.html`, puis les variables `--font-display` (Rufina, titres), `--font-body` (Rubik) et `--font-label` (petits libellés) dans `styles.css`.

### Ajouter une icône
Allez sur <https://lucide.dev>, copiez le contenu SVG d'une icône (les `<path>`, `<circle>`…) et ajoutez-le dans `index.html` sous la forme :
```html
<symbol id="i-mon-icone" viewBox="0 0 24 24"> ...contenu... </symbol>
```
Utilisez-la ensuite avec `icon: "mon-icone"` dans `content.js`.

---

## 4. Formulaire de contact (Formspree, gratuit)

1. Créez un compte sur <https://formspree.io> avec `nafissah172@gmail.com`.
2. **New Form**, puis copiez l'identifiant de l'URL fournie (`https://formspree.io/f/`**`xyzabcd`**).
3. Dans `content.js`, renseignez : `formspreeId: "xyzabcd",`
4. Mettez le site en ligne et envoyez-vous un message de test. Le premier envoi demande une confirmation par email.

Le plan gratuit permet 50 messages par mois. Tant que `formspreeId` est vide, le formulaire invite à écrire directement par email.

---

## 5. Déployer

### Option A — GitHub Pages (recommandée)

Nommer le dépôt **`Nafissatou172.github.io`** donne l'adresse la plus courte, **https://nafissatou172.github.io/**. Les balises SEO du site sont déjà réglées sur cette adresse.

1. Sur GitHub : **New repository**, nom `Nafissatou172.github.io`, visibilité **Public**, sans README.
2. Dans le terminal :
   ```bash
   cd ~/Desktop/mon-portfolio
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/Nafissatou172/Nafissatou172.github.io.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages**, *Source* : `Deploy from a branch`, *Branch* : `main` / `(root)`, puis **Save**.
4. Le site est en ligne après 1 à 2 minutes.

**Mettre à jour le site :**
```bash
git add .
git commit -m "Ajout des captures d'écran"
git push
```

> Si vous choisissez un autre nom de dépôt (ex. `portfolio`), l'adresse devient `https://nafissatou172.github.io/portfolio/`. Remplacez alors `https://nafissatou172.github.io/` par cette adresse dans `index.html` (balises `canonical`, `og:url`, `og:image`, bloc JSON-LD), `robots.txt` et `sitemap.xml`.

### Option B — Vercel

1. Poussez le projet sur GitHub (étape 2 ci-dessus, avec le nom de dépôt de votre choix).
2. Sur <https://vercel.com>, connectez-vous avec GitHub, cliquez sur **Add New → Project**, sélectionnez le dépôt, laissez *Framework Preset* sur **Other**, puis **Deploy**.
3. Remplacez ensuite l'adresse `nafissatou172.github.io` par votre adresse Vercel dans les fichiers cités plus haut.

Chaque `git push` redéploie automatiquement le site.

---

## 6. Vérifier après mise en ligne

- **Aperçu LinkedIn :** <https://www.linkedin.com/post-inspector/>. Collez l'URL du site. Relancez l'inspection après chaque modification de l'image de partage.
- **Performance et accessibilité :** dans Chrome, clic droit → *Inspecter* → onglet **Lighthouse** → *Analyze page load*.
- **Mobile :** dans l'inspecteur Chrome, l'icône téléphone simule différentes tailles d'écran.

## 7. Régénérer l'image de partage (`og-image.png`)

L'image de partage (1200×630) a été générée à partir d'une page HTML. Pour la modifier, utilisez un outil comme Canva (modèle « Publication LinkedIn »), exportez-la en PNG 1200×630 et remplacez `assets/img/og-image.png`.
