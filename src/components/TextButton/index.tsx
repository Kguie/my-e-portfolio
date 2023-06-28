/**
 * Component TextButton
 **/

type Props = {
    icon: any,
    link: string,
    text: string
};

/**
 * Constitue un bouton texte
 */
export default function TextButton({ icon, link, text }: Props) {
    return (
        <a
            href={link}
            className="text-button "
            data-replace={text}
        >
            {icon}<p  >{text}</p>
        </a>
    )
};