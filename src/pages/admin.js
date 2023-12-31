import React from 'react';
import Titulo from '../components/titulo';
import lider from '../img/lider.png';
import button from '../styles/buttons.module.css';
import form from '../styles/admin.module.css';


function Admin() {
    return (
        <>
            <Titulo title='Panel de administración' img={lider} />

            <form className={form.formAdmin + ' grid'}>
                <label htmlFor='agregar'>Agregar miembro</label>
                <div>
                    <input type='number' id='agregar' placeholder='Teléfono' name='telefono' />
                    <input type='text' placeholder='Nombre' name='nombre' />
                </div>
                <button type='submit' className={button.botonAzul}>Agregar</button>
            </form>
            <form className={form.formAdmin + ' grid'}>
                <label htmlFor="expulsar">Expulsar miembro</label>
                <select id="expulsar" defaultValue="0">
                    <option disabled value="0">Seleccionar miembro</option>
                </select>
                <button type="submit" className={button.botonAzul}>Expulsar</button>
            </form>
        </>
    )
}

export default Admin;