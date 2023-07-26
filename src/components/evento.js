import {ReactComponentElement, useEffect, useState} from 'react';
import styles from '../styles/evento.module.css';
import button from '../styles/buttons.module.css';

function Evento(props) {

    const Apuntarme = () => {
        const eventId = {_id: props.data._id};
        //ID del usuario
        
        useEffect(() => {
            const run = async () => {
                const query = await fetch('http://localhost:3001', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: {}
                });
            }
    
        })
    }

    return (
        <div className={styles.evento + " flex column"}>
            <p>El <span id='date'>{props.data.date}</span> a las <span id='time'>{props.data.time}</span></p>
            <p>{props.data.message}</p>
            <p><span>{props.data.members.length}</span> miembros asisten</p>

            <button type="button" className={button.botonAzul} onClick={Apuntarme()}>Apuntarme</button>
        </div>
    )
}

export default Evento;