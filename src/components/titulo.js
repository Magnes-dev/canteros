import React from 'react';
import styles from '../styles/titulo.module.css';

function Titulo(props) {
    return (
        <div className="flex">
            <img src={props.img} id={styles.image} alt="Imagen de bienvenida"/>
            <h2 id={styles.bienvenida}>{props.title}</h2>
        </div>
    )
}

export default Titulo;