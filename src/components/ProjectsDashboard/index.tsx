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
 */
export default function ProjectDashboard({ projectsList }: Props) {
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