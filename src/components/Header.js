import React from 'react';

import logo from '../assets/images/facebook-logo.png';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Facebook logo" />
                <div className="profile">
                    <span>Meu perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
    );
}
