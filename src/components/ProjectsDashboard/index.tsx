/**
 * Component ProjectDashboard
 **/

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
        <div>
            {projectsList.map((project: ProjectProps) =>
                <ProjectCard />
            )}

        </div>)
}