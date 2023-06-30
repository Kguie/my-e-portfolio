/**
 * Page Contact
 **/

import { Col, Container, Row } from "react-bootstrap";

import phoneIcon from "../../assets/telephone.svg";
import envelopeIcon from "../../assets/envelope.svg";
import mapIcon from "../../assets/geo.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import ContactCard from "../../components/ContactCard";
import SEO from "../../components/Seo";
import CVButton from "../../components/CVButton";

/**
 * Affiche la page Contact avec tous les moyens de me contacter
 */
export default function Contact() {
    const title: string = "Portfolio de Guieba Kévin - Page de contact";
    const description: string = "Vous cherchez à contacter GUIEBA Kévin, qui recherche une alternance pour un poste développeur d'applications javascript react , c'est par ici.";

    return (
        <section className="page-section">
            <SEO
                title={title}
                description={description}
                type={"article"}
            />

            <Container fluid='md'>
                <div className="d-flex justify-content-center">
                    <h1 className="page-section__title">Informations de contact</h1>
                </div>
                <Row className="contact-box">
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 5 }}>
                        <ContactCard
                            icon={phoneIcon}
                            title={"Téléphone"}
                            text={"+ 590 690 674 961"}
                            link={"tel:+590690674961"}
                        />
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 5 }}>
                        <ContactCard
                            icon={envelopeIcon}
                            title={"Émail"}
                            text={"kevin.guieba@gmail.com"}
                            link={"mailto:kevin.guieba@gmail.com"}
                        />
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 5 }}>
                        <ContactCard
                            icon={mapIcon}
                            title={"Localisation"}
                            text={"Petit-Bourg, Guadeloupe"}
                            link={"https://www.google.fr/maps/@16.201248,-61.6027573,15.83z?entry=ttu"}
                        />
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 5 }}>
                        <ContactCard
                            icon={linkedinIcon}
                            title={"LinkedIn"}
                            text={"in/kguieba"}
                            link={"https://www.linkedin.com/in/kguieba"}
                        />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center ">
                    <CVButton isColored={true} isLarge={true} />
                </div>
            </Container>
        </section>)
};