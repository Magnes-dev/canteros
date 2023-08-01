import { useState, useEffect } from 'react';
import button from '../styles/buttons.module.css';

function BotonApuntarme(props) {
    const [apuntado, setApuntado] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [body, setBody] = useState(null);

    useEffect(() => {
        if (trigger) {

            const run = async () => {
                await fetch('http://localhost:3001/updateArray', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
            }

            run();

            setTrigger(false);
        }

    }, [apuntado, trigger, body]);

    const apuntarme = () => {
        setBody({collection: 'event',
            id: props.eventId,
            data: props.userId,
            mode: 'add'});        

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