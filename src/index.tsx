import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import reportWebVitals from './reportWebVitals';

import { MyRouter } from './utils/router';
import "./utils/style/sass/main.scss";
import { HelmetProvider } from 'react-helmet-async';

//Ajout de google analytics
ReactGA.initialize('G-9G66DE795D');
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MyRouter />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
