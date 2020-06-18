import React from 'react';
import PropTypes from 'prop-types';


/* Dato... el #! es para desactivar el enlace, pero en Materialize es requerido pasarle el href */
const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a> 
            </div>
        </nav>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;