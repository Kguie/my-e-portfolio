/**
 * Component SEO
 **/

import { Helmet } from "react-helmet-async";

type Props = {
    title: string,
    description: string,
    type: string
}

/**
 * Affiche le component SEO qui sert à intégrer le SEO dans une page React
 * @param {string} title - Titre de la page
 * @param {string} description - Description du contenu de la page
 * @param {string} type - Type du contenu de la page
 */
export default function SEO({ title, description, type }: Props) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="robots" content="index, follow" />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    )
}