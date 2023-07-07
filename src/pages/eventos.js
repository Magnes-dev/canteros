import React from 'react';
import Titulo from '../components/titulo';
import krusty from '../img/krusty.png';
import Evento from '../components/evento';


function Eventos() {
    return (
        <>
            <Titulo img={krusty} title='Lista de eventos' />
            
            <Evento />

            <Evento />

        </>

    )
}

export default Eventos;