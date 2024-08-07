import React from 'react';
import { Link } from 'react-router-dom';
import products from '../assets/json/productos.json'; 


const ProductList = () => {
  return (
    <div 
      className="container md-10"
      style={{ marginTop: '500px', marginLeft: '200px'  }} 
    >
      <div 
        className="row "
        style={{ 
          marginTop: '200px', 
          marginLeft: '200px' 
        }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="col-md-4 mb-4 md-10"
            style={{ 
           
              marginBottom: '30px', // Ajusta el margen inferior de cada columna
              display: 'flex',
              justifyContent: 'center' // Centra las tarjetas dentro de las columnas
              
            }}
          >
            <Link 
              to={`/item/${product.id}`} 
              style={{ textDecoration: 'none', color: 'inherit' }} // Elimina subrayado y mantiene color de texto
            >
              <div 
                className="card md-10"
                style={{ 
                  marginBottom: '20px',
                  textAlign: 'center' // Centra el texto dentro de la tarjeta
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="card-img-top img-fluid"
                  style={{ 
                    height: '300px', // Ajusta la altura fija de la imagen
                    objectFit: 'cover', // Asegura que la imagen se ajuste al contenedor sin distorsionarse
                    width: '100%', // Asegura que la imagen ocupe todo el ancho del contenedor
                    marginTop: '20px' // Ajusta el margen superior de la imagen
                  }} 
                />
                <div 
                  className="card-body"
                  style={{ marginTop: '20px' }} // Ajusta el margen superior del cuerpo de la tarjeta
                >
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
