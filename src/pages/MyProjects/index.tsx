/**
 * Page MyProjects
 **/

import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

/**
 * Affiche mes projets avec possibilité de les trier et de les voir en détail
 */
export default function MyProjects() {
    //State des filtres
    const [react, setReact] = useState<boolean>(false);
    const [frontend, setFrontend] = useState<boolean>(false);
    const [backend, setBackend] = useState<boolean>(false);
    const [javascript, setJavascript] = useState<boolean>(false);
    const [typescript, setTypescript] = useState<boolean>(false);

    return (
        <section className="page-section">
            <Container fluid='md'>
                <div className="d-flex justify-content-center">
                    <h1 className="page-section__title">Mes projets</h1>
                </div>
                <div className="projects-box">
                    <p className="text-center">Je vous présente plusieurs de mes projets réalisés depuis le début de ma formation de développeur web chez OpenClassrooms, mais aussi après.</p>

                    {/* Section des boutons de filtres pour afficher les cartes projets */}
                    <div className="d-flex mt-4 ms-2  gap-3 align-items-baseline flex-wrap ">
                        <p className="fw-bold">Filtres :</p>
                        {react ? <Button variant="success" className="text-white" onClick={() => setReact(false)}>React</Button>
                            : <Button variant="outline-success" onClick={() => setReact(true)} >React</Button>}
                        {frontend ? <Button variant="success" className="text-white" onClick={() => setFrontend(false)}>Frontend</Button>
                            : <Button variant="outline-success" onClick={() => setFrontend(true)}>Frontend</Button>}
                        {backend ? <Button variant="success" className="text-white" onClick={() => setBackend(false)}>Backend</Button>
                            : <Button variant="outline-success" onClick={() => setBackend(true)}>Backend</Button>}
                        {javascript ? <Button variant="success" className="text-white" onClick={() => setJavascript(false)}>Javascript</Button>
                            : <Button variant="outline-success" onClick={() => setJavascript(true)}>Javascript</Button>}
                        {typescript ? <Button variant="success" className="text-white" onClick={() => setTypescript(false)}>Typescript</Button>
                            : <Button variant="outline-success" onClick={() => setTypescript(true)}>Typescript</Button>}
                    </div>

                    {/* Affichage des cartes projets */}
                    <Row>

                    </Row>

                </div>
            </Container>
        </section>);
};