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
 */
export default function SkillCard({ icon, title, level }: Props) {
    return (
        <Card >
            <div className="skill-card" data-testid="skill-card">
                <Card.Img height={"50px"} width={"40px"} variant="horizontal" src={icon} alt="logo html5" />
                <Card.Body className="skill-card__content d-flex flex-column text-body">
                    <h2 className="fs-5">{title}</h2>
                    <ProgressBar now={level} variant="primary" />
                </Card.Body>
            </div>
        </Card>)
};