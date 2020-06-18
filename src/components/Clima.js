import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {
    const { name, main } = resultado;

    /* Kelvin a celcius */
    const kelvin = 273.15;

    /* Al poner el main.temp React me lanza error pq la key de main no existe... Entocnes retorna null para que la app no se caiga */
    if(!name) return null;
    
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">{parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>

                <h2>Temperatura máxima: </h2>
                <p className="temperatura">{parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>
                
                <h2>Temperatura mínima: </h2>
                <p className="temperatura">{parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>

                <h2>Temperatura ambiente: </h2>
                <p className="temperatura">{parseFloat(main.feels_like - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;