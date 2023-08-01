import { useEffect, useState} from 'react';
import styles from '../styles/evento.module.css';
import Cookies from '../classes/cookies';
import BotonApuntarme from '../components/botonApuntarme';

function Evento(props) {
    const cookies = new Cookies(document.cookie);
    const cookieValues = cookies.data();

    const userId = cookieValues.id;
    const eventId = props.data._id;

    return (
        <div className={styles.evento + " flex column"}>
            <p>El <span id='date'>{props.data.date}</span> a las <span id='time'>{props.data.time}</span></p>
            <p>{props.data.message}</p>
            <p><span>{props.data.members.length}</span> miembros asisten</p>

            <BotonApuntarme userId={userId} eventId={eventId} />
        </div>
    )
}

export default Evento;