/**
 * Gestion de google analytics
 **/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function AnalyticsListener() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('votre-id-de-suivi');
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return null;
}