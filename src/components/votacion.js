import { useState, useEffect } from 'react';
import barney from '../img/barney.webp'
import styles from '../styles/eventoFull.module.css';
import buttons from '../styles/buttons.module.css';
import jarra from '../img/jarra.png';
import Fetch from '../classes/fetch';
import Cookies from '../classes/cookies';
import Score from '../classes/score';

function Votacion(props) {
    const [voted, setVoted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [voterId, setVoterId] = useState(null);

    useEffect(() => {
        const cookies = new Cookies(document.cookie);
        const voter = cookies.data();

        setVoterId(voter.id);

    }, []);

    useEffect(() => {
        const body = {
            collection: 'user',
            data: { _id: props.userId }
        }

        const fetch = new Fetch('select', body);
        const response = fetch.run();

        response.then((data) => {
            setUser(data);
            setLoading(false);
        });

    }, []);

    useEffect(() => {
        if (voted) {
            const puntos = document.querySelector(`#ID${props.userId}`);

            const params = new URLSearchParams(window.location.search);
            const eventId = params.get('id');

            const body = {
                collection: 'score',
                data: new Score(user._id, eventId, voterId, puntos.value)
            }

            const fetch = new Fetch('insert', body);
            const response = fetch.run();

            response.then((data) => {
                console.log(data.msg);
            });
        }

    }, [voted]);

    const votar = (e) => {
        e.preventDefault();
        setVoted(true);
    }

    return (
        <form className={styles.votacion + ' flex'}>
            <img src={barney} alt='Avatar' id={styles.avatar} />
            <p>{!loading && user.name}</p>
            <div>
                <select name='puntos' id={`ID${props.userId}`}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <img src={jarra} alt='Jarra' id={styles.jarra} />
            <button type='submit' className={buttons.botonAzul} onClick={votar}>Votar</button>
        </form>
    )
}

export default Votacion;