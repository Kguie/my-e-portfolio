/**
 * Component ContactCard
 **/

import { Card } from "react-bootstrap";
import ReactGA from 'react-ga';

type Props = {
    icon: string,
    title: string,
    text: string,
    link: string
}

/**
 * Affiche une carte de contact avec une image, un titre et du contenu.
 * @param {string} icon - Chemin vers l'image.
 * @param {string} title - Titre du contact.
 * @param {string} text - Contenu explicatif.
 * @param {string} link - Lien vers le moyen de contact choisi.
 * @returns {React.ReactElement} - Carte de contact.
 */
export default function ContactCard({ icon, title, text, link }: Props): React.ReactElement {

    //Action google analytics
    const handleClick = () => {
        ReactGA.event({
            category: 'Contact',
            action: 'Clic',
            label: "contact par " + title
        });
    };

    return (
        <Card >
            <a href={link} className="contact-card" onClick={handleClick}>
                <div className="contact-card__arrow">
                    →
                </div>
                <Card.Img className="ms-4 " width={"40px"} variant="horizontal" src={icon} alt="téléphone" />
                <Card.Body className="d-flex flex-column  align-items-end text-body">
                    <h2 className="fs-5">{title}</h2>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>)
}