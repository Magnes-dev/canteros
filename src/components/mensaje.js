import React from 'react';
import styles from '../styles/mensaje.module.css';

function Mensaje() {
    return (
        <div className={styles.mensaje + " flex column"}>
            <p>De: <span>Nombre</span></p>
            <p>
                Lorem ipsum dolor sit amet accumsan ea exerci consectetuer duo invidunt facilisis. Amet ipsum diam dolor elit sed nonumy. Dolor eos nulla. In congue lorem elitr molestie erat at ad euismod elitr duo amet ut ut sit.
            </p>
        </div>
    )
}

export default Mensaje;