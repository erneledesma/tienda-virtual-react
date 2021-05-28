import React from 'react';

// Function Component - Function expression
const Footer = ({ fecha }) => {

    

    return ( 
        <footer>
            <p>
                Todos los derechos reservados ® {fecha}
            </p>
        </footer>
     );
}
 
export default Footer;