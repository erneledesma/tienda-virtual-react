import React from 'react';
import './Carrito.css'
import Producto from './Producto';

const Carrito = ({ carrito }) => {
    return ( 
        <div className="carrito">
            <h2>Tu carrito de Compras</h2>

            { carrito.map(producto => (

                <Producto
                producto = {producto}
                
                 />
            ))}

        </div>
     );
}
 
export default Carrito;