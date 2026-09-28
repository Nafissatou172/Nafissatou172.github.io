/* =====================================================================
   content.js — TOUT le contenu du site (français + anglais)
   ---------------------------------------------------------------------
   Pour modifier un texte : cherchez-le dans ce fichier, changez-le,
   sauvegardez, puis rafraîchissez la page. Rien d'autre à faire.

   Organisation du fichier :
     SITE        → vos infos personnelles (email, liens, CV, photo…)
     UI          → textes de l'interface (menu, titres, boutons) en FR/EN
     SKILLS      → compétences, regroupées par catégorie
     PROJECTS    → projets (infos communes + textes FR/EN)
     EXPERIENCES → expériences professionnelles
     EDUCATION   → formations

   Astuce : dans les textes français, on utilise l'apostrophe typographique
   ’ (et non ') pour ne pas avoir à "échapper" les guillemets.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. INFOS PERSONNELLES (identiques en FR et EN)
   --------------------------------------------------------------------- */
const SITE = {
  name: "Nafissatou SOW",
  email: "nafissah172@gmail.com",
  linkedin: "https://www.linkedin.com/in/nafissatou-sow-64463730a/",
  github: "https://github.com/Nafissatou172",

  // Chemin du CV à télécharger, selon la langue affichée.
  // Si vous n'avez pas de CV en anglais, laissez le même fichier pour les deux.
  cv: {
    fr: "assets/cv/CV-Nafissatou-SOW.pdf",
    en: "assets/cv/CV-Nafissatou-SOW.pdf",
  },

  // Photo : remplacez par "assets/img/photo.jpg" une fois votre photo ajoutée.
  photo: "assets/img/1.jpg",

  // Identifiant Formspree (voir README, section « Formulaire de contact »).
  // Exemple : si votre URL Formspree est https://formspree.io/f/xyzabcd,
  // mettez formspreeId: "xyzabcd". Tant que c'est vide, le formulaire
  // propose d'écrire directement par email.
  formspreeId: "xkjgkwed",
};

/* ---------------------------------------------------------------------
   2. TEXTES DE L'INTERFACE
   --------------------------------------------------------------------- */
