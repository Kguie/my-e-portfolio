/**
 * Gestion de la logique de routage
 **/

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../../components/Header";

/**
 * Gestion du router et des routes de l'application
 */
export function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
        </BrowserRouter>
    )
}



