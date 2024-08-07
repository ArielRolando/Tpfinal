import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div className="container mt-1">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {items.map(item => (
                    <div className="col" key={item.id}>
                        <Item item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;
