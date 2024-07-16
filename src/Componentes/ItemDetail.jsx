import React from 'react';

const ItemDetail = ({ item }) => {
    const containerStyle = {
        marginTop: '400px', 
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: 'auto',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={item.image} alt={item.title} style={imageStyle} />
                </div>
                <div className="col-md-6">
                    <h1>{item.title}</h1>
                    <p className="lead">${item.price}</p>
                    <p>{item.description}</p>
                    <div className="alert alert-light" role="alert">
                        Hasta 12 cuotas sin interés con todos los bancos.
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
