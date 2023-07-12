/**
 * Component ProjectCard
 **/

import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useWindowSize } from "react-use";
import ReactGA from 'react-ga';

import { ProjectProps } from "../../data/projects";
import ProjectTag from "../ProjectTag";

/**
 * Affiche la carte descriptive du projet
 * @param {string} name - Nom du projet.
 * @param {Array<string>} tags - Liste des compétences utilisés pour ce projet.
 * @param {string} introduction - Présentation du projet.
 * @param {any} description - Détails du projet si il y en a.
 * @param {string} githubLink - Lien vers le répertoire github du projet.
 * @param {string|null} url - URL du projet si il est déployé.
 * @returns {React.ReactElement} - Carte projet.
 */
export default function ProjectCard({ name, tags, introduction, description, githubLink, url }: ProjectProps): React.ReactElement {
    //State d'ouverture de la carte
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //Largeur de l'écran
    const { width } = useWindowSize();
    const maxWidth: number = 768;

    // Action Google Analytics
    const handleClick = (label: string) => {
        ReactGA.event({
            category: 'Project card',
            action: 'Clic',
            label: "Carte projet " + label
        });
    };


    return (
        <Card
            onClick={() => {
                if (width < maxWidth) {
                    setIsOpen(!isOpen);
                    handleClick(name);
                }
            }}
            onMouseEnter={() => {
                if (width >= maxWidth) {
                    setIsOpen(true);
                    handleClick(name);
                }
            }}
            onMouseLeave={() => width >= maxWidth && setIsOpen(false)} >
            <div className="project-card">
                <div className="project-card__arrow">
                    →
                </div>
                <h2 className="fs-5">{name}</h2>
                <p>{introduction}</p>
                {isOpen &&
                    <div className="project-card__links-box">
                        <p>Pour voir le code du projet, voici le <a onClick={() => handleClick(name + "-nav-github")} href={githubLink} className="fw-bold">lien github</a>.</p>
                        {url && <p>Pour observer le résultat, <a onClick={() => handleClick(name + "-nav-url")} href={url} className="fw-bold text-warning">cliquez ici</a>.</p>}
                        {description &&
                            <div>
                                {description.text && <p>{description.text}</p>}
                                {description.link1 &&
                                    <Button
                                        variant='link'
                                        size='sm'
                                        onClick={() => {
                                            handleClick(name + "-link-" + description.link1.title);
                                            const pdfUrl = description.link1.url;
                                            window.open(pdfUrl, "_blank");
                                        }}
                                    >
                                        {description.link1.title}
                                    </Button>}
                                {description.link2 &&
                                    <Button
                                        variant='link'
                                        size='sm'
                                        onClick={() => {
                                            handleClick(name + "-link-" + description.link1.title);
                                            const pdfUrl = description.link2.url;
                                            window.open(pdfUrl, "_blank");
                                        }}
                                    >
                                        {description.link2.title}
                                    </Button>}
                            </div>}
                    </div>}
                <div className="d-flex gap-2 flex-wrap justify-content-end w-100">
                    {tags.map((tag: string) =>
                        <ProjectTag
                            key={name + "-" + tag}
                            label={tag}
                        />
                    )}
                </div>
            </div>
        </Card>
    );
};
