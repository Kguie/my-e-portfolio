/**
 * Gestion de la logique de routage avec ajout de google analytics
 **/
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from 'react-ga';

import Home from "../../pages/Home";
import NavHeader from "../../components/NavHeader";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import MyProjects from "../../pages/MyProjects";

/**
 * Gestion du router et des routes de l'application
 * @return {React.ReactElement} - Routeurs de l'application.
 */
export function MyRouter(): React.ReactElement {
    useEffect(() => {
        const TRACKER_ID: string = "G-2W8LH9SGWP"
        ReactGA.initialize(TRACKER_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <BrowserRouter>
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



