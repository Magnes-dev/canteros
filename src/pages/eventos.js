import { useState, useEffect } from 'react';
import Titulo from '../components/titulo';
import krusty from '../img/krusty.png';
import Evento from '../components/evento';
import Loader from '../components/loader';
import Fetch from '../classes/fetch';


function Eventos() {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const body = {
            collection: 'event',
            data: {}
        }

        const fetch = new Fetch('selectMulti', body);
        const response = fetch.run();

        response.then((data) => {
            setData(data);
            setLoad(true);
        }
        );

    }, []);

    return (
        <>
            <Titulo img={krusty} title='Lista de eventos' />

            {!load && <Loader />}

            {load && data.map((e) => {
                return <Evento data={e} key={e._id} />
            })}

        </>

    )
}

export default Eventos;