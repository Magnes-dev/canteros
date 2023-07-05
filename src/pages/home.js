import React from 'react';
import styles from '../styles/home.module.css';
import lider from '../img/lider.png';

function Home() {
    return (
        <>
            <div className="flex">
                <img src={lider} alt="Imagen del lider" id={styles['lider']} />
                <h2>Bienvenido a la casa de los canteros</h2>
                
            </div>
        </>
    )
}

export default Home;