import { useState, useEffect } from 'react';
import Titulo from '../components/titulo';
import Fetch from '../classes/fetch';
import Loader from '../components/loader';
import Evento from '../components/evento';
import moe from '../img/moe.png';
import Votacion from '../components/votacion';


function EventoFull() {
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState(null);

    const params = new URLSearchParams(window.location.search);
    const eventId = params.get('id');

    useEffect(() => {
        const body = {
            collection: 'event',
            data: { _id: eventId }
        }

        const fetch = new Fetch('select', body);
        const response = fetch.run();

        response.then((data) => {
            setEvent(data);
            setLoading(false);
        });

    }, [loading]);

    return (
        <>
            <Titulo img={moe} title='Evento' />

            {loading && <Loader />}

            {!loading && <Evento data={event} />}

            {!loading && event.members.map((e) => {
                return <Votacion userId={e} key={e} />
            })}          
        </>
    )
}

export default EventoFull;