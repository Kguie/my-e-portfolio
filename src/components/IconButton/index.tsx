/**
 * Component IconButton
 **/

type Props = {
    icon: any,
    link: string,
    color: string
};

/**
 * Constitue un bouton ayant la forme d'une icône
 */
export default function IconButton({ icon, link, color }: Props) {
    return (
        <a
            href={link}
            className={"icon-button " + color}
        >
            {icon}
        </a>
    )
};