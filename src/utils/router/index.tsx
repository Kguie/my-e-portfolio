/**
 * Gestion de la logique de routage
 **/

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import NavHeader from "../../components/NavHeader";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";

/**
 * Gestion du router et des routes de l'application
 */
export function MyRouter() {
    return (
        <BrowserRouter>
            <NavHeader />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </BrowserRouter>
    )
}



