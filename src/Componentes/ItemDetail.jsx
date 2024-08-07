import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const containerStyle = {
        marginTop: '50px',
        marginLeft:'300px',
    };

    const imageStyle = {
        width: '70%',
        height: 'auto',
        objectFit: 'cover',
        display: 'block',
        margin: 'auto',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        style={imageStyle} 
                    />
                </div>
                <div className="col-md-6">
                    <h1>{item.title}</h1>
                    <p className="lead">${item.price}</p>
                    <p>{item.description}</p>
                    <div className="alert alert-light" role="alert">
                        Hasta 12 cuotas sin interés con todos los bancos.
                    </div>
                    <ItemCount stock={item.stock} item={item} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
