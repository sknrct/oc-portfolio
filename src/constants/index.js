import project1 from "../assets/projects/Booki.webp";
import project2 from "../assets/projects/sophie-bluel.webp";
import project3 from "../assets/projects/planification.webp";
import project4 from "../assets/projects/nina-carducci.webp";
import project5 from "../assets/projects/kasa.webp";
import project6 from "../assets/projects/vieux-grimoire.webp";
import project7 from "../assets/projects/portfolio.webp";
import project8 from "../assets/projects/ccdfr.webp";
import project9 from "../assets/projects/evogym.png";


export const INTRO_CONTENT = `Développeur web frontend avec une appétence pour le backend, spécialisé en React et Node.js. Grâce à une solide expérience en gestion de projet, design et référencement, j’apporte une vision globale et créative aux projets que je mène. Disponible à partir de janvier 2025, je recherche une opportunité sur Nantes et ses alentours pour m’investir dans des projets ambitieux et innovants.`;

export const ABOUT_TEXT = `Je suis un développeur frontend passionné et autodidacte, avec un parcours en communication et design qui me rend polyvalent. Après un master en communication, je suis revenu au développement, mes premiers amours. J'ai d'abord découvert des langages comme React et JavaScript, ainsi que le backend avec NodeJS et Express. Je prends plaisir à relever des défis techniques tout en apportant une attention particulière aux détails et à l'UX. Mon parcours atypique me permet de combiner l’aspect technique avec un vrai souci du design et de l’efficacité. En-dehors du code, je suis passionné par la photo, la vidéo et les sports mécaniques.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Alternant Développeur Web",
    company: "Infoconception",
    description: `Développement de site web via Wordpress et PHP selon un cahier des charges définis. Développement spécifique selon les besoins du client. Formation OpenClassrooms, cursus Développeur Web.`,
    technologies: ["WordPress", "PHP", "PHPMyAdmin", "AJAX"],
  },
  {
    year: "2022 - 2023",
    role: "Alternant Chargé de communication",
    company: "Benevolt",
    description: `Création d'une stratégie de communication. Création de contenu photo, vidéo et affiches. Envoi de mailing à une liste d'abonnés. Gestion de projet dans l'accompagnement d'une alternante.`,
    technologies: ["SendinBlue", "Photoshop", "Figma", "PremierePro"],
  },
  {
    year: "2021 - 2022",
    role: "Alternant Chargé de communication",
    company: "CCA Group",
    description: `Création d'une stratégie de communication adaptée au monde de la cosmétique. Création de contenu photo et vidéo. Envoi de mailing à une liste d'abonnés.`,
    technologies: ["Semrush", "Photoshop", "PremierePro", "Lightroom"],
  },
];

export const FORMATIONS = [
  {
    school: "Armée de l'Air et de l'Espace",
    year: "En cours",
    skills: ["Rigueur", "Dépassement de sois", "Engagement", "Autonomie"],
    description: `Certificat d'aptitude militaire dans l'optique d'une spécialisation 8000 PDI - Technicien Développeur Informatique. Déclassement médical : Blessure aux genoux`,
  },
  {
    school: "OPENCLASSROOMS",
    year: "2023 - 2024",
    skills: ["Développement web", "Gestion de projet", "Debugg", "Optimisation"],
    description: `De retour à mes premiers amours, l'informatique et le développement. 
    La prise de maturité qui fut la mienne m'a fait comprendre dans quel domaine je voulais 
    vraiment travailler. Après une reconversion, je me sens enfin là où je dois être.`,
  },
  {
    school: "ISEG",
    year: "2020 - 2023",
    skills: ["Communication", "Webmarketing", "Design UI/UX", "Création Graphique"],
    description: `Compte tenu du contexte sanitaire, j'ai dû faire une pause dans mes études, 
    faute d'alternance. J'en ai profité pour intégrer une nouvelle école de communication ou j'ai 
    perfectionné mes compétences au travers de nouveaux cours, stages et alternances...`,
  },
  {
    school: "EPSI/WIS",
    year: "2017 - 2019",
    skills: ["Développement web", "Gestion de projet", "Design UI/UX", "E-commerce"],
    description: `Passionné d'informatique, je décide de rejoindre l'EPSI, une école 
    d'informatique. J'y ai découvert les bases du code. Faute de maturité, je me suis 
    réorienté chez WIS, une école de Webmarketing ou j'y découvert les métiers de la 
    communication et du digital...`,
  },
];

