import { useEffect, useState} from 'react';
import styles from '../styles/evento.module.css';
import button from '../styles/buttons.module.css';

function Evento(props) {
    //No funciona
    const userId = document.cookie.id;
    const eventId = {_id: props.data._id};

    useEffect(() => {
        const run = async () => {
            const query = await fetch('http://localhost:3001/select', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: {}
            });
        }

    })

    const Apuntarme = () => {
        
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