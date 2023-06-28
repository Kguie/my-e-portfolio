/**
 * Component CVButton
 **/

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

type Props = {
    isColored: boolean,
    isLarge: boolean
}

/**
 * Affiche le bouton permettant le téléchargement du CV avec un choix entre deux couleurs et deux tailles
 * @param {boolean} isColored - Détermine si le bouton est sous fond coloré ou blanc.
 * @param {boolean} isLarge - Détermine si le bouton est de taille large ou petit.
 */
export default function CVButton({ isColored, isLarge }: Props) {
    const [error, setError] = useState<boolean>(false);

    /**
     * Lance le téléchargement du CV
     */
    async function handleDownload() {
        try {
            const response = await axios.get('CV_GUIEBA_KEVIN.pdf', { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'CV_GUIEBA_KEVIN.pdf');
            document.body.appendChild(link);
            link.click();
            link.parentNode && link.parentNode.removeChild(link);

        } catch (err: any) {
            setError(true)
        }
    }

    //Permet la suppression de l'alerte 6s après son apparition lors d'une erreur
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 6000);

            return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté avant l'expiration du délai
        }
    }, [error]);

    return (
        <div>
            <Button onClick={handleDownload} variant={!isColored ? "light" : "primary"} size={isLarge ? "lg" : "sm"}>
                <p className={"fs-6 mt-0 mb-0 text-uppercase " + (isColored ? "text-white" : "text-primary")}>Télécharger mon CV</p>
            </Button>
            {error && <Alert className="mt-3" variant="danger" onClose={() => setError(false)}>Le téléchargement du CV a échoué, veuillez me contacter par émail ou téléphone si cette erreur persiste.</Alert>}
        </div>
    )
}