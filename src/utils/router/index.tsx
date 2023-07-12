/**
 * Gestion de la logique de routage avec ajout de google analytics
 **/

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import NavHeader from "../../components/NavHeader";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import MyProjects from "../../pages/MyProjects";
import AnalyticsListener from "../analytics";

/**
 * Gestion du router et des routes de l'application
 * @return {React.ReactElement} - Routeurs de l'application.
 */
export function MyRouter(): React.ReactElement {
    return (
        <BrowserRouter>
            <AnalyticsListener />
            <NavHeader />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<MyProjects />} />
            </Routes>
        </BrowserRouter>
    )
}



