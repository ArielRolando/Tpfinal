import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const cardStyle = {
        width: '18rem', 
        marginBottom: '-395px', 
    };

    const imageStyle = {
        maxWidth: '100%', 
        height: 'auto', 
       
    };

    return (
        <div className="col mb-4 ms-auto">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="card" style={cardStyle}>
                <Link to={"/item/" + item.id}>   
                    <img src={item.image} className="card-img-top border border-2" alt={item.title} style={imageStyle} />
                </Link>
                <div className="card-body border border-2">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;
