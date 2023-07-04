/**
 * Component ProjectTag
 **/

import { Badge } from "react-bootstrap";

type Props = {
    label: string
}

/**
 * Affiche le tag sous forme de 
 */
export default function ProjectTag({ label }: Props) {
    return (
        <Badge pill bg={label === "Démo disponible!" ? "warning" : "success"}>
            {label}
        </Badge>)
}