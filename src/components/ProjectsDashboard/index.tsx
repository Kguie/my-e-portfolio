/**
 * Component ProjectDashboard
 **/

import { Col, Row } from "react-bootstrap"

import { ProjectProps } from "../../data/projects"
import ProjectCard from "../ProjectCard"

type Props = {
    projectsList: Array<ProjectProps>
}

/**
 * Affiche les cartes projets
  * @returns {React.ReactElement} - Tableau des cartes.
 */
export default function ProjectDashboard({ projectsList }: Props): React.ReactElement {
    return (
        <Row className="projects-dashboard">
            {projectsList.map((project: ProjectProps) =>
                <Col key={project.name} xs={10} md={5} lg={4}>
                    <ProjectCard
                        name={project.name}
                        tags={project.tags}
                        introduction={project.introduction}
                        description={project.description}
                        githubLink={project.githubLink}
                        url={project.url}
                    />
                </Col>
            )}

        </Row>)
}