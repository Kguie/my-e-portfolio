/**
 * Page Skills
 **/

import { Col, Container, Row } from "react-bootstrap";

import SkillCard from "../../components/SkillCard";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css3.svg";
import sassIcon from "../../assets/sass.svg";
import nodeJsIcon from "../../assets/nodejs.svg";
import jsIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/react.svg";
import typescriptIcon from "../../assets/typescript.svg";
import reduxIcon from "../../assets/redux.svg";
import SEO from "../../components/Seo";

/**
 * Affiche la page skills comprenant les hard skills
 * @returns {React.ReactElement} - Section skills 
 */
export default function Skills(): React.ReactElement {
    const title: string = "Portfolio de Guieba Kévin - Compétences";
    const description: string = "Présentation des compétences techniques de GUIEBA Kévin, qui recherche une alternance pour un poste développeur d'applications javascript react en Guadeloupe ou en full-remote.";

    return (
        <section className="page-section">
            <SEO
                title={title}
                description={description}
                type={"article"}
            />
            <Container fluid='md'>
                <div className="d-flex justify-content-center">
                    <h1 className="page-section__title">Compétences</h1>
                </div>
                <Row className="skills-box">
                    <p className="text-center">Je vous présente ici mes compétences techniques</p>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={htmlIcon}
                            title={"HTML 5"}
                            level={80}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={cssIcon}
                            title={"CSS 3"}
                            level={60}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={sassIcon}
                            title={"Sass"}
                            level={75}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={jsIcon}
                            title={"Javascript"}
                            level={75}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={nodeJsIcon}
                            title={"Node JS"}
                            level={75}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={reactIcon}
                            title={"React"}
                            level={70}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={typescriptIcon}
                            title={"Typescript"}
                            level={70}
                        />
                    </Col>
                    <Col xs={10} md={5} lg={4}>
                        <SkillCard
                            icon={reduxIcon}
                            title={"Redux"}
                            level={60}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}