import React, { useContext } from 'react';
import { CartContext } from './context/CartContext'; 
import { Link } from 'react-router-dom'; 

const Cart = () => {
    const { cart, removeItem, clear, summProducts } = useContext(CartContext);

    
    const isEmpty = cart.length === 0;

    return (
        <div 
            className="container" 
            style={{ 
                marginTop: '250px', 
                marginLeft: '500px', 
                marginRight: '100px' 
            }}
        >
            {isEmpty ? (
                <div 
                    className="row justify-content-center"
                    style={{ 
                        marginTop: '200px', 
                        textAlign: 'center' 
                    }}
                >
                    <div 
                        className="col-md-6"
                        style={{ 
                            textAlign: 'center', 
                            backgroundColor: '#f8f9fa', 
                            padding: '20px', 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                        }}
                    >
                        <h2 
                            style={{ 
                                fontSize: '24px', 
                                fontWeight: 'bold',
                                marginBottom: '10px' 
                            }}
                        >
                            Tu carrito está vacío
                        </h2>
                        <p 
                            style={{ 
                                fontSize: '18px', 
                                color: '#6c757d', 
                                marginBottom: '20px' 
                            }}
                        >
                            Te ayudamos a encontrar lo que buscas
                        </p>
                        <Link 
                            to="/" 
                            className="btn btn-primary" 
                            style={{ 
                                marginTop: '20px', 
                                padding: '10px 20px', 
                                fontSize: '16px', 
                                borderRadius: '5px' 
                            }}
                        >
                            Volver a Home
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col">
                        <table 
                            className="table" 
                            style={{ 
                                marginTop: '50px', 
                                marginLeft: 'auto', 
                                marginRight: 'auto', 
                                fontSize: '16px', 
                                fontFamily: 'Arial, sans-serif' 
                            }}
                        >
                            <thead>
                                <tr style={{ fontSize: '18px', fontWeight: 'bold' }}> {/* Tamaño y estilo de fuente para el encabezado */}
                                    <th>Imagen</th>
                                    <th>Precio</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id} style={{ fontSize: '16px' }}> {/* Tamaño de fuente para las filas */}
                                        <td><img src={item.image} alt={item.title} width={80} /></td>
                                        <td>${item.price}</td>
                                        <td>
                                            <img 
                                                src="/images/trash.svg" 
                                                alt="Eliminar Producto" 
                                                width={35} 
                                                style={{ cursor: 'pointer' }} 
                                                onClick={() => removeItem(item.id)} 
                                            />
                                        </td>
                                    </tr>
                                ))}
                                <tr style={{ fontSize: '16px', fontWeight: 'bold' }}> {/* Tamaño y estilo de fuente para el total */}
                                    <td>Total a Pagar</td>
                                    <td>${summProducts()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button 
                            onClick={clear} 
                            className="btn btn-danger" 
                            style={{ 
                                marginTop: '20px', // Ajusta el margen superior del botón
                                padding: '10px 20px', // Ajusta el espaciado interno del botón
                                fontSize: '16px', // Tamaño de la fuente del botón
                                borderRadius: '5px' // Bordes redondeados del botón
                            }}
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
