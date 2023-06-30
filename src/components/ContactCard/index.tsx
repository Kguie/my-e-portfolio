/**
 * Component ContactCard
 **/

import { Card } from "react-bootstrap";

type Props = {
    icon: string,
    title: string,
    text: string,
    link: string
}

/**
 * Affiche la carte de contact avec son image, son titre, et son contenu
 */
export default function ContactCard({ icon, title, text, link }: Props) {
    return (
        <Card >
            <a href={link} className="contact-card">
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