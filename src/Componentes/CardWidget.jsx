import React from 'react';
import { NavLink } from 'react-router-dom';

const CardWidget = () => {
    const imagenUrl = 'https://tse2.mm.bing.net/th?id=OIP.cdpiGrAXhG4WpawmvpcnbgHaHa&pid=Api&P=0&h=180';

    const imagenStyle = {
        width: '50px',
        height: 'auto',
    };

    const containerStyle = {
        position: 'absolute',
        top: '13%',
        right: '100px',
        width: 'auto',
        
    };

    const buttonContainerStyle = {
        marginLeft: '10px',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row ms-2">
            
                <div className="col d-flex justify-content-end align-items-center">
                    <div className="dropdown mt-1" style={buttonContainerStyle}>
                         
                     
                        <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Lista de Productos
                        </button>
                        <NavLink to="/" className="btn btn-secondary " style={buttonContainerStyle}>Home</NavLink>  
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/category/remeras hombres" className="dropdown-item">Remeras</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/pantalones femeninos" className="dropdown-item">Pantalones</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/gorras" className="dropdown-item">Gorras</NavLink>
                            </li>
                        </ul>
                    </div>
                    <pre>          </pre>
                    <img src={imagenUrl} alt="carro" style={imagenStyle} />
                </div>
               
            </div>
        </div>
   
    );
}

export default CardWidget;
