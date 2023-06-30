/**
 * Liste des projets
 **/
type ProjectsListProps = {
    name: string,
    tags: Array<string>,
    introduction: string,
    description: string,
    githubLink: string,
    url: string,
}

export const projectsList: Array<ProjectsListProps> = [
    {
        name: "OC projet 2",
        tags: ["HTML", "CSS", "Responsive", "Frontend"],
        introduction: "L’entreprise Booki souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Nous sommes chargés d'intégrer l'interface du site avec du code HTML et CSS de manière responsive.",
        description: "Détails techniques disponibles sur le readMe du dossier github.",
        githubLink: "https://github.com/Kguie/oc-projet-2",
        url: "https://kguie.github.io/oc-projet-2/"
    }
];