/**
 * Gestion des hooks custom
 **/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

/**
 * Permet la mise à jour dans google Analytics à chaque nouveau choix de route
 */
export function useGoogleAnalytics(): void {
    const location = useLocation();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [location]);
}