const UI = {
  fr: {
    meta: {
      title: "Nafissatou SOW · Ingénieure Data & IA",
      description:
        "Portfolio de Nafissatou SOW, ingénieure Data & IA polyvalente : Data Engineering, BI, Machine Learning et IA générative (LLM, RAG, agents). En recherche de stage ou d’alternance.",
    },
    a11y: {
      skip: "Aller au contenu",
      menu: "Ouvrir le menu",
      themeToDark: "Passer en mode sombre",
      themeToLight: "Passer en mode clair",
      lang: "Switch to English",
      close: "Fermer",
      photo: "Photo de Nafissatou SOW",
      newTab: "(s’ouvre dans un nouvel onglet)",
    },
    nav: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      experience: "Expériences",
      contact: "Contact",
    },
    hero: {
      status: "En recherche de stage / alternance",
      hello: "Bonjour, je suis",
      title: "Ingénieure Data & IA polyvalente",
      pitch:
        "Je transforme des données brutes en décisions et en produits IA : pipelines ETL, tableaux de bord, modèles de Machine Learning et assistants LLM.",
      availability: [
        { label: "Alternance", value: "dès que possible" },
        { label: "Stage", value: "dès mars 2027" },
      ],
      rhythm: "Rythme d’alternance : 2 semaines école / 2 semaines entreprise",
      ctaProjects: "Voir mes projets",
      ctaCv: "Télécharger mon CV",
    },
    about: {
      title: "À propos",
      paragraphs: [
        "Titulaire d’un Master en Intelligence Artificielle et Big Data de l’École Supérieure Polytechnique de Dakar, je poursuis aujourd’hui un Mastère Spécialisé Expert Big Data Engineer à l’Université de Technologie de Troyes (UTT), à Paris.",
        "Mon profil est volontairement polyvalent : je construis des pipelines de données, je conçois des tableaux de bord de pilotage, j’entraîne des modèles de Machine Learning et je développe des applications d’IA générative (RAG, agents). Cette vision de bout en bout me permet de dialoguer aussi bien avec les équipes métier qu’avec les équipes techniques.",
        "Ce qui me motive : une IA utile et concrète, qui résout de vrais problèmes (accès à l’information, mobilité, santé, sécurité). Je suis particulièrement attentive au rôle de la donnée dans la transition numérique en général, et j’aime faire le lien entre innovation technique et impact réel.",
      ],
      pipelineTitle: "Un profil, tout le pipeline Data & IA",
      pipeline: [
        {
          icon: "workflow",
          title: "Data Engineering",
          text: "Collecter, nettoyer et structurer : ETL Talend, Data Warehouse, Spark.",
        },
        {
          icon: "chart",
          title: "Business Intelligence",
          text: "Rendre la donnée lisible : KPI, dashboards Power BI, reporting.",
        },
        {
          icon: "cpu",
          title: "Data Science & ML",
          text: "Modéliser et prédire : classification, clustering, deep learning, RL.",
        },
        {
          icon: "sparkles",
          title: "IA générative",
          text: "Mettre l’IA au service des utilisateurs : LLM, RAG, agents, API.",
        },
      ],
      educationTitle: "Formation",
      languagesTitle: "Langues",
      softTitle: "Soft Skills",
      languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "B2 · avancé" },
      ],
      hobbiesTitle: "En dehors de la data",
      hobbies: [
        { icon: "bike", name: "Vélo", text: "Sorties sportives et découverte de nouveaux itinéraires." },
        { icon: "plane", name: "Voyages", text: "Découverte de nouvelles cultures." },
        { icon: "footprints", name: "Running", text: "Pratique régulière depuis plusieurs années, pour l’endurance et le dépassement de soi." },
      ],
      soft: ["Curiosité", "Rigueur", "Esprit d'analyse", "Esprit de synthèse", "Autonomie", "Bon relationnel", "Veille technologique"],
    },
    projects: {
      title: "Projets",
      intro:
        "Projets professionnels et académiques. Cliquez sur une carte pour voir le contexte, la démarche technique et les résultats.",
      filters: {
        all: "Tous",
        genai: "IA générative",
        data: "Data Eng & BI",
        ml: "ML & Deep Learning",
      },
      pro: "En entreprise",
      more: "Voir le détail",
      actions: {
        details: "Détails",
        code: "Git",
        private: "Code confidentiel",
        demo: "Démo",
        video: "Vidéo",
        screenshots: "Captures",
      },
      detail: {
        context: "Contexte & problématique",
        stack: "Stack technique",
        steps: "Ce que j’ai fait",
        results: "Résultats",
        learnings: "Ce que j’en retiens",
        github: "Voir le code sur GitHub",
        demo: "Voir la démo",
        gallery: "Captures d’écran",
        videos: "Vidéos",
        privateNote: "Code confidentiel (projet réalisé en entreprise).",
      },
    },
    skills: {
      title: "Compétences",
      intro: "Sont organisées par domaine. Les projets montrent comment je les combine.",
    },
    experience: {
      title: "Expériences",
      context: "Contexte",
      missions: "Missions",
      impact: "Impact",
      seeProject: "Voir le projet associé",
    },
    contact: {
      title: "Contact",
      heading: "Travaillons ensemble",
      intro:
        "Une offre de stage ou d’alternance, une question sur un projet ? Écrivez-moi, je réponds rapidement.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Merci ! Votre message a bien été envoyé. Je vous réponds au plus vite.",
      error: "Oups, l’envoi a échoué. Vous pouvez m’écrire directement à ",
      notConfigured: "Le formulaire n’est pas encore activé. Écrivez-moi directement à ",
      direct: "Ou directement",
    },
    footer: "Conçu et développé par Nafissatou SOW",
  },

  en: {
    meta: {
      title: "Nafissatou SOW · Data & AI Engineer",
      description:
        "Portfolio of Nafissatou SOW, versatile Data & AI engineer: Data Engineering, BI, Machine Learning and Generative AI (LLM, RAG, agents). Looking for an internship or work-study position.",
    },
    a11y: {
      skip: "Skip to content",
      menu: "Open menu",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      lang: "Passer en français",
      close: "Close",
      photo: "Photo of Nafissatou SOW",
      newTab: "(opens in a new tab)",
    },
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      status: "Open to internship / work-study",
      hello: "Hi, I’m",
      title: "Versatile Data & AI Engineer",
      pitch:
        "I turn raw data into decisions and AI products: ETL pipelines, dashboards, Machine Learning models and LLM assistants.",
      availability: [
        { label: "Work-study", value: "available now" },
        { label: "Internship", value: "from March 2027" },
      ],
      rhythm: "Work-study rhythm: 2 weeks school / 2 weeks company",
      ctaProjects: "See my projects",
      ctaCv: "Download my resume",
    },
    about: {
      title: "About",
      paragraphs: [
        "I hold a Master’s degree in Artificial Intelligence and Big Data from the École Supérieure Polytechnique in Dakar, and I am now pursuing a Specialised Master (Mastère Spécialisé) as a Big Data Engineer at the Université de Technologie de Troyes (UTT) in Paris.",
        "My profile is deliberately versatile: I build data pipelines, design management dashboards, train Machine Learning models and develop Generative AI applications (RAG, agents). This end-to-end view lets me work just as well with business teams as with technical teams.",
        "What drives me: useful, concrete AI that solves real problems (access to information, mobility, health, security). I care deeply about the role of data in Africa’s digital transformation, and I enjoy bridging technical innovation and real-world impact.",
      ],
      pipelineTitle: "One profile, the whole Data & AI pipeline",
      pipeline: [
        {
          icon: "workflow",
          title: "Data Engineering",
          text: "Collect, clean and structure: Talend ETL, Data Warehouse, Spark.",
        },
        {
          icon: "chart",
          title: "Business Intelligence",
          text: "Make data readable: KPIs, Power BI dashboards, reporting.",
        },
        {
          icon: "cpu",
          title: "Data Science & ML",
          text: "Model and predict: classification, clustering, deep learning, RL.",
        },
        {
          icon: "sparkles",
          title: "Generative AI",
          text: "Put AI to work for users: LLMs, RAG, agents, APIs.",
        },
      ],
      educationTitle: "Education",
      languagesTitle: "Languages",
      softTitle: "Soft skills",
      languages: [
        { name: "French", level: "Native" },
        { name: "English", level: "B2 · upper-intermediate" },
      ],
      hobbiesTitle: "Beyond data",
      hobbies: [
        { icon: "bike", name: "Cycling", text: "Sporty rides and exploring new routes." },
        { icon: "plane", name: "Travel", text: "Discovering new cultures." },
        { icon: "footprints", name: "Running", text: "A regular practice for several years, for endurance and pushing my limits." },
      ],
      soft: ["Curiosity", "Rigour", "Synthesis", "Autonomy", "Team spirit", "Tech watch"],
    },
    projects: {
      title: "Projects",
      intro:
        "Professional and academic projects. Click a card to see the context, the technical approach and the results.",
      filters: {
        all: "All",
        genai: "Generative AI",
        data: "Data Eng & BI",
        ml: "ML & Deep Learning",
      },
      pro: "Industry",
      more: "View details",
      actions: {
        details: "Details",
        code: "Code",
        private: "Private code",
        demo: "Demo",
        video: "Video",
        screenshots: "Screenshots",
      },
      detail: {
        context: "Context & problem",
        stack: "Tech stack",
        steps: "What I did",
        results: "Results",
        learnings: "Key takeaways",
        github: "View code on GitHub",
        demo: "View the demo",
        gallery: "Screenshots",
        videos: "Videos",
        privateNote: "Private code (company project).",
      },
    },
    skills: {
      title: "Skills",
      intro: "Grouped by area. The projects show how I combine them.",
    },
    experience: {
      title: "Experience",
      context: "Context",
      missions: "Responsibilities",
      impact: "Impact",
      seeProject: "See the related project",
    },
    contact: {
      title: "Contact",
      heading: "Let’s work together",
      intro:
        "An internship or work-study offer, a question about a project? Drop me a line, I reply quickly.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      success: "Thank you! Your message has been sent. I’ll get back to you soon.",
      error: "Oops, sending failed. You can email me directly at ",
      notConfigured: "The form is not active yet. Please email me directly at ",
      direct: "Or directly",
    },
    footer: "Designed and built by Nafissatou SOW",
  },
};

