/**
 * Page Home
 **/

import AboutMe from "../../components/AboutMe";
import Banner from "../../components/Banner";
import SEO from "../../components/Seo";
import { useGoogleAnalytics } from "../../utils/hooks";

/**
 * Affiche la page d'accueil
 * @returns {React.ReactElement} - section Home 
 */
export default function Home(): React.ReactElement {
    const title: string = "Portfolio de Guieba Kévin - Page de présentation"
    const description: string = "Présentation de GUIEBA Kévin, qui recherche une alternance pour un poste développeur d'applications javascript react ,où on peut télécharger son CV."

    useGoogleAnalytics();
    return (
        <div >
            <SEO
                title={title}
                description={description}
                type={"article"}
            />
            <Banner />
            <AboutMe />
        </div>
    )
} 