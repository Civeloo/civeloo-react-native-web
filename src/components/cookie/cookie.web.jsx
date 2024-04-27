import React, { useEffect, useState } from 'react';
import './cookie.web.css';

export default function Cookie() {
    const [show, setShow] = useState(false);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setShow(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setShow(false);
    }

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');

        if (!consent) {
            setShow(true);
        }

    }, []);

    if (!show) return null;

    return (
        <div className="cookie-container">
        <p>This website uses cookies. Do you accept?</p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
        </div>
    );
}
