/**
 * Component ProjectCard
 **/

import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useWindowSize } from "react-use";

import { ProjectProps } from "../../data/projects";
import ProjectTag from "../ProjectTag";

/**
 * Affiche la carte descriptive du projet
 */
export default function ProjectCard({ name, tags, introduction, description, githubLink, url }: ProjectProps) {
    //State d'ouverture de la carte
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //Largeur de l'écran
    const { width } = useWindowSize();
    const maxWidth: number = 768;

    return (
        <Card
            onClick={() => width < maxWidth && setIsOpen(!isOpen)}
            onMouseEnter={() => width >= maxWidth && setIsOpen(true)}
            onMouseLeave={() => width >= maxWidth && setIsOpen(false)} >
            <div className="project-card">
                <div className="project-card__arrow">
                    →
                </div>
                <h2 className="fs-5">{name}</h2>
                <p>{introduction}</p>
                {isOpen &&
                    <div className="project-card__links-box">
                        <p>Pour voir le code du projet, voici le <a href={githubLink} className="fw-bold">lien github</a>.</p>
                        {url && <p>Pour observer le résultat, <a href={url} className="fw-bold text-warning">cliquez ici</a>.</p>}
                        {description &&
                            <div>
                                {description.text && <p>{description.text}</p>}
                                {description.link1 &&
                                    <Button
                                        variant='link'
                                        size='sm'
                                        onClick={() => {
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
