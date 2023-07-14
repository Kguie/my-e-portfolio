/**
 * Component SkillCard
 **/

import { Card } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

type Props = {
    icon: string,
    title: string,
    level: number
};

/**
 * Affiche la carte de hard skill avec son image, son titre, et son niveau
 * @param {string} icon - Chemin vers l'image de l'icône.
 * @param {string} title - Titre de la compétence.
 * @param {number} level - Niveau de maîtrise de la compétence.
 * @returns {React.ReactElement} - Carte compétence.
 */
export default function SkillCard({ icon, title, level }: Props): React.ReactElement {
    return (
        <Card >
            <div className="skill-card" data-testid="skill-card">
                <Card.Img height={"50px"} width={"40px"} variant="horizontal" src={icon} alt={"logo " + title} />
                <Card.Body className="skill-card__content d-flex flex-column text-body">
                    <h2 className="fs-5">{title}</h2>
                    <ProgressBar now={level} variant="primary" />
                </Card.Body>
            </div>
        </Card>)
};