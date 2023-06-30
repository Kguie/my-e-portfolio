/**
 * Page Skills
 **/

import { Container } from "react-bootstrap";

/**
 * Affiche la page skills comprenant les hard skills et les soft skills
 */
export default function Skills() {
    return (
        <section className="page-section">
            <Container fluid='md'>
                <div className="d-flex justify-content-center">
                    <h1 className="page-section__title">Compétences</h1>
                </div>
                <div className="skills-box">
                    <p className="text-center">Je vous expose ici mes compétences, séparées en deux catégories</p>
                </div>
            </Container>
        </section>
    )
}