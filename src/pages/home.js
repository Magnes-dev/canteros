import React from 'react';
import eye from '../img/eye.png';
import Evento from '../components/evento';
import Titulo from '../components/titulo';
import button from '../styles/buttons.module.css';

function Home() {
    return (
        <>
            <Titulo img={eye} title='Bienvenido a la APP de los canteros' />

            <h2>Próximo evento:</h2>

            <Evento />

            <div className='flex'>
                <a href="/eventos" id={button.botonEventos}
                    className={button.botonMorado}>Ver eventos</a>
            </div>
        </>
    )
}

export default Home;