/* ---------------------------------------------------------------------
   3. COMPÉTENCES
   - icon : nom d'une icône définie dans index.html (id="i-...")
   - items : les noms de technos sont les mêmes en FR et EN ;
     si un élément doit être traduit, écrivez { fr: "...", en: "..." }
   --------------------------------------------------------------------- */
const SKILLS = [
  {
    icon: "code",
    name: { fr: "Langages", en: "Languages" },
    items: ["Python", "SQL", "R", "JavaScript", "Pandas", "NumPy"],
  },
  {
    icon: "cpu",
    name: { fr: "Machine Learning & Deep Learning", en: "Machine Learning & Deep Learning" },
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "CNN",
      { fr: "Apprentissage par renforcement (MARL)", en: "Reinforcement Learning (MARL)" },
      "K-Means",
    ],
  },
  {
    icon: "sparkles",
    name: { fr: "IA générative", en: "Generative AI" },
    items: [
      "LLM",
      "RAG",
      "RAFT",
      { fr: "Agents IA & multi-agents", en: "AI agents & multi-agent systems" },
      "Prompt engineering",
      "Embeddings",
      "Claude Code",
    ],
  },
  {
    icon: "workflow",
    name: { fr: "Data Engineering", en: "Data Engineering" },
    items: ["Talend (ETL)", "Apache Spark", "Hadoop HDFS", "Data Warehouse", "FastAPI"],
  },
  {
    icon: "chart",
    name: { fr: "Business Intelligence", en: "Business Intelligence" },
    items: [
      "Power BI",
      "Power Query",
      "Tableau",
      { fr: "Excel avancé", en: "Advanced Excel" },
      { fr: "KPI & reporting", en: "KPIs & reporting" },
    ],
  },
  {
    icon: "database",
    name: { fr: "Bases de données", en: "Databases" },
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      { fr: "Bases vectorielles", en: "Vector databases" },
    ],
  },
  {
    icon: "git",
    name: { fr: "DevOps & Développement", en: "DevOps & Development" },
    items: ["Git", "GitHub", "Docker", "API REST", "Flask", "React"],
  },
];

