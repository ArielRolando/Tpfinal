import React, { useEffect, useState } from 'react';
import arrayProductos from "../assets/json/productos.json";
import Itemlist from './Itemlist';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000);
        });

        promesa.then(response => {
            setItems(response);
        });
    }, [id]);

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
                <Itemlist items={items} />
            </div>
        </div>
    );
}

export default ItemListContainer;
