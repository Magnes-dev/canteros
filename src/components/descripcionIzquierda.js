import React from 'react';
import styles from '../styles/descripcion.module.css';

function DescripcionIzquierda(props) {
    return (
        <div className={styles.descripcion + ' flex'}>
            <img src={props.img} alt={props.alt} />
            <p>{props.desc}</p>
        </div>
    )
}

export default DescripcionIzquierda;