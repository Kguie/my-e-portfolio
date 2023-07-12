/**
 * Component ProjectTag
 **/

import { Badge } from "react-bootstrap";

type Props = {
    label: string
}

/**
 * Affiche le tag sous forme de pill
 * @param {string} label - Libellé du tag.
 * @returns {React.ReactElement} - Tag.
 */
export default function ProjectTag({ label }: Props): React.ReactElement {
    return (
        <Badge pill bg={label === "Démo disponible!" ? "warning" : "success"}>
            {label}
        </Badge>)
}