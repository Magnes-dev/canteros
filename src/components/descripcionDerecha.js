import React from 'react';
import styles from '../styles/descripcion.module.css';

function DescripcionDerecha(props) {
    return (
        <div className={styles.descripcion + ' flex'}>
            <p>{props.desc}</p>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default DescripcionDerecha;