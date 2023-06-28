/**
 * Component ContactMeButton
 **/

import { Button } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";

type Props = {
    isColored: boolean,
    isLarge: boolean
}

/**
 * Affiche le bouton permettant de naviguer vers la route contact
 * @param {boolean} isColored - Détermine si le bouton est sous fond coloré ou blanc.
 * @param {boolean} isLarge - Détermine si le bouton est de taille large ou petit.
 */
export default function ContactMeButton({ isColored, isLarge }: Props) {
    const navigate: NavigateFunction = useNavigate()

    return (
        <div>
            <Button onClick={() => navigate("/contact")} variant={!isColored ? "light" : "primary"} size={isLarge ? "lg" : "sm"}>
                <p className={"fs-6 mt-0 mb-0 text-uppercase " + (isColored ? "text-white" : "text-primary")}>Contactez moi</p>
            </Button>
        </div>
    )
}