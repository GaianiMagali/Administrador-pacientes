import React, { useState } from 'react';
import { Formulario } from './components/Formulario';


function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agregue las nuevas

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>

          <div className="one-half column">

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
