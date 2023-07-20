/**
 * Page MyProjects
 **/

import { useState } from "react";
import { Button, Container } from "react-bootstrap";

import { ProjectProps, projectsList } from "../../data/projects";
import ProjectDashboard from "../../components/ProjectsDashboard";
import { useGoogleAnalytics } from "../../utils/hooks";

/**
 * Affiche mes projets avec possibilité de les trier et de les voir en détail
 * @returns {React.ReactElement} - Section MyProjects
 */
export default function MyProjects(): React.ReactElement {
    //State des filtres
    const [react, setReact] = useState<boolean>(false);
    const [frontend, setFrontend] = useState<boolean>(false);
    const [backend, setBackend] = useState<boolean>(false);
    const [javascript, setJavascript] = useState<boolean>(false);
    const [typescript, setTypescript] = useState<boolean>(false);

    //States des tags recherchés
    const [addedTags, setAddedTags] = useState<Array<string>>([]);

    useGoogleAnalytics();

    /**
     * Gère l'ajout ou la suppression de tag de la liste addedTags au clic sur un bouton
     * @param {string} label - Libellé du tag
     * @returns {void}
     */
    function handleTag(label: string): void {
        if (addedTags.length > 0 && addedTags.includes(label)) {
            const newTags = addedTags.filter((tag: string) => tag !== label);
            setAddedTags(newTags);
        } else {
            const newTags = [...addedTags, label];
            setAddedTags(newTags);
        }
    }

    /**
     * Renvoie la liste de projets à afficher en fonction de la liste de tags sélectionnés
     * @returns {Array<string>} Liste de projets à afficher
     */
    function handleFilteredProjects(): Array<any> {
        //Renvoie la liste d'origine si aucun tag n'est sélectionné
        if (addedTags.length === 0) {
            return projectsList;
        } else {
            //Liste de projets filtrée
            let filteredProjects: Array<ProjectProps> = [];
            projectsList.forEach((project: ProjectProps) => {

                //Détermine si le tag sélectionné correspond à un des tags du projet
                let isTaggedProject: boolean = true;

                addedTags.forEach((tag: string) => {
                    if (!project.tags.includes(tag)) {
                        isTaggedProject = false;
                        return;
                    }
                });
                //Ajout du projet à la liste filtrée
                if (isTaggedProject === true) {
                    filteredProjects.push(project)
                };
            });
            if (filteredProjects.length === 0) {
                return [];
            }
            else {
                return filteredProjects;
            }
        }
    }

    useGoogleAnalytics();
    return (
        <section className="page-section">
            <Container fluid='md'>
                <div className="d-flex justify-content-center">
                    <h1 className="page-section__title">Mes projets</h1>
                </div>
                <div className="projects-box">
                    <p className="text-center text-md-start">Je vous présente plusieurs de mes projets réalisés depuis le début de ma formation de développeur web chez OpenClassrooms, mais aussi après.</p>
                    <p className="text-center text-md-start">Vous pourrez trouver le détail de ces projets sur les cartes, avec un lien github pour avoir accès au code et aux détails techniques, et quand cela est possible, un url pour pouvoir observer le résultat.</p>
                    {/* Section des boutons de filtres pour afficher les cartes projets */}
                    <div className="d-flex mt-5 ms-2  gap-3 align-items-baseline flex-wrap ">
                        <p className="fw-bold">Filtres :</p>
                        {react ?
                            <Button variant="success" className="text-white"
                                onClick={() => {
                                    setReact(false);
                                    handleTag("React");
                                }}>React</Button>
                            : <Button variant="outline-success"
                                onClick={() => {
                                    setReact(true)
                                    handleTag("React");
                                }} >React</Button>}
                        {frontend ?
                            <Button variant="success" className="text-white" onClick={() => {
                                setFrontend(false);
                                handleTag("Frontend");
                            }}>Frontend</Button>
                            : <Button variant="outline-success" onClick={() => {
                                setFrontend(true)
                                handleTag("Frontend");
                            }}>Frontend</Button>}
                        {backend ? <Button variant="success" className="text-white" onClick={() => {
                            setBackend(false);
                            handleTag("Backend");
                        }}>Backend</Button>
                            : <Button variant="outline-success" onClick={() => {
                                setBackend(true);
                                handleTag("Backend");
                            }}>Backend</Button>}
                        {javascript ? <Button variant="success" className="text-white" onClick={() => {
                            setJavascript(false);
                            handleTag("Javascript");
                        }}>Javascript</Button>
                            : <Button variant="outline-success" onClick={() => {
                                setJavascript(true);
                                handleTag("Javascript");
                            }}>Javascript</Button>}
                        {typescript ? <Button variant="success" className="text-white" onClick={() => {
                            setTypescript(false);
                            handleTag("Typescript");
                        }}>Typescript</Button>
                            : <Button variant="outline-success" onClick={() => {
                                setTypescript(true);
                                handleTag("Typescript");
                            }}>Typescript</Button>}
                    </div>

                    {/* Affichage des cartes projets */}
                    {handleFilteredProjects().length > 0 ?
                        <ProjectDashboard projectsList={handleFilteredProjects()} /> :
                        <p className="text-center mt-5 fw-bold">Aucun projet ne correspond à votre recherche</p>
                    }
                </div>
            </Container>
        </section>);
};