/**
 * Gestion de google analytics
 **/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function AnalyticsListener() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('G-9G66DE795D');
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return null;
}