/* ---------------------------------------------------------------------
   4. PROJETS
   Pour chaque projet :
   - id         : identifiant unique, utilisé dans l'URL (#projet/id)
   - categories : filtres où il apparaît → "genai", "data", "ml"
   - pro        : true si réalisé en entreprise (affiche un badge)
   - cover      : visuel généré automatiquement tant qu'il n'y a pas d'image
                  (chat, traffic, agents, flow, bars, cluster, tree, cnn, topics)
   - image      : couverture choisie manuellement (ex. "assets/img/projets/ter-cover.png").
                  Si vide → visuel généré (champ "cover"). Les captures n'y changent rien.

   Les boutons de chaque carte (chacun s'affiche dès que le champ est rempli) :
   - « Détails »  : toujours présent (ouvre la fenêtre du projet)
   - github       : "https://github.com/..." → bouton « Code »
                    "prive"                  → mention « Code confidentiel » (projets d'entreprise)
                    ""                       → bouton masqué
   - demo         : lien d'une application en ligne (Hugging Face, Streamlit…)
                    → bouton « Démo » (s'ouvre dans un nouvel onglet)
   - videos       : liste de vidéos lues DANS la fenêtre du projet. Deux possibilités :
                      • lien YouTube / Loom / Vimeo : "https://youtu.be/XXXXXXXXXXX"
                      • fichier local .mp4 : "assets/videos/sumo-demo.mp4"
                    → bouton « Vidéo »
   - screenshots  : liste de captures, ex. ["assets/img/projets/ter-1.png", "assets/img/projets/ter-2.png"]
                    → bouton « Captures », et galerie dans la fenêtre de détail
   - stack      : technos affichées en tags
   - fr / en    : tous les textes du projet
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "assistant-rag-documentaire",
    categories: ["genai"],
    pro: true,
    cover: "chat",
    image: "assets/img/projets/CSS-RAG/1.png",
    github: "prive",
    demo: "",
    screenshots: [],
    stack: ["Python", "LLM", "RAG", "Embeddings", "FastAPI", "React", "API REST"],
    fr: {
      title: "Assistant IA conversationnel sur données documentaires",
      label: "Stage · CSS · 2024–2025",
      summary:
        "Application qui permet d’interroger une base documentaire en langage naturel, grâce à un pipeline RAG (LLM + recherche sémantique).",
      context:
        "Les informations utiles étaient dispersées dans de nombreux documents, ce qui rendait leur recherche lente et dépendante de quelques experts. L’objectif : permettre à chacun de poser une question en langage naturel et d’obtenir une réponse fondée sur les documents internes.",
      steps: [
        "Préparation et découpage des documents, puis vectorisation (embeddings) pour la recherche sémantique.",
        "Mise en place d’un pipeline RAG : recherche des passages pertinents, puis génération de la réponse par un LLM.",
        "Développement du back-end avec FastAPI et exposition d’une API REST.",
        "Développement de l’interface conversationnelle en React et intégration avec l’API.",
        "Participation aux phases de tests, d’intégration et d’amélioration continue de la solution.",
      ],
      results: [
        "Accès à l’information simplifié grâce à une interface conversationnelle exploitant les connaissances documentaires.",
        "Solution complète livrée, du traitement des documents jusqu’à l’interface utilisateur.",
      ],
      learnings:
        "Un projet d’IA générative réussi repose autant sur la qualité de la préparation des données (découpage, indexation) que sur le choix du modèle.",
    },
    en: {
      title: "Conversational AI assistant over document data",
      label: "Internship · CSS · 2024–2025",
      summary:
        "Application that lets users query a document base in natural language, powered by a RAG pipeline (LLM + semantic search).",
      context:
        "Useful information was scattered across many documents, making search slow and dependent on a few experts. The goal: let anyone ask a question in natural language and get an answer grounded in internal documents.",
      steps: [
        "Prepared and chunked documents, then vectorised them (embeddings) for semantic search.",
        "Built a RAG pipeline: retrieval of relevant passages, then answer generation by an LLM.",
        "Developed the back end with FastAPI and exposed a REST API.",
        "Built the conversational interface in React and integrated it with the API.",
        "Took part in testing, integration and continuous improvement of the solution.",
      ],
      results: [
        "Simplified access to information through a conversational interface built on document knowledge.",
        "End-to-end solution delivered, from document processing to the user interface.",
      ],
      learnings:
        "A successful Generative AI project depends as much on data preparation (chunking, indexing) as on the choice of model.",
    },
  },
  {
    id: "feux-circulation-intelligents",
    categories: ["ml"],
    pro: true,
    cover: "traffic",
    image: "assets/img/projets/Sentrafik/profil.png",
    github: "prive",
    videos: ["https://www.loom.com/share/6b252ac7d826479db611a4f9eba0ff14"],
    demo: "",
    screenshots: ["assets/img/projets/Sentrafik/1.png",
      "assets/img/projets/Sentrafik/2.png",
      "assets/img/projets/Sentrafik/3.png",
      "assets/img/projets/Sentrafik/4.png",
      "assets/img/projets/Sentrafik/5.png",
      "assets/img/projets/Sentrafik/6.png",
      "assets/img/projets/Sentrafik/7.png",
      "assets/img/projets/Sentrafik/8.png",
    ],
    stack: ["Python", "SUMO", "Reinforcement Learning", "Fitted Q-Iteration", "Random Forest", "Pandas", "Dashboards"],
    fr: {
      title: "Optimisation des feux de circulation par apprentissage par renforcement",
      label: "Stage · DiCentre4AI · 2026",
      summary:
        "Contrôle des feux appris par Fitted Q-Iteration (Random Forest) sur un réseau simulé avec SUMO, puis comparé à d’autres stratégies à l’aide de KPI de trafic.",
      context:
        "La congestion urbaine allonge les temps de trajet et augmente la pollution, et les feux à cycle fixe ne s’adaptent pas au trafic réel. L’objectif : apprendre une politique de contrôle des feux à partir de données de simulation, puis mesurer son apport face à d’autres stratégies.",
      steps: [
        "Modélisation et simulation du trafic avec SUMO (Simulation of Urban MObility).",
        "Collecte des données de simulation et construction d’un jeu de transitions (état, action, récompense, état suivant).",
        "Apprentissage de la politique de contrôle par Fitted Q-Iteration, avec une Random Forest pour approximer la fonction Q.",
        "Définition et suivi des KPI : temps d’attente, vitesse, fluidité et temps de parcours.",
        "Analyse comparative des stratégies et conception de tableaux de bord pour appuyer la prise de décision.",
      ],
      results: [
        "Évaluation objective des stratégies de contrôle des feux à partir de données simulées et de KPI.",
        "Réduction de près de 41 % du temps perdu par véhicule, augmentation de 67% de la vitesse du réseau et stabilisation de la vitesse commerciale du Bus Rapid Transit .",
        "Mise en place de tableaux de bord permettant de comparer rapidement les scénarios.",
      ],
      learnings:
        "Le Fitted Q-Iteration apprend une politique à partir de données déjà collectées (batch RL) ; couplé à une Random Forest, il est robuste et plus simple à mettre en œuvre qu’un réseau de neurones. Et de bons KPI rendent les résultats compréhensibles par tous, pas seulement par les data scientists.",
    },
    en: {
      title: "Traffic light optimisation with reinforcement learning",
      label: "Internship · DiCentre4AI · 2026",
      summary:
        "Traffic light control learned with Fitted Q-Iteration (Random Forest) on a network simulated in SUMO, then compared with other strategies using traffic KPIs.",
      context:
        "Urban congestion increases travel time and pollution, and fixed-cycle traffic lights do not adapt to real traffic. The goal: learn a traffic light control policy from simulation data, then measure its benefit against other strategies.",
      steps: [
        "Modelled and simulated traffic with SUMO (Simulation of Urban MObility).",
        "Collected simulation data and built a transition dataset (state, action, reward, next state).",
        "Learned the control policy with Fitted Q-Iteration, using a Random Forest to approximate the Q-function.",
        "Defined and tracked KPIs: waiting time, speed, flow and travel time.",
        "Compared strategies and designed dashboards to support decision-making.",
      ],
      results: [
        "Objective evaluation of traffic light control strategies based on simulated data and KPIs.",
        "Dashboards to compare scenarios at a glance.",
      ],
      learnings:
        "Fitted Q-Iteration learns a policy from previously collected data (batch RL); paired with a Random Forest, it is robust and simpler to implement than a neural network. And good KPIs make results understandable to everyone, not just data scientists.",
    },
  },
  {
    id: "rag-agents-finance",
    categories: ["genai"],
    pro: false,
    cover: "agents",
    image: "assets/img/projets/img-rag-finance/profil.jpeg",
    github: "https://github.com/Nafissatou172/Projet2-NLP/tree/main",
    demo: "",
    screenshots: [
      "assets/img/projets/img-rag-finance/benchmark.png",
      "assets/img/projets/img-rag-finance/resultats.png",
      "assets/img/projets/img-rag-finance/multi-agents.jpeg",
      "assets/img/projets/img-rag-finance/agent.jpeg",
      "assets/img/projets/img-rag-finance/llm-simple.png",
      "assets/img/projets/img-rag-finance/rag-opt.png",
      "assets/img/projets/img-rag-finance/rag-simple.png",

    ],
    stack: ["Python", "LLM", "RAG", "RAFT", "Multi-agents", "Embeddings"],
    fr: {
      title: "RAG et IA agentique pour la finance",
      label: "Projet · NLP / IA générative",
      summary:
        "Conception et comparaison d’architectures LLM, RAG, RAFT et multi-agents pour exploiter des connaissances financières.",
      context:
        "Les documents financiers sont longs, techniques et évoluent vite. Quelle architecture d’IA générative donne les réponses les plus fiables : un LLM seul, un RAG, un modèle affiné (RAFT) ou un système multi-agents ?",
      steps: [
        "Benchmarmarking de plusieurs modèles llm open source sur plusieurs jeux de données",
        "Construction d’une base de connaissances financières vectorisée.",
        "Implémentation de plusieurs architectures : LLM seul, RAG, RAFT et système multi-agents.",
        "Développement de workflows agentiques en Python (agents spécialisés qui se répartissent les tâches).",
        "Comparaison des architectures sur la pertinence et la fiabilité des réponses.",
      ],
      results: [
        "Vue comparative des forces et limites de chaque architecture pour un cas d’usage métier.",
        "Workflows agentiques réutilisables pour d’autres domaines documentaires.",
      ],
      learnings:
        "Il n’y a pas d’architecture universelle : le bon choix dépend du volume de données, du besoin de traçabilité et du coût acceptable.",
    },
    en: {
      title: "RAG and agentic AI for finance",
      label: "Project · NLP / Generative AI",
      summary:
        "Design and comparison of LLM, RAG, RAFT and multi-agent architectures to leverage financial knowledge.",
      context:
        "Financial documents are long, technical and change quickly. Which Generative AI architecture gives the most reliable answers: a plain LLM, RAG, a fine-tuned model (RAFT) or a multi-agent system?",
      steps: [
        "Built a vectorised financial knowledge base.",
        "Implemented several architectures: plain LLM, RAG, RAFT and a multi-agent system.",
        "Developed agentic workflows in Python (specialised agents sharing the work).",
        "Compared the architectures on answer relevance and reliability.",
      ],
      results: [
        "Comparative view of the strengths and limits of each architecture for a business use case.",
        "Reusable agentic workflows for other document-heavy domains.",
      ],
      learnings:
        "There is no one-size-fits-all architecture: the right choice depends on data volume, traceability needs and acceptable cost.",
    },
  },
  {
    id: "data-warehouse-ter",
    categories: ["data"],
    pro: false,
    cover: "flow",
    image: "assets/img/projets/TER/profil.jpeg",
    github: "https://github.com/Nafissatou172/Projet-BI-TER",
    demo: "",
    screenshots: ["assets/img/projets/TER/1.png",
      "assets/img/projets/TER/2.png",
      "assets/img/projets/TER/3.png",
      "assets/img/projets/TER/4.png",
      "assets/img/projets/TER/5.png",
      "assets/img/projets/TER/6.png",
      "assets/img/projets/TER/7.png",
      "assets/img/projets/TER/8.png",
      "assets/img/projets/TER/9.png",
      "assets/img/projets/TER/10.png",
      "assets/img/projets/TER/11.png",
      "assets/img/projets/TER/12.png",
      "assets/img/projets/TER/13.png",
      "assets/img/projets/TER/14.png",
      "assets/img/projets/TER/15.png",
      "assets/img/projets/TER/16.png",
    ],
    stack: ["Talend", "ETL", "Data Warehouse", "SQL", "Power BI"],
    fr: {
      title: "Data Warehouse et ETL pour la mobilité ferroviaire (TER)",
      label: "Projet · Data / ETL / BI",
      summary:
        "Pipeline ETL Talend et Data Warehouse pour structurer les données TER, puis dashboards Power BI pour suivre les indicateurs.",
      context:
        "Les données ferroviaires régionales (TER) proviennent de sources hétérogènes, difficiles à croiser. L’objectif : les centraliser dans un entrepôt de données fiable pour suivre les indicateurs clés.",
      steps: [
        "Modélisation du Data Warehouse (tables de faits et de dimensions).",
        "Conception du pipeline ETL avec Talend : extraction, nettoyage, transformation et chargement.",
        "Contrôles de qualité pour fiabiliser les données chargées.",
        "Création de tableaux de bord et de KPI dans Power BI pour l’analyse et le suivi.",
      ],
      results: [
        "Données ferroviaires structurées dans un modèle unique et exploitable.",
        "Dashboards Power BI prêts à l’emploi pour le suivi des indicateurs.",
      ],
      learnings:
        "Un bon modèle de données en amont simplifie tout le reste : les dashboards deviennent plus rapides à construire et plus fiables.",
    },
    en: {
      title: "Data Warehouse and ETL for regional rail (TER)",
      label: "Project · Data / ETL / BI",
      summary:
        "Talend ETL pipeline and Data Warehouse to structure TER rail data, then Power BI dashboards to track KPIs.",
      context:
        "Regional rail (TER) data comes from heterogeneous sources that are hard to combine. The goal: centralise it in a reliable data warehouse to track key indicators.",
      steps: [
        "Designed the Data Warehouse model (fact and dimension tables).",
        "Built the ETL pipeline with Talend: extraction, cleaning, transformation and loading.",
        "Added data quality checks to make loaded data reliable.",
        "Created Power BI dashboards and KPIs for analysis and monitoring.",
      ],
      results: [
        "Rail data structured in a single, usable model.",
        "Ready-to-use Power BI dashboards to track indicators.",
      ],
      learnings:
        "A solid upstream data model makes everything else easier: dashboards become faster to build and more reliable.",
    },
  },
  {
    id: "effectifs-scolaires-powerbi",
    categories: ["data"],
    pro: false,
    cover: "bars",
    image: "assets/img/projets/effectifs/profil.png",
    github: "",
    demo: "",
    screenshots: ["assets/img/projets/effectifs/1.png",
      "assets/img/projets/effectifs/2.png",
      "assets/img/projets/effectifs/3.png",
      "assets/img/projets/effectifs/4.png",
      "assets/img/projets/effectifs/5.png",
      "assets/img/projets/effectifs/6.png"
    ],
    stack: ["Power BI", "Power Query", "Excel", "KPI"],
    fr: {
      title: "Répartition des effectifs scolaires 2019–2023",
      label: "Projet · Data Analytics / BI",
      summary:
        "Préparation des données et dashboard Power BI pour analyser les effectifs d’élèves par académie, cycle et sexe.",
      context:
        "Comprendre l’évolution des effectifs d’élèves entre 2019 et 2023 et leur répartition territoriale, afin d’éclairer le pilotage de l’offre d’enseignement.",
      steps: [
        "Récupération de données dans une plateforme Open Data (ANSD) ",
        "Préparation et nettoyage de ces données d’effectifs scolaires 2019–2023.",
        "Définition des KPI : évolution des effectifs, répartition par cycle, par académie et par sexe.",
        "Création d’un dashboard Power BI interactif avec filtres par année, académie et cycle.",
      ],
      results: [
        "Un tableau de bord qui rend lisibles en quelques clics les grandes tendances et les écarts entre académies.",
      ],
      learnings:
        "Un dashboard efficace répond à des questions précises : partir des besoins de l’utilisateur avant de choisir les visuels.",
    },
    en: {
      title: "Student enrolment breakdown 2019–2023",
      label: "Project · Data Analytics / BI",
      summary:
        "Data preparation and a Power BI dashboard analysing student numbers by region (académie), school cycle and gender.",
      context:
        "Understand how student enrolment evolved between 2019 and 2023 and how it is distributed across regions, to inform education planning.",
      steps: [
        "Prepared and cleaned 2019–2023 enrolment data.",
        "Defined KPIs: enrolment trends, breakdown by cycle, by region and by gender.",
        "Built an interactive Power BI dashboard with filters by year, region and cycle.",
      ],
      results: [
        "A dashboard that surfaces key trends and regional gaps in a few clicks.",
      ],
      learnings:
        "An effective dashboard answers specific questions: start from user needs before choosing visuals.",
    },
  },
  {
    id: "cluster-spark-kmeans",
    categories: ["data", "ml"],
    pro: false,
    cover: "cluster",
    image: "assets/img/projets/Cluster-spark/profil.jpeg",
    github: "https://github.com/Nafissatou172/spark-distributed-cluster",
    demo: "",
    screenshots: [],
    stack: ["Apache Spark", "PySpark", "Docker", "K-Means", "Big Data"],
    fr: {
      title: "Cluster Apache Spark distribué et clustering K-Means",
      label: "Projet · Big Data / ML",
      summary:
        "Mise en place d’un cluster Spark à 3 nœuds avec Docker et exécution d’un pipeline de clustering K-Means distribué.",
      context:
        "Quand les volumes de données dépassent la capacité d’une seule machine, il faut distribuer les traitements. Ce projet reproduit une architecture Big Data réelle à petite échelle.",
      steps: [
        "Déploiement d’un cluster Apache Spark à 3 nœuds (1 maître, 2 workers) avec Docker.",
        "Développement et exécution de traitements distribués.",
        "Construction d’un pipeline de clustering K-Means exécuté sur le cluster.",
      ],
      results: [
        "Cluster fonctionnel et reproductible, déployable en quelques commandes.",
        "Pipeline de Machine Learning distribué de bout en bout.",
      ],
      learnings:
        "La conteneurisation rend une infrastructure Big Data reproductible et facile à partager au sein d’une équipe.",
    },
    en: {
      title: "Distributed Apache Spark cluster and K-Means clustering",
      label: "Project · Big Data / ML",
      summary:
        "Set up a 3-node Spark cluster with Docker and ran a distributed K-Means clustering pipeline.",
      context:
        "When data volumes exceed what a single machine can handle, processing must be distributed. This project reproduces a real Big Data architecture at small scale.",
      steps: [
        "Deployed a 3-node Apache Spark cluster (1 master, 2 workers) with Docker.",
        "Developed and ran distributed processing jobs.",
        "Built a K-Means clustering pipeline running on the cluster.",
      ],
      results: [
        "Working, reproducible cluster deployable in a few commands.",
        "End-to-end distributed Machine Learning pipeline.",
      ],
      learnings:
        "Containerisation makes Big Data infrastructure reproducible and easy to share within a team.",
    },
  },
  {
    id: "classification-malwares",
    categories: ["ml"],
    pro: false,
    cover: "tree",
    image: "assets/img/projets/Malware/profil.jpeg",
    github: "https://github.com/Nafissatou172/Malware-Detection-ML",
    demo: "",
    videos: ["https://www.loom.com/share/f7e30bc5e2c64ec78b2d4132b985985c"],
    screenshots: ["assets/img/projets/Malware/1.png",
                  "assets/img/projets/Malware/2.png",
                  "assets/img/projets/Malware/3.png",
    ],
    stack: ["Python", "Scikit-learn", "Decision Tree", "SMOTE", "Flask", "API REST"],
    fr: {
      title: "Détection de malwares par Machine Learning",
      label: "Projet · Machine Learning",
      summary:
        "Modèle de classification de fichiers malveillants (Decision Tree + SMOTE), servi via une API Flask.",
      context:
        "Identifier automatiquement un fichier malveillant à partir de ses caractéristiques. Difficulté : les classes sont déséquilibrées, certaines étant beaucoup moins représentées que d’autres.",
      steps: [
        "Prétraitement et normalisation des données.",
        "Gestion du déséquilibre des classes avec SMOTE (sur-échantillonnage synthétique).",
        "Entraînement et évaluation d’un modèle Decision Tree.",
        "Intégration du modèle dans une API Flask pour l’inférence.",
      ],
      results: [
        "Modèle interprétable, exposé via une API prête à être intégrée dans un outil existant.",
      ],
      learnings:
        "Sur des données déséquilibrées, l’accuracy seule est trompeuse : Precision, Recall et F1-score sont indispensables.",
    },
    en: {
      title: "Malware detection with Machine Learning",
      label: "Project · Machine Learning",
      summary:
        "Classification model for malicious files (Decision Tree + SMOTE), served through a Flask API.",
      context:
        "Automatically identify a malicious file from its features. The challenge: imbalanced classes.",
      steps: [
        "Preprocessed and normalised the data.",
        "Handled class imbalance with SMOTE (synthetic oversampling).",
        "Trained and evaluated a Decision Tree model.",
        "Integrated the model into a Flask API for inference.",
      ],
      results: [
        "Interpretable model exposed through an API ready to plug into an existing tool.",
      ],
      learnings:
        "On imbalanced data, accuracy alone is misleading: Precision, Recall and F1-score are essential.",
    },
  },
  {
    id: "classification-cancer-sein",
    categories: ["ml"],
    pro: false,
    cover: "cnn",
    image: "assets/img/projets/detection-cancer/profil.jpeg",
    github: "https://github.com/mouhamed-diakhate/breast-cancer-detection-api",
    demo: "",
    screenshots: [],
    stack: ["Python", "PyTorch", "ResNet18", "CNN", "Computer Vision"],
    fr: {
      title: "Classification d’images de lésions mammaires",
      label: "Projet · Computer Vision / Deep Learning",
      summary:
        "Réseau de neurones convolutif (ResNet18) pour classer des images de lésions mammaires, évalué avec Precision, Recall et F1-score.",
      context:
        "Aider au diagnostic du cancer du sein en classant automatiquement des images de lésions. Dans un contexte médical, rater un cas positif coûte cher : le choix des métriques est crucial.",
      steps: [
        "Prétraitement des images (redimensionnement, normalisation).",
        "Entraînement d’un modèle ResNet18 (CNN) pour la classification.",
        "Évaluation avec Accuracy, Precision, Recall et F1-score.",
      ],
      results: [
        "Modèle de classification d’images évalué sur des métriques adaptées au contexte médical.",
      ],
      learnings:
        "En santé, le Recall est souvent plus important que l’Accuracy : mieux vaut une fausse alerte qu’un cas manqué.",
    },
    en: {
      title: "Breast lesion image classification",
      label: "Project · Computer Vision / Deep Learning",
      summary:
        "Convolutional neural network (ResNet18) classifying breast lesion images, evaluated with Precision, Recall and F1-score.",
      context:
        "Support breast cancer diagnosis by automatically classifying lesion images. In a medical setting, missing a positive case is costly, so metric choice is critical.",
      steps: [
        "Preprocessed images (resizing, normalisation).",
        "Trained a ResNet18 model (CNN) for classification.",
        "Evaluated with Accuracy, Precision, Recall and F1-score.",
      ],
      results: [
        "Image classification model evaluated with metrics suited to a medical context.",
      ],
      learnings:
        "In healthcare, Recall often matters more than Accuracy: a false alarm is better than a missed case.",
    },
  },
  {
    id: "violences-reseaux-sociaux",
    categories: ["data", "ml"],
    pro: false,
    cover: "topics",
    image: "assets/img/projets/violences/profil.png",
    github: "https://github.com/Nafissatou172/violences-domestiques",
    demo: "",
    screenshots: ["assets/img/projets/violences/viz1_frequence_mots.png",
      "assets/img/projets/violences/viz2_sentiments.png",
      "assets/img/projets/violences/viz3_wordcloud.png",
      "assets/img/projets/violences/viz4_lda_topics.png",
      "assets/img/projets/violences/viz5_evolution_temporelle.png",
    ],
    stack: ["Python", "Web scraping", "NLP", "Pandas", "Data Visualization"],
    fr: {
      title: "Violences faites aux femmes sur les réseaux sociaux",
      label: "Projet · Data Analytics / NLP",
      summary:
        "Collecte de publications Reddit et Twitter/X par web scraping, puis analyse textuelle pour faire ressortir thématiques et tendances.",
      context:
        "Les réseaux sociaux sont à la fois un lieu de violences et un espace de parole. Analyser ces échanges à grande échelle aide à mieux comprendre les thématiques qui émergent.",
      steps: [
        "Collecte de données Reddit et Twitter/X par web scraping.",
        "Nettoyage et préparation des données textuelles (NLP).",
        "Analyse exploratoire des textes.",
        "Création de visualisations pour identifier les principales thématiques et tendances.",
      ],
      results: [
        "Cartographie des principales thématiques abordées et de leur évolution.",
      ],
      learnings:
        "Les données textuelles issues des réseaux sociaux demandent un nettoyage minutieux avant toute analyse fiable.",
    },
    en: {
      title: "Violence against women on social media",
      label: "Project · Data Analytics / NLP",
      summary:
        "Web scraping of Reddit and Twitter/X posts, then text analysis to surface key themes and trends.",
      context:
        "Social media is both a place where violence happens and a space where people speak out. Analysing these conversations at scale helps understand the themes that emerge.",
      steps: [
        "Collected Reddit and Twitter/X data through web scraping.",
        "Cleaned and prepared the text data (NLP).",
        "Ran an exploratory analysis of the texts.",
        "Built visualisations to identify the main themes and trends.",
      ],
      results: [
        "Map of the main themes discussed and how they evolve.",
      ],
      learnings:
        "Social media text data needs careful cleaning before any reliable analysis.",
    },
  },
];

/* ---------------------------------------------------------------------
   5. EXPÉRIENCES PROFESSIONNELLES (de la plus récente à la plus ancienne)
   - projectId : lien vers le projet détaillé correspondant (optionnel)
   --------------------------------------------------------------------- */
