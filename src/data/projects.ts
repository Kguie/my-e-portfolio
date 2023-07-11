/**
 * Liste des projets
 **/
export type ProjectProps = {
    name: string,
    tags: Array<string>,
    introduction: string,
    description: any,
    githubLink: string,
    url: string | null,
}

export const projectsList: Array<ProjectProps> = [
    {
        name: "OC projet 2",
        tags: ["HTML", "CSS", "Responsive", "Frontend", "Démo disponible!"],
        introduction: "L’entreprise Booki souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Nous sommes chargés d'intégrer l'interface du site avec du code HTML et CSS de manière responsive.",
        githubLink: "https://github.com/Kguie/oc-projet-2",
        description: null,
        url: "https://kguie.github.io/oc-projet-2/"
    },
    {
        name: "OC projet 3",
        tags: ["HTML", "SASS", "Responsive", "Frontend", "Démo disponible!"],
        introduction: "La mission est de développer un site “mobile first”, pour l'entreprise 'Oh my food', qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.",
        githubLink: "https://github.com/Kguie/OCprojet3",
        description: null,
        url: "https://kguie.github.io/OCprojet3/"
    },
    {
        name: "OC projet 4",
        tags: ["SEO", "Accessibilité", "Frontend", "Démo disponible!"],
        introduction: "La mission est d'améliorer le référencement d'un site existant pour l'agence ' La Panthère'. Il faut indiquer les parties du site qui ne sont pas optimisées pour le SEO et/ou qui ne sont pas à jour en termes d’accessibilité . Ajouter la bonne pratique à mettre en place pour chaque partie du site qui n’est pas optimisée, en citant les sources. Sélectionner au moins 10 recommandations pour améliorer le site. Appliquer ensuite ces recommandations et enfin, fournir un rapport de comparaison des résultats.",
        githubLink: "https://github.com/Kguie/OCprojet4",
        description: {
            text: "Les différents rapports sont disponibles ici.",
            link1: {
                title: "Rapport d'analyses",
                url: "rapport_analyse_oc4.pdf"
            }, link2: {
                title: "Rapport d'optimisation",
                url: "rapport_optimisation_oc4.pdf"
            },
        },
        url: "https://kguie.github.io/OCprojet4/"
    },
    {
        name: "OC projet 5",
        tags: ["Javascript", "Frontend"],
        introduction: "La mission est l’implémentation du site de 'Kanap' de manière dynamique. Il faut unifier les travaux déjà réalisés par l’équipe (HTML et CSS pour le frontend et l'API pour le backend) en intégrant dynamiquement les éléments de l’API dans les différentes pages web avec JavaScript.",
        githubLink: "https://github.com/Kguie/OC-Projet5",
        description: {
            link1: {
                title: "Plan de tests d'acceptations",
                url: "plan_test_oc5.pdf"
            },
            link2: {
                title: "Lien vers l'API",
                url: "https://github.com/OpenClassrooms-Student-Center/P5-Dev-Web-Kanap/tree/master/back"
            },
        },
        url: null
    },
    {
        name: "OC projet 6",
        tags: ["Javascript", "Nodejs", "MongoDB", "Backend"],
        introduction: "La mission est de construire une api sécurisée pour une application d'évaluation pour l'entreprise 'Piquante'. L'api sera sous Nodejs connectée à une base de données sous MongoDB.",
        githubLink: "https://github.com/Kguie/OC-Projet-6",
        description: null,
        url: null
    },
    {
        name: "OC projet 7",
        tags: ["Javascript", "React", "Typescript", "Frontend", "Tests unitaires", "Démo disponible!"],
        introduction: "La mission est de construire une application web React pour l'agence immobilière Kasa. Normalement les données étaient stockés en front, mais j'ai rajouté une API.",
        githubLink: "https://github.com/Kguie/OC-projet7",
        description: null,
        url: "https://oc-projet7-nine.vercel.app/"
    },
    {
        name: "OC projet 7 - backend",
        tags: ["Javascript", "React", "Typescript", "Frontend", "Tests unitaires"],
        introduction: "Mission réalisée en complément du projet 7 afin que les données soient fournies par une API",
        githubLink: "https://github.com/Kguie/oc-projet-7-serverless-api",
        description: null,
        url: null
    },
    {
        name: "admin-test frontend",
        tags: ["Javascript", "React", "Typescript", "Frontend", "Tests unitaires", "Redux", "React MUI", "Démo disponible!"],
        introduction: "Mission réalisée pour une pâtissière indépendante, va de paire avec admin-test backend.",
        githubLink: "https://github.com/Kguie/test-admin-react-app",
        description: {
            text: "Pour tester l'application, vous pouvez vous connecter avec l'identifiant 'kguie.test@outlook.com' et le mot de passe 'Testmyapp!2023'"
        },
        url: "https://test-admin-app.vercel.app/"
    },
    {
        name: "admin-test backend",
        tags: ["Javascript", "Typescript", "Backend", "MongoDB"],
        introduction: "Mission réalisée pour une pâtissière indépendante, va de paire avec admin-test frontend.",
        githubLink: "https://github.com/Kguie/test-admin-backend",
        description: null,
        url: null
    },
    {
        name: "my-e-portfolio",
        tags: ["Javascript", "Typescript", "Frontend", "Tests unitaires", "Bootstrap", "Sass", "Démo disponible!"],
        introduction: "Portfolio sur lequel vous naviguez actuellement.",
        githubLink: "https://github.com/Kguie/my-e-portfolio",
        description: null,
        url: null
    },

];