/**
 * Page Home
 **/

import AboutMe from "../../components/AboutMe";
import Banner from "../../components/Banner";
import SEO from "../../components/Seo";

/**
 * Affiche la page d'accueil 
 */
export default function Home() {

    const title: string = "Portfolio de Guieba Kévin - Page de présentation"
    const description: string = "Présentation de GUIEBA Kévin, qui recherche une alternance pour un poste développeur d'applications javascript react ,où on peut télécharger son CV."
    return (
        <div>
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