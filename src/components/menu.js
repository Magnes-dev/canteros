import React from 'react';
import styles from '../styles/menu.module.css';

function Menu() {
    return (
        <div className={styles.menu + ' flex'}>        
            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/eventos'>Eventos</a></li>
                <li><a href='/base'>Base</a></li>
                <li><a href='/'>Cónclave</a></li>
                <li><a href='/admin'>Administración</a></li>
            </ul>
        </div>
    )
}

export default Menu;