import React from 'react';


const Producto = ({ producto, agregarProductos, carrito, productos}) => {

    const {nombre, precio, id } = producto

    // Agrear producto al carrito
    const seleccionarProducto = id => {
    const producto = productos.filter( producto => producto.id === id)[0];
    agregarProductos([
        ...carrito,
        producto
    ])
    }


    return ( 
        <div>
            <h1>{nombre}</h1>
            <h2> ${precio}</h2>
            <button 
            type="button"
            onClick={ () => seleccionarProducto(id) }
            >
                Comprar
            </button>
        </div>
     );
}
 
export default Producto;