import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import  React,{ Fragment, useState } from 'react';
import Carrito from './components/Carrito';

function App() {

  const [productos, guardarProductos] = useState([
    { id:1, nombre: 'Remera de ReactJS', precio: 300},
    { id:2, nombre: 'Remera de VueJS', precio: 200},
    { id:3, nombre: 'Remera de NodeJS', precio: 100},
    { id:4, nombre: 'Remera de Angular', precio: 50}
  ])

  // State para un carrito de compra
  const [carrito, agregarProducto] = useState([])

  const fecha = new Date().getFullYear();

  return (

      <Fragment>

          <Header
            titulo='Tienda Virtual'
            numero = '20'
            facha = {fecha}
           />
   
          <h1>Lista de Porductos</h1>
          { productos.map( producto => (
              <Producto
              key={producto.id}
              producto={producto}
              productos = {productos}
              carrito={carrito}
              agregarProductos={agregarProducto}

            
               />
          ))}

          <Carrito
          carrito={carrito}
           />


          <Footer 
            fecha={fecha}
          />
    
     </Fragment>
  );
}

export default App;
