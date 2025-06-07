import React, { useEffect } from 'react';
import Contato from './Contato.jsx';

const ContatoModal = ({ show, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close btn btn-danger" onClick={onClose}>
                    &times;
                </button>
                <Contato />
            </div>
        </div>
    );
};

export default ContatoModal;