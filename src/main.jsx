import ReactDOM from 'react-dom/client';
import React, { useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
} from "react-router";

import * as bootstrap from 'bootstrap';

import './default.scss';

import App from './App.jsx';
import Port from './Port.jsx';
import Contato from './Contato.jsx';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Api from './Api.jsx';
import Errou from './NotFound.jsx';

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
        let description = "Sou Taukane Pires, Web designer e Gráfico de Curitiba, Designer UX/UI, Desenvolvedor Front-end";

        switch (location.pathname) {
            case "/":
                description = "Sou Taukane Pires, Web designer de Curitiba, com experiencia em conceito para marcas, identidade visual, embalagens, desenvolvimento Front-end em Curitiba";
                break;
            case "/portfolio":
                description = "Portfolio Taukane, Designer UX/UIn Desenvolvedor web Front-end Freelancer em Curitiba";
                break;
            default:
                description = "Sou Taukane Pires, Designer Web e Gráfico de Curitiba. com experiencia em conceito para marcas, identidade visual";
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
        let title = "Web Designer Freelancer / Designer UX/UI  / Desenvolvedor Front-end / Design Gráfico / Taukane Freelancer";

        switch (location.pathname) {
            case "/":
                title = "Taukane: Web Designer / Designer UX/UI  / Desenvolvimento de Websites / Freelancer de Curitiba";
                break;
            case "/portfolio":
                title = "Taukane: Portfólio / Web Designer / Designer Gráfico / Desenvolvedor Front-end / Freelancer Curitiba";
                break;
            default:
                title = "Taukane: Web Designer / Designer UI/UX  / Desenvolvedor Front-end / Designer Gráfico em Curitiba";
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
        path: "/contato",
        element: (
            <>
                <TitleUpdater />
                <MetaDescriptionUpdater />
                <Contato />
            </>
        )
    },
    {
        path: "/api",
        element: (
            <>
                <Api />
            </>
        )
    },
        {
        path: "*",
        element: (
            <>
                <TitleUpdater />
                 <MetaDescriptionUpdater />
                <Errou />
            </>
        )
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);