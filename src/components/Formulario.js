import React, { useState } from 'react';
//Generador de id
import uuid from 'uuid/dist/v4';

export const Formulario = ({ crearCita }) => {

    //Crear state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    //Funcion que se ejecuta cada vez que el usuario escribe un input
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona enviar cita
    const submitCita = e => {
        e.preventDefault();

        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        //Eliminar error previo
        setError(false);

        //Asignar un id
        cita.id = uuid();
        console.log(cita);

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <h2>Crear Cita</h2>
            <form
                onSubmit={submitCita}
            >

                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita
                </button>
            </form>

        </>
    )
}
