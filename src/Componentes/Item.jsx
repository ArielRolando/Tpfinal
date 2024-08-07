import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ item }) => {
    const cardStyle = {
        width: '18rem',
        marginTop: '450px',
        marginBottom: '10rem',
        height: '100%',
        marginLeft: '600px',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        marginTop: '100px',
        
    };

    return (
        <div className="card border-0 img-fluid" style={cardStyle}>
            <Link to={`/item/${item.id}`}>
                <img src={item.image} className="card-img-top border-0 img-fluid mt-5" alt={item.title} style={imageStyle} />
            </Link>
            <div className="card-body border-0 img-fluid">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <p className="card-text">{item.description}</p>
                <ItemCount stock={item.stock} item={item} />
            </div>
        </div>
    );
}

export default Item;
