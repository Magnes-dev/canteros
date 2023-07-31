import { React, useState, useEffect } from 'react';
import Cookie from 'universal-cookie';
import styles from '../styles/login.module.css';
import button from '../styles/buttons.module.css';

function Login() {
    const [telf, setTelf] = useState(0);
    const login = document.querySelector('#login');
    const errorText = document.querySelector('.errorText');
    const errorDiv = document.querySelector('.errorDiv');

    useEffect(() => {
        if (telf) {
            const run = async () => {
                await fetch('http://localhost:3001/select', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        collection: 'user',
                        data: { telf: telf }
                    })
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        if (data.hasOwnProperty('name')) {
                            login.style.display = 'none';
                            const cookie = new Cookie();
                            cookie.set('name', data.name, { path: '/', maxAge: 365 * 24 * 60 * 60 * 60 });
                            cookie.set('id', data._id, { path: '/', maxAge: 365 * 24 * 60 * 60 * 60 });
                        } else {
                            errorText.textContent = data.msg;
                            errorDiv.classList.add('flex');
                        }
                    });
            }

            run();
        }

    }, [telf, login, errorDiv, errorText]);

    const checkNum = (e) => {
        e.preventDefault();
        const telf = document.querySelector('#telf');
        setTelf(telf.value);
    }

    return (
        <div className={styles.login + ' flex'} id='login'>
            <form className={styles.loginForm + ' flex column'}>
                <label htmlFor='telf'>Introduce tu número de teléfono:</label>
                <input type='number' name='telf' id='telf' />
                <button type='submit' className={button.botonMorado} onClick={checkNum}>Entrar</button>
                <div className={styles.errorDiv + ' errorDiv column'}>
                    <span className="material-symbols-outlined error">
                        error
                    </span>
                    <p className='errorText'></p>
                </div>
            </form>
        </div>
    )
}

export default Login;