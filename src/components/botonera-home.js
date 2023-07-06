import React from 'react';
import styles from '../styles/botonera-home.module.css';
import buttons from '../styles/buttons.module.css';

function BotoneraHome() {
    return (
        <div className={styles.botonera + ' ' + buttons.botonera + ' flex'}>
            <button type="button" id={buttons.botonApuntar} 
            className={buttons.botonAzul}>Apuntarme</button>

            <a href="/eventos" id={buttons.botonEventos} 
            className={buttons.botonMorado}>Ver eventos</a>
        </div>
    )
}

export default BotoneraHome;