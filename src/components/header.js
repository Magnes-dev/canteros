import React from 'react';
import { useState } from 'react';
import Menu from '../components/menu';
import logo from '../img/canteros-logo.png';
import '../styles/header.module.css';


function Header() {
    const [menu, setMenu] = useState(false);

    const cargaMenu = (e) => {
        e.preventDefault()
        setMenu((prev) => !prev);
    }

    return (
        <>
            <header className="footer-header">
                <a src={logo} alt="Logo de los canteros" href='/' onClick={cargaMenu}>
                    <img src={logo} alt='Logo de los canteros' />
                </a>
                <h1>Canteros</h1>
            </header>
            {menu && (<Menu />)}            
        </>
    );
}

export default Header;