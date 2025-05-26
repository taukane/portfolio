import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
} from "react-router";

import './default.scss';

import App from './App.jsx';
import Port from './Port.jsx';
import Portfolio from './Portfolio.jsx';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

let firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

if (process.env.NODE_ENV === 'production') {
    firebaseConfig.measurementId = import.meta.env.VITE_MEASUREMENT_ID;
}

const app = initializeApp(firebaseConfig);
let analytics = null;
if (process.env.NODE_ENV === 'production') {
    analytics = getAnalytics(app);
}

const rootElement = document.getElementById('root');

function MetaDescriptionUpdater() {
    const location = useLocation();

    useEffect(() => {
        let description = "Sou Taukane Pires, Web Full Stack, Designer Gráfico e UI/UX, criação e desenvolvimento de interfaces visuais desde 2002. Confira meu Portfolio.";

        switch (location.pathname) {
            case "/":
                description = "Sou Taukane Pires, Web Full Stack, Designer Gráfico e UI/UX, criação e desenvolvimento de interfaces visuais desde 2002. Confira meu Portfolio.";
                break;
            case "/portfolio":
                description = "Designer Gráfico e UI/UX, desenvolvedor Frontend e Backend.";
                break;
            case "/portfolio-taukane":
                description = "Designer Gráfico e UI/UX, desenvolvedor Frontend e Backend, com experiência em criação e desenvolvimento de interfaces visuais desde 2002.";
                break;
            default:
                description = "Sou Taukane Pires, Designer Web e Gráfico. Atuo em criação e desenvolvimento de interfaces visuais desde 2002. Confira meu Portfolio.";
                break;
        }

        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }

        metaDescription.content = description;
    }, [location]);

    return null;
}

function TitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        let title = "Taukane Portfolio / Designer Web e Gráfico Curitiba";

        switch (location.pathname) {
            case "/":
                title = "Taukane Portfolio / Designer Web e Gráfico Curitiba";
                break;
            case "/portfolio":
                title = "Portfolio Web e Gráfico";
                break;
            case "/portfolio-taukane":
                title = "Portfolio + Designer Web e Gráfico";
                break;
            default:
                title = "Taukane Portfolio / Designer Web e Gráfico Curitiba";
                break;
        }

        document.title = title;
    }, [location]);

    return null;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <TitleUpdater />
                <MetaDescriptionUpdater />
                <App />
            </>
        )
    },
    {
        path: "/portfolio",
        element: (
            <>
                <TitleUpdater />
                <MetaDescriptionUpdater />
                <Port />
            </>
        )
    },
    {
        path: "/portfolio-taukane",
        element: (
            <>
                <TitleUpdater />
                <MetaDescriptionUpdater />
                <Portfolio />
            </>
        )
    },
        {
        path: "*",
        element: (
            <>
                <TitleUpdater />
                 <MetaDescriptionUpdater />
                <App />
            </>
        )
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);