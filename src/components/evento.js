import { useEffect, useState } from 'react';
import styles from '../styles/evento.module.css';
import Cookies from '../classes/cookies';
import BotonApuntarme from '../components/botonApuntarme';
import Loader from '../components/loader';
import Fetch from '../classes/fetch';

function Evento(props) {
    const cookies = new Cookies(document.cookie);
    const cookieValues = cookies.data();

    const userId = cookieValues.id;
    const eventId = props.data._id;

    const [apuntado, setApuntado] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const body = {
            collection: 'event',
            data: {
                members: userId
            }
        }

        const fetch = new Fetch('selectMulti', body);
        const response = fetch.run();

        response.then((data) => {
            data.forEach((e) => {
                if (e._id === eventId) {
                    setApuntado(true);
                }
            });

            setLoading(false);
        });
    });

    return (
        <div>
            <a className={styles.evento + " flex column"} href={`/eventoFull?id=${eventId}`}>
                <p>El <span id='date'>{props.data.date}</span> a las <span id='time'>{props.data.time}</span></p>
                <p>{props.data.message}</p>
                <p>El más borracho: {props.data.winner}</p>
                <p><span>{props.data.members.length}</span> miembros asisten</p>
            </a>

            {loading && <Loader />}

            {!loading && <BotonApuntarme userId={userId} eventId={eventId} apuntado={apuntado} />}

        </div>
    )
}

export default Evento;