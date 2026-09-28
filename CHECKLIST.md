# Checklist — à faire de votre côté

## Avant la mise en ligne (indispensable)

- [ ] **CV PDF** : placer une version générique « Data & IA » dans `assets/cv/` sous le nom `CV-Nafissatou-SOW.pdf`.
      Sans ce fichier, le bouton « Télécharger mon CV » ne fonctionne pas.
      Si vous avez un CV en anglais, ajoutez `CV-Nafissatou-SOW-EN.pdf` et modifiez `SITE.cv.en` dans `content.js`.
- [ ] **Relire tout le contenu** de `assets/js/content.js`, en français et en anglais.
      Vérifiez surtout que chaque techno citée (R, TensorFlow, MARL, PyTorch…) est une compétence que vous pouvez défendre en entretien. Supprimez sans hésiter celles qui ne le sont pas.
- [ ] **Projet feux de circulation** : ajouter des résultats chiffrés si vous pouvez les partager (ex. « −X % de temps d'attente moyen par rapport aux feux fixes »).
- [ ] **Formspree** : créer le formulaire et renseigner `formspreeId` (voir README §4).

## Juste après la mise en ligne

- [ ] Envoyer un message de test via le formulaire, puis confirmer l'email de Formspree.
- [ ] Tester l'aperçu LinkedIn sur <https://www.linkedin.com/post-inspector/>.
- [ ] Ouvrir le site sur votre téléphone : navigation, menu, bascule FR/EN, mode sombre.
- [ ] Lancer Lighthouse (Chrome) : viser plus de 90 en Performance, Accessibilité et SEO.

## Pour rendre le portfolio vraiment convaincant

- [ ] **Photo professionnelle** : `assets/img/photo.jpg`, portrait 5:6 (ex. 800×960), fond neutre, moins de 200 Ko.
- [ ] **Captures d'écran des projets** (16:9, ~1280×720, moins de 200 Ko chacune), par ordre de priorité :
  - [ ] Dashboard Power BI : effectifs scolaires
  - [ ] Dashboard Power BI : TER, ou schéma du Data Warehouse
  - [ ] Interface du chatbot RAG (en masquant toute donnée confidentielle de la CSS)
  - [ ] Dashboard KPI du projet trafic
  - [ ] Matrice de confusion ou courbes d'entraînement (malwares, cancer du sein)
  - [ ] Interface Spark UI montrant les 3 nœuds du cluster
  - [ ] Visualisations des thématiques (réseaux sociaux)
- [ ] **Dépôts GitHub** : publier les projets académiques avec un README clair (contexte, stack, lancement, résultats), puis renseigner le champ `github` de chaque projet.
      Les 2 projets de stage sont réglés sur `"prive"` (mention « Code confidentiel »).
      Épinglez vos 6 meilleurs dépôts sur votre profil GitHub.
- [ ] **Démos** (champ `demo`), par priorité :
  - [ ] GIF ou vidéo de la simulation SUMO (avant / après l'agent RL)
  - [ ] Vidéo d'une minute du chatbot RAG (Loom ou YouTube non répertorié)
  - [ ] Démo en ligne des classifieurs (malwares, cancer du sein) sur Hugging Face Spaces (Gradio ou Streamlit, gratuit)
  - [ ] Dashboards Power BI : « Publier sur le web » uniquement si les données sont publiques, sinon captures
- [ ] **Résultats chiffrés** : ajoutez des métriques dès que possible (F1-score du modèle malware, Recall du CNN, gain de temps d'attente sur le trafic…). Un chiffre vaut mieux qu'un adjectif.
- [ ] **Confidentialité** : vérifiez que rien de ce qui est affiché sur les stages CSS et DiCentre4AI n'est confidentiel. Demandez l'accord de vos tuteurs pour les captures.

## Diffusion

- [ ] Ajouter l'URL du portfolio sur LinkedIn (section *Coordonnées* → *Site web*, et dans le résumé).
- [ ] Ajouter l'URL sur vos CV (en-tête) et dans votre signature email.
- [ ] Ajouter l'URL dans la bio de votre profil GitHub.
- [ ] Publier un post LinkedIn pour annoncer le portfolio : l'image d'aperçu est déjà prête.
- [ ] (Optionnel) Enregistrer le site dans Google Search Console et y soumettre `sitemap.xml`.

## Entretien du site

- [ ] Mettre à jour les disponibilités (`UI.fr.hero.availability` et `UI.en.hero.availability`) dès que votre situation change.
- [ ] Ajouter chaque nouveau projet ou expérience au fil de l'eau.
