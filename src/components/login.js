import { React, useState, useEffect } from 'react';
import Cookie from 'universal-cookie';
import styles from '../styles/login.module.css';
import button from '../styles/buttons.module.css';

function Login() {
    const [telfCorrecto, setTelfCorrecto] = useState(false);
    const [telf, setTelf] = useState(0);

    useEffect(() => {
        if(telf) {
            const run = async () => {
                await fetch('http://localhost:3001/select', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        collection: 'user',
                        data: {telf: telf} })
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        if(data.hasOwnProperty('_id')) {
                            setTelfCorrecto(true);
                            const cookie = new Cookie();
                            cookie.set('name', data.name, {path: '/', maxAge: 365*24*60*60*60});
                            cookie.set('telf', data.telf, {path: '/', maxAge: 365*24*60*60*60});                       
                        }
                    });
            }
    
            run();
        }

    }, [telf]);


    const checkNum = (e) => {
        e.preventDefault();
        const telf = document.querySelector('#telf');
        setTelf(telf.value);
    }

    return (
        <div className={styles.login + ' flex'}>
            <form className={styles.loginForm + ' flex column'}>
                <label htmlFor='telf'>Introduce tu número de teléfono:</label>
                <input type='number' name='telf' id='telf' />
                <button type='submit' className={button.botonMorado} onClick={checkNum}>Entrar</button>
            </form>
        </div>
    )
}

export default Login;