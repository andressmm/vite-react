// src/componentes/productos.jsx

import React from 'react';
import productos from '../datos/datos.js';
import './productos.css';

function ListaProductos() {
  return (
    <div>
      <h2>Lista de Productos para la venta</h2>
      <div className="lista-productos">
        {productos.map((product) => (
          <div key={product.id} className="producto-card">
            <img src={product.imagen} alt={product.nombre} className="producto-imagen" />
            <h3 className="producto-titulo">{product.nombre}</h3>
            <p className="producto-precio">Precio: ${product.precio}</p>
            <p className="producto-stock">Stock: {product.stock}</p>
            <p className="producto-codigo">Código: {product.codigo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProductos;
