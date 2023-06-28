/**
 * Component AboutMe
 **/

import { Col, Container, Row } from "react-bootstrap";

import profil from "../../assets/profil.jpg"
import ContactMeButton from "../ContactMeButton";
import TextButton from "../TextButton";

/**
 * Affiche le component avec une description de mon profil et de ce que je recherche 
 */
export default function AboutMe() {

    return (
        <section className="page_section">
            <Container fluid='md' >
                <div className="d-flex justify-content-center">
                    <h2 className="page_section__title text-center text-uppercase text-success fs-3 fw-bold">À propos de moi</h2>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center about__card ">
                    <div className="about__card__photo_box">
                        <img src={profil} alt="profil" className="about__card__photo_box--image " />
                    </div>
                    <div className="about__card__content">
                        <p className="about__card__content__text">
                            En reconversion professionnelle, installé en Guadeloupe, après
                            une formation de développeur web, je cherche à poursuivre mon
                            parcours en suivant la formation OPENCLASSROOMS
                            développeur d'applications - javascript React en alternance pour une durée de 18 mois au rythme de un jour de cours par semaine.
                            <br />
                            Je serais aussi bien intéressé que par un poste en télétravail que par un poste en présentiel.
                        </p>
                        <Row>
                            <Col xs={12} lg={6}>
                                <p className="text-uppercase fw-bold">NOM :</p>
                                <p>GUIEBA Kévin</p>
                            </Col>
                            <Col xs={12} lg={6}>
                                <p className="text-uppercase fw-bold">poste recherché :</p>
                                <p>Développeur d'applications JavaScript React en alternance</p>
                            </Col>
                            <Col xs={12} lg={6}>
                                <p className="text-uppercase fw-bold">Age :</p>
                                <p>37 ans</p>
                            </Col>
                            <Col xs={12} lg={6}>
                                <p className="text-uppercase fw-bold">Lieu :</p>
                                <TextButton
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                                            <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                        </svg>
                                    }
                                    link={"https://www.google.fr/maps/@16.201248,-61.6027573,15.83z?entry=ttu"}
                                    text={"Petit-Bourg, Guadeloupe"} />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="d-flex mt-5 justify-content-around ">
                    <ContactMeButton
                        isColored={true}
                        isLarge={true} />
                </div>
            </Container>
        </section>
    )
}