export const PROJECTS = [
  {
    id: 9,
    title: "EVOGYM",
    image: project9,
    description:
      "Création d'une application web de gym",
    technologies: ["React", "TypeScript", "Tailwind", "FramerMotion"],
    cahierDesCharges: `Création d'une application web en utilisant React et TypeScript. L'application est moderne avec des animations, ainsi que responsive. Le code est optimisé afin de ne pas faire de répétitions. Il y'a un formulaire de contact qui vérifie les données saisies et signale une erreur le cas échéant.`,
    skills: `Approfondissement de React ainsi qu'une découverte de TypeScript.`,
    githubLink: "https://github.com/sknrct/yoga-app"
  },
  {
    id: 8,
    title: "Calculatrice de prêt immobilier",
    image: project8,
    description:
      "Création d'un site web pour un courtier immobilier",
    technologies: ["PHP", "JavaScript", "WordPress", "AJAX"],
    cahierDesCharges: [ `Dans le cadre de mon alternance chez`, { text: " Infoconception ", link: "https://www.infoconception.fr" }, `j'ai du créer plusieurs sites web notamment celui-ci à partir d'un thème WordPress. Il y'a eu du développement spécifique avec la création d'une calculatrice de prêt immobilier`,
  ],
    skills: `Je suis assez fier de cette calculatrice car j'ai dû apprendre en faisant et j'ai finalement réussi à obtenir un résultat qui me convient et qui convient au client. Je me suis senti plus autonome en PHP par la suite. J'ai appris à utiliser des ACF (Advanced Custom Field), un plugin WordPress qui permet d'appeler des champs de données, de la même manière qu'un JSON.`,
    githubLink: "https://www.creditcourtierdefrance.com/"
  },
  {
    id: 7,
    title: "Portfolio",
    image: project7,
    description:
      "Création et publication d'un portfolio de développeur.",
    technologies: ["React", "Tailwind", "Vite"],
    cahierDesCharges: `Voici le projet que j'attendais le plus ! En effet, cela fait longtemps que je souhaite créer un portfolio. Celui-ci pouvait être fait avec la technologie de mon choix, c'est donc naturellement que j'ai choisis React ! Pour le style, j'ai opté pour Tailwind, j'étais très curieux de tester cette technologie dont j'ai beaucoup entendu parler. Le portfolio doit présenter au moins deux projets et présenter de manière claire mes compétences et mon parcours en développement... Mais pas que. Évidemment le référencement et le responsive doivent être présent, ainsi qu'un code optimisé.`,
    skills: `Avec ce projet, j'ai pu approfondir un peu plus l'usage de React, consolider certains acquis et apprendre de nouvelles choses. J'ai aussi pu découvrir Tailwind que j'ai trouvé très pratique et avec une documentation particulièrement claire. Enfin la notion principale, le temps, j'ai dû gérer ce facteur important via une organisation la plus précise possible.`,
    githubLink: "https://github.com/sknrct/oc-portfolio"
  },
  {
    id: 6,
    title: "Mon Vieux Grimoire",
    image: project6,
    description:
      "Développement du back-end d'un site de notation de livres",
    technologies: ["Backend", "NodeJs", "MongoDB", "Express"],
    cahierDesCharges: `Premier projet Backend, et quel projet ! J'ai été amené à créer un serveur avec Express et le connecter à une bdd MongoDB. Cela implique donc la mise en place de la structure du serveur et la gestion de la communication entre le serveur et la base de données. J'ai développé les modèles de données CRUD pour la gestion des livres et des notations. J'ai aussi mis en place un système d'authentification sécurisé pour les utilisateurs. Les utilisateurs en question devaient pouvoir ajouter des images via leurs machines et celles-ci doivent être automatiquement optimisées.`,
    skills: `Grâce à ce projet, j'ai découvert le développement Backend qui m'a beaucoup plu ! J'ai appris à créer un serveur et le connecter à une bdd, gérer des opérations CRUD, mis en place un système d'authentification avec un token JWT. Mais j'ai aussi appris à sécuriser une BDD, sécuriser des champs pour éviter les injections, le brut force et d'autres attaques.`,
    githubLink: "https://github.com/sknrct/oc-backend"
  },
  {
    id: 5,
    title: "Kasa",
    image: project5,
    description:
      "Création d'une application web de location immobilière avec React.",
    technologies: ["Frontend","React", "NodeJs", "SaSS"],
    cahierDesCharges: `On monte encore d'un cran avec ce projet, car on y aborde notre premier Framework : React ! Il s'agit d'un projet très complet, car j'ai dû réaliser beaucoup de choses. Dans un premier temps, j'ai dû assimiler la logique de composants de React, configurer une navigation avec React Router, utiliser les données contenues dans un JSON. Le tout avec Create React App et NodeJs pour la configuration de l'app et éxécuter du code en dehors du navigateur.`,
    skills: `Je suis très heureux d'avoir validé ce projet, car l'apprentissage d'un Framework me tenait à cœur. J'ai beaucoup aimé la logique de composants réutilisables ainsi que l'aspect dynamique du projet que je trouve très puissant.`,
    githubLink: "https://github.com/sknrct/oc-react"
  },
  {
    id: 4,
    title: "Nina Carducci",
    image: project4,
    description:
      "Debugg et optimisation du référencement du site d'une photographe.",
    technologies: ["Frontend", "JavaScript", "Debugg"],
    cahierDesCharges: `Dans ce projet, j'ai dû identifier les problèmes de chargement et de référencement via LightHouse et Wave pour évaluer les performances actuelles du site et son accessibilité. J'ai ensuite proposé des recommandations pour améliorer la vitesse de chargement, la structure du code ainsi que le référencement. Une fois les problèmes réglés, j'ai rédigé un rapport illustrant les résultats avant et après modifications.`,
    skills: `Cependant, une piqûre de rappel ne fait jamais de mal. J'ai pu me remémorer certaines manières d'optimiser un site web. Le référencement est d'une importante cruciale pour apparaître sur Google, ce fut donc intéressant de confirmer ces acquis.`,
  },
  {
    id: 3,
    title: "Menu Maker by Qwenta",
    image: project3,
    description:
      "Planification du développement du site d'un client. Gestion de projet et veille.",
    technologies: ["Frontend", "Notion", "Gestion de projet"],
    cahierDesCharges: `Avec ce projet, très peu de technique, mais beaucoup de recherches et de réflexions. Je devais planifier le développement du site d'un client. Pour ce faire, j'avais à ma disposition les maquettes, spécifications fonctionnelles et les User Stories du site. Il fallait mettre en place une veille technologique, rédiger les spécifications techniques et faire de la gestion de projet via un Kanban.`,
    skills: `J'ai trouvé vraiment intéressant de quitter la technique pour un peu plus de théorie afin de comprendre comment organiser un projet. Bien que celui-ci soit fictif, il donne envie de s'impliquer dans l'équipe créée. `,
  },
  {
    id: 2,
    title: "Sophie Bluel",
    image: project2,
    description:
      "Création d'une page web dynamique en Javascript et en communiquant avec une API.",
    technologies: ["Frontend", "JavaScript", "Swagger"],
    cahierDesCharges: `Ce projet implique la création d'une page web dynamique pour une architecte d'intérieur en utilisant Javascript et en communiquant avec une API.
    Je n'ai travaillé que sur la partie Front pour développer la page de présentation des travaux de l'architecte, une modale permettant d'uploader de nouveaux médias 
    ainsi que la page de connexion pour l'administrateur. Cela implique la gestion des évènements utilisateurs et la manipulation des éléments du DOM avec JavaScript.`,
    skills: `Grâce à cet exercice nouveau, j'ai pu mettre un vrai pas dans la programmation, les choses sont devenues sérieuses. J'ai appréhendé le JavaScript, découvert le JSON, 
    les API et ai eu un premier aperçu de ce qu'est un Backend.`,
    githubLink: "https://github.com/sknrct/oc-js"
  },
  {
    id: 1,
    title: "Booki",
    image: project1,
    description:
      "Création de la page d'accueil d'un agence de voyage en HTML & CSS.",
    technologies: ["Frontend", "HTML", "CSS", "Figma"],
    cahierDesCharges: `Le but de ce projet était de créer la page d'accueil d'une agence de voyage en HTML & CSS. La mission principale était d'intégrer l'interface responsive du site. J'avais à disposition une maquette Figma pour les différents supports (Desktop, Tablette et Mobile).`,
    skills: `Cependant, ce projet fut une excellente manière de se remettre en selle ! La connaissance vient en pratiquant, j'ai donc retrouvé des automatismes plus solides, un process de travail plus précis pour respecter le cahier des charges.`,
    githubLink: "https://github.com/sknrct/OC-Projet1-BOOKI"
    }
];

export const FILTERS = [
  "All",
  "React",
  "NodeJs",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "Tailwind",
  "MongoDB",
  "Swagger",
  "Vite",
  "Backend",
  "Frontend",
  "Express",
  "Debugg",
  "AJAX",
];

export const CONTACT = {
  address: "3 allée des rochettes, 44190 Gorges.",
  phoneNo: "+12 4555 666 00 ",
  email: "thibault.boucardgarda@gmail.com",
};
