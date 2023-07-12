/**
 * Component TextButton
 **/

type Props = {
    icon: React.ReactElement,
    link: string,
    text: string
};

/**
 * Constitue un bouton texte
 * @param {React.ReactElement} icon - Image de l’icône sous forme de svg.
 * @param {string} link - Lien du bouton.
 * @param {string} text - Texte du bouton.
 * @returns {React.ReactElement} - Bouton texte.
 */
export default function TextButton({ icon, link, text }: Props): React.ReactElement {
    return (
        <a
            href={link}
            className="text-button "
            data-replace={text}
        >
            {icon}<p>{text}</p>
        </a>
    )
};