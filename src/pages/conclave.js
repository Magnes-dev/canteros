import React from 'react';
import Titulo from '../components/titulo';
import Mensaje from '../components/mensaje';
import image from '../img/homer.png';

function Conclave() {
    return (
        <>
            <Titulo img={image} title='Mensajes' />

            <Mensaje />

            <Mensaje />

            <Mensaje />
        </>
    )
}

export default Conclave;