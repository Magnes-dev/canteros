import React from 'react';
import logo from '../img/canteros-logo.png';
import '../styles/header.module.css';

function Header() {
    return (
        <header className="footer-header">
            <a src={logo} alt="Logo de los canteros" href='/'>
                <img src={logo} alt='Logo de los canteros' />
            </a>
            <h1>Canteros</h1>
        </header>
    );
}

export default Header;