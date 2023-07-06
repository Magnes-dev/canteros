import React from 'react';
import styles from '../styles/home.module.css';
import lider from '../img/lider.png';
import ProximoEvento from '../components/proximo-evento';
import BotoneraHome from '../components/botonera-home';

function Home() {
    return (
        <>
            <div className="flex">
                <img src={lider} alt="Imagen del lider" id={styles.lider} />
                <h2 id={styles.bienvenida}>Bienvenido a la casa de los canteros</h2>
            </div>
            <h2>Próximo evento:</h2>

            <ProximoEvento />

            <BotoneraHome />
        </>
    )
}

export default Home;