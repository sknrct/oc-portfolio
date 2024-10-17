import project1 from "../assets/projects/Booki.png";
import project2 from "../assets/projects/sophie-bluel.png";
import project3 from "../assets/projects/planification.png";
import project4 from "../assets/projects/nina-carducci.png";
import project5 from "../assets/projects/kasa.png";
import project6 from "../assets/projects/vieux-grimoire.png";
import project7 from "../assets/projects/project-7.png";


export const INTRO_CONTENT = `Titulaire d'un master en webmarketing, je me reconvertis dans le développement web, avec une appréciation pour le backend, en tant qu'autodidacte. Mes compétences en communication, design et marketing me rendent polyvalent. Je cherche un poste de développeur junior sur Nantes, Clisson, Vertou et alentours. Je parle anglais couramment et ai des notions d'italien.`;

export const ABOUT_TEXT = `Je suis un développeur full stack passionné et autodidacte, avec un parcours en communication et design qui me rend polyvalent. Après un master en communication, je suis revenu au développement, mes premières amours. J'ai d'abord découvert des langages comme React et JavaScript en frontend, ainsi que le backend, et depuis, je prends plaisir à relever des défis techniques tout en apportant une attention particulière aux détails et à l'UX. Mon parcours atypique me permet de combiner l’aspect technique avec un vrai souci du design et de l’efficacité. En dehors du code, je suis passionné par la photo, la vidéo et les sports mécaniques.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Alternant Développeur Web",
    company: "Infoconception",
    description: `Devellopement de site web via Wordpress et PHP selon un cahier des charges définis. Développement spécifique selon les besoins du client. Formation OpenClassrooms, cursus Développeur Web.`,
    technologies: ["WordPress", "PHP", "PHPMyAdmin", "AJAX"],
  },
  {
    year: "2022 - 2023",
    role: "Alternant Chargé de communication",
    company: "Benevolt",
    description: `Création d'une stratégie de communication. Création de contenu photo, vidéo et affiches. Envoi de mailing à une liste d'abonnées. Gestion de projet dans l'accompagnement d'une alternante`,
    technologies: ["SendinBlue", "Photoshop", "Figma", "PremierePro"],
  },
  {
    year: "2021 - 2022",
    role: "Alternant Chargé de communication",
    company: "CCA Group",
    description: `Création d'une stratégie de communication adaptée au monde de la cosmétique. Création de contenu photo et vidéo. Envoi de mailing à une liste d'abonnées.`,
    technologies: ["Semrush", "Photoshop", "PremierePro", "Lightroom"],
  },
];

export const FORMATIONS = [
  {
    school: "EPSI/WIS",
    year: "2017 - 2019",
    skills: ["Développement web", "Gestion de projet", "Design UI/UX", "E-commerce"],
    description: `Passionné d'informatique, je décide de rejoindre l'EPSI, une école 
    d'informatique. J'y ai découvert les base du code. Faute de maturité je me suis 
    réorienté chez WIS, une école de Webmarketing ou j'y découvert les métiers de la 
    communication et du digital...`,
  },
  {
    school: "ISEG",
    year: "2020 - 2023",
    skills: ["Communication", "Webmarketing", "Design UI/UX", "Création Graphique"],
    description: `Compte tenu du contexte sanitaire, j'ai du faire une pause dans mes 
    études, faute d'alternance. J'en ai profité pour intégrer une nouvelle école de 
    communication ou j'ai perfectionné mes compétences au travers de nouveaux cours, 
    stages et alternances...`,
  },
  {
    school: "OPENCLASSROOMS",
    year: "2023 - 2024",
    skills: ["Développement web", "Gestion de projet", "Debugg", "Optimisation"],
    description: `De retour à mes premiers amours, l'informatique et le développement. 
    La prise de maturité qui fut la mienne m'a fait comprendre dans quel domaine je voulais 
    vraiment travailler. Après une reconversion je me sens enfin là ou je dois être.`,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Booki",
    image: project1,
    description:
      "Création de la page d'accueil d'un agence de voyage en HTML & CSS.",
    technologies: ["Frontend", "HTML", "CSS", "Figma"],
    issues: ["Frontend", "HTML", "CSS", "Figma"],
    skills: ["Adaptabilité", "Chercher infos", "CSS", "Figma"],
    githubLink: "https://github.com/username/booki"
    },
  {
    title: "Sohpie Bluel",
    image: project2,
    description:
      "Création d'une page web dynamique en Javascript et en communiquant avec une API.",
    technologies: ["Frontend", "JavaScript", "Swagger"],
  },
  {
    title: "Meny Maker by Qwenta",
    image: project3,
    description:
      "Planification du développement du site d'un client. Gestion de projet et veille.",
    technologies: ["Frontend", "Notion", "Gestion de projet"],
  },
  {
    title: "Nina Carducci",
    image: project4,
    description:
      "Debugg et optimisation du référencement du site d'une photographe.",
    technologies: ["Frontend", "JavaScript", "Debugg"],
  },
  {
    title: "Kasa",
    image: project5,
    description:
      "Création d'une application web de location immobilière avec React.",
    technologies: ["Frontend","React", "NodeJs", "SaSS"],
  },
  {
    title: "Mon Vieux Grimoire",
    image: project6,
    description:
      "Dévelomment du back-end d'un site de notation de livres",
    technologies: ["Backend", "NodeJs", "MongoDB", "Express"],
  },
  {
    title: "Portfolio",
    image: project7,
    description:
      "Création et publication d'un portfolio de développeur.",
    technologies: ["React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "3 allée des rochettes, 44190 Gorges.",
  phoneNo: "+12 4555 666 00 ",
  email: "thibault.boucardgarda@gmail.com",
};
