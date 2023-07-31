import { useState, useEffect } from 'react';
import Titulo from '../components/titulo';
import krusty from '../img/krusty.png';
import Evento from '../components/evento';
import Loader from '../components/loader';


function Eventos() {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const body = {
            collection: 'event',
            data: {}
        }

        const buscar = async () => {
            try {
                await fetch('http://localhost:3001/selectMulti', {
                    method: 'POST',
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

    return (
        <>
            <Titulo img={krusty} title='Lista de eventos' />

            {!load && <Loader />}

            {load && data.map((e) => {
                return <Evento data={e} key={e._id}/>
            })}

        </>

    )
}

export default Eventos;