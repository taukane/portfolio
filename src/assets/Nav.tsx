import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router";
import i18n from '../i18n';
import DarkModeToggle from './DarkModeToggle';
import ContatoModal from '../ContatoModal.jsx';

function Nav() {
    useEffect(() => {
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, []);

    const [cursor, setCursor] = useState('crosshair');

    const openModal = () => {
        setShowContato(true);
        setCursor(prevState => {
        if(prevState === 'crosshair'){
            return 'pointer';
        }
        return 'crosshair';
        });
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLang);
    };

    const [showContato, setShowContato] = useState(false);

    const isPortfolioPage = location.pathname === '/portfolio-taukane';

    return (
    <>
    <nav className="navbar bg-body-tertiary bg-gradient shadow sticky-top">
        <div className="container-fluid">
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir Navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <DarkModeToggle />
            <a className="open-modal btn btn-outline-secondary"
            style={{ cursor: cursor }}
            onClick={openModal} title="Contato" aria-label="Contato">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>
            </a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav my-3 hstack gap-5 d-block d-md-flex">
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                            isActive ? "nav-link active" : "nav-link"
                        } to="/">
                        Taukane
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                            isActive ? "nav-link active" : "nav-link"
                        } to="/portfolio">
                        Portfolio
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                            isActive ? "nav-link active" : "nav-link"
                        } to="/portfolio-taukane">
                        Portfolio +
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {!isPortfolioPage && (
        <button 
            onClick={toggleLanguage}
            className="btn btn-sm btn-outline-secondary position-fixed bottom-0 start-0 m-3" 
            style={{zIndex: 1}}>
            {i18n.language === 'pt' ? 'EN' : 'PT'}
        </button>
    )}
    <ContatoModal 
        show={showContato} 
        onClose={() => setShowContato(false)} 
    />
    </>
    )
}

export default Nav;