const EXPERIENCES = [
  {
    company: "DiCentre4AI",
    location: "Dakar, Sénégal",
    projectId: "feux-circulation-intelligents",
    stack: ["Python", "SUMO", "Fitted Q-Iteration", "Random Forest", "KPI", "Dashboards"],
    fr: {
      role: "Stagiaire Data & IA",
      period: "Janv. 2026 – juin 2026 · 6 mois",
      context:
        "Projet d’optimisation des feux de circulation par apprentissage par renforcement, à partir d’un réseau urbain simulé avec SUMO.",
      missions: [
        "Collecte et exploitation des données de simulation pour évaluer différentes stratégies d’optimisation.",
        "Définition et suivi de KPI : temps d’attente, vitesse, fluidité et temps de parcours.",
        "Analyse comparative des performances et identification des écarts entre stratégies.",
        "Conception de tableaux de bord pour le suivi des résultats et l’aide à la décision.",
      ],
      impact: "Mise en place d'un POC qui permet d’optimiser la gestion des feux tricolores à partir de données simulées et de KPI à l'aide de l'intelligence artificielle",
    },
    en: {
      role: "Data & AI Intern",
      period: "Jan 2026 – Jun 2026 · 6 months",
      context: "Traffic light optimisation project using reinforcement learning on an urban network simulated with SUMO.",
      missions: [
        "Collected and processed simulation data to evaluate optimisation strategies.",
        "Defined and tracked KPIs: waiting time, speed, flow and travel time.",
        "Ran comparative performance analyses and identified gaps between strategies.",
        "Designed dashboards to monitor results and support decision-making.",
      ],
      impact: "Evaluation of optimisation strategies based on simulated data and KPIs.",
    },
  },
  {
    company: "CSS",
    location: "Dakar, Sénégal",
    projectId: "assistant-rag-documentaire",
    stack: ["Python", "LLM", "RAG", "FastAPI", "React", "API REST"],
    fr: {
      role: "Stagiaire Développeuse IA",
      period: "Déc. 2024 – déc. 2025 · 12 mois",
      context:
        "Conception d’une application permettant d’exploiter et d’interroger des données documentaires en langage naturel (NLP).",
      missions: [
        "Développement d’une application d’exploitation et d’interrogation de données documentaires.",
        "Développement et intégration de la solution avec FastAPI, React et API REST.",
        "Participation aux phases de tests, d’intégration et d’amélioration de la solution.",
      ],
      impact:
        "Amélioration de l’accès à l’information grâce à une interface conversationnelle exploitant des connaissances documentaires.",
    },
    en: {
      role: "AI Developer Intern",
      period: "Dec 2024 – Dec 2025 · 12 months",
      context: "Built an application to explore and query document data in natural language.",
      missions: [
        "Developed an application to explore and query document data.",
        "Built and integrated the solution with FastAPI, React and a REST API.",
        "Took part in testing, integration and improvement phases.",
      ],
      impact:
        "Improved access to information through a conversational interface built on document knowledge.",
    },
  },
];

/* ---------------------------------------------------------------------
   6. FORMATION
   --------------------------------------------------------------------- */
const EDUCATION = [
  {
    school: "Université de Technologie de Troyes (UTT)",
    fr: { degree: "Mastère Spécialisé Expert Big Data Engineer", period: "2026 – 2027 · Paris" },
    en: { degree: "Specialised Master, Big Data Engineer", period: "2026 – 2027 · Paris" },
  },
  {
    school: "École Supérieure Polytechnique (ESP)",
    fr: { degree: "Master Intelligence Artificielle et Big Data", period: "2026 · Dakar" },
    en: { degree: "Master’s in Artificial Intelligence and Big Data", period: "2026 · Dakar" },
  },
];
