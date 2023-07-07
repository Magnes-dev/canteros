import React from 'react';
import Titulo from '../components/titulo';
import lider from '../img/lider.png';
import button from '../styles/buttons.module.css';
import form from '../styles/admin.module.css';


function Admin() {
    return (
        <>
            <Titulo title='Panel de administración' img={lider} />

            <form className={form.formAgregar + ' flex'}>
                <label for='agregarUsuario'>Agregar usuario:</label>
                <input type='text' id='agregarUsuario' placeholder='Teléfono'/>
                <button type='submit' className={button.botonAzul}>Agregar</button>
            </form>
        </>
    )
}

export default Admin;