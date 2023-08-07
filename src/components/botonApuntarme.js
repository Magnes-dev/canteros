import { useState, useEffect } from 'react';
import button from '../styles/buttons.module.css';
import Fetch from '../classes/fetch';

function BotonApuntarme(props) {
    const [apuntado, setApuntado] = useState(props.apuntado);
    const [trigger, setTrigger] = useState(false);
    const [body, setBody] = useState(null);

    useEffect(() => {
        if (trigger) {
            const fetch = new Fetch('updateArray', body);
            const response = fetch.run();

            response.then((data) => {
                console.log(data);
            });

            setTrigger(false);
        }

    }, [apuntado, trigger, body]);

    const apuntarme = () => {
        setBody({
            collection: 'event',
            id: props.eventId,
            data: props.userId,
            mode: 'add'
        });

        setTrigger(true);
        setApuntado(true);

    }

    const desapuntarme = () => {
        setBody({
            collection: 'event',
            id: props.eventId,
            data: props.userId,
            mode: 'delete'
        });

        setTrigger(true);
        setApuntado(false);
    }


    return (
        <>
            {!apuntado && <button type="button" className={button.botonAzul} onClick={apuntarme}>Apuntarme</button>}

            {apuntado && <button type="button" className={button.botonMorado} onClick={desapuntarme}>Desapuntarme</button>}
        </>
    )

}

export default BotonApuntarme;