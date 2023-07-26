import { React, useEffect, useState } from 'react';
import eye from '../img/eye.png';
import Loader from '../components/loader';
import Evento from '../components/evento';
import Titulo from '../components/titulo';
import button from '../styles/buttons.module.css';

function Home() {
    const [data, setData] = useState();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const body = {
            collection: 'event',
            data: {}
        }

        const buscar = async () => {
            try {
                await fetch('http://localhost:3001/select', {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setData(data);
                        setLoad(true);
                    })

            } catch (e) {
                console.log(e);
            }
        }

        buscar();
    }, []);

    console.log(data);

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