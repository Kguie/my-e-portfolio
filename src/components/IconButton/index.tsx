/**
 * Component IconButton
 **/

import ReactGA from 'react-ga';

type Props = {
    icon: React.ReactElement,
    link: string,
    color: string,
    label: string
};

/**
 * Constitue un bouton ayant la forme d'une icône
 * @param {React.ReactElement} icon - Icône sous format SGV à afficher.
 * @param {string} link - Lien du bouton.
 * @param {string} color - Couleur du texte.
 * @param {string} label - Libellé de l’icône.
 * @returns {React.ReactElement} - Bouton icône.
 */
export default function IconButton({ icon, link, color, label }: Props): React.ReactElement {

    // Action Google Analytics
    const handleClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Clic',
            label: "Lien " + label
        });
    };

    return (
        <a
            onClick={handleClick}
            href={link}
            className={"icon-button " + color}
        >
            {icon}
        </a>
    )
};