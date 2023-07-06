import React from 'react';
import styles from '../styles/proximo-evento.module.css';

function ProximoEvento() {
    return (
        <div class="flex column">
            <table className={styles.evento}>
                <tr>
                    <td>El <span id='fecha'>10/10/2025</span> a las <span id='hora'>19:00</span></td>
                </tr>
                <tr>
                    <td>
                        Lorem ipsum dolor sit amet dolor sit velit elitr sed diam consequat dolore duis stet invidunt ut.
                        Et eu labore invidunt erat labore stet sed ipsum duo accumsan lorem et consequat lorem iriure eros hendrerit.
                        Lorem ipsum dolor sit amet tempor sed dolore consetetur stet sea ipsum voluptua lorem lorem lorem. No stet minim feugait kasd doming. Ut elitr vero justo lorem. Elitr et et et nam. Clita gubergren accumsan nonumy. Volutpat dolore in voluptua eos labore duo molestie. Elitr erat nonumy amet eirmod.
                    </td>
                </tr>
                <tr>
                    <td><span>1</span> miembros asisten</td>
                </tr>
            </table>
        </div>
    )
}

export default ProximoEvento;