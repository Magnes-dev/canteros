import React from 'react';
import styles from '../styles/home.module.css';
import lider from '../img/lider.png';

function Home() {
    return (
        <>
            <div className="flex">
                <img src={lider} alt="Imagen del lider" id={styles.lider} />
                <h2 id={styles.bienvenida}>Bienvenido a la casa de los canteros</h2>
            </div>
            <h2>Próximo evento:</h2>
            <div class="flex column">
                <table className={styles.evento}>
                    <tr>
                        <td>El <span id='fecha'>10/10/2025</span> a las <span id='hora'>19:00</span></td>
                    </tr>
                    <tr>
                        <td>
                            Lorem ipsum dolor sit amet dolor sit velit elitr sed diam consequat dolore duis stet invidunt ut.
                            Et eu labore invidunt erat labore stet sed ipsum duo accumsan lorem et consequat lorem iriure eros hendrerit.
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span> miembros asisten</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Home;