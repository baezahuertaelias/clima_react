import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  /* State que ira al form */
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const { ciudad, pais } = busqueda;

  /* Flag para no llamar la consulta innecesriamente */
  const [consultar, guardarConsultar] = useState(false);

  /* Guardar resultado de API de manera global */
  const [resultado, guardarResultado] = useState({});

  /* Flag manejo de errores (en caso que retorne 404 la api) */
  const [error, guardarError] = useState(false);


  /* Recordar que los campos que estan dentro del arreglo (o sea, ciudad y pais) se va a ejecutar lo que este dentro del useEffect */
  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appID = '-----';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        /* Manda el resultado al componente de clima */
        guardarResultado(resultado);

        /* Reset al flag para poder hacer otra consulta nuevamente */
        guardarConsultar(false);

        /* Manejo de error */
        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
    /* El eslint es para que no muestre error de dependencia */
    //eslint-disable-next-line
  }, [consultar])

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultado"/>
  } else{
    componente = <Clima resultado={resultado} />
  }


  return (
    <Fragment>
      <Header
        titulo="Clima app"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
