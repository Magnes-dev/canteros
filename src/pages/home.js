import { useEffect, useState } from 'react';
import eye from '../img/eye.png';
import Loader from '../components/loader';
import Evento from '../components/evento';
import Titulo from '../components/titulo';
import button from '../styles/buttons.module.css';
import Fetch from '../classes/fetch';

function Home() {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const body = {
            collection: 'event',
            data: {}
        }

        const fetch = new Fetch('select', body);
        const response = fetch.run();

        response.then((data) => {
            setData(data);
            setLoad(true);
        });

    }, []);

    return (
        <>
            <Titulo img={eye} title='Bienvenido a la APP de los canteros' />

            <h3>Próximo evento:</h3>

            {!load && <Loader />}
            {load && <Evento data={data}/>}
            

            <div className='flex'>
                <a href="/eventos" id={button.botonEventos}
                    className={button.botonMorado}>Ver eventos</a>
            </div>
        </>
    )
}

export default Home;