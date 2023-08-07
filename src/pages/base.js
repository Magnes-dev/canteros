import React from 'react';
import logia from '../img/logia.png';
import Titulo from '../components/titulo';
import DescripcionDerecha from '../components/descripcionDerecha';
import DescripcionIzquierda from '../components/descripcionIzquierda';
import brasas from '../img/chest2.png';
import pig from '../img/pig.webp';
import table from '../img/table.png';
import pool from '../img/money-pool.png';
import fish from '../img/fish.png';

function Base() {
    return (
        <>
            <Titulo img={logia} title='Nuestra base' />
            
            <DescripcionDerecha img={brasas} alt='Cofre con brasas' 
            desc='Nuestras instalaciones cuentan con una zona donde hacer
            nuestras mejores carnes a la brasa.' />

            <DescripcionIzquierda img={pig} alt='Imagen de un cerdo' 
            desc='Para algunos, esta es la peor parte de nuestra base.' />

            <DescripcionDerecha img={table} alt='Imagen de un banquete' 
            desc='Nuestros banquetes son abundantes y frecuentes, sobreo todo en época estival.' />

            <DescripcionIzquierda img={pool} alt='Piscina llena de dinero'
            desc='Contamos con una piscina en la que remojarnos mientras tomamos unas birras cuando hace calor.' />

            <DescripcionDerecha img={fish} alt='Pez de tres ojos' 
            desc='Aunque cuando está muy concurrida, el agua se pone turbia...' />
        </>
    )
}

export default Base;