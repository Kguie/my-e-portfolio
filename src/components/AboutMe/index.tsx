/**
 * Component AboutMe
 **/

import { Col, Container, Row } from "react-bootstrap";

import profil from "../../assets/profil.webp"
import ContactMeButton from "../ContactMeButton";
import TextButton from "../TextButton";

/**
 * Affiche le component avec une description de mon profil et de ce que je recherche
 * @returns { React.ReactElement} - Section A propos 
 */
export default function AboutMe(): React.ReactElement {
    return (
        <section className="page-section">
            <Container fluid='md' >
                <div className="d-flex justify-content-center">
                    <h2 className="page-section__title">À propos de moi</h2>
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
                            développeur d'applications - javascript React en alternance pour une durée de 24 mois au rythme de un jour de cours par semaine.
                            <br />
                            Je serais aussi bien intéressé par un poste en télétravail que par un poste en présentiel.
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
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