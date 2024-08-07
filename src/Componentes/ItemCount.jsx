import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from './context/CartContext';

const ItemCount = ({ stock, item }) => {
    const { addItem } = useCart();
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            addItem(item, contador);
            setItemStock(itemStock - contador);
            setContador(1);
            setVisible(false);
            console.log("Agregaste " + contador + " productos al carrito");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <>
            {visible ? 
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-dark rounded-3" onClick={decrementar}> - </button>
                                <button type="button" className="btn btn-dark rounded-3"> {contador} </button>
                                <button type="button" className="btn btn-dark rounded-3" onClick={incrementar}> + </button>
                            </div>
                        </div>
                    </div> 
                    <div className="row my-1">
                        <div className="col">
                            <button type="button" className="btn btn-dark rounded-3" onClick={addToCart}> Agregar al carrito </button>
                        </div>
                    </div>
                </div> 
                : 
                <Link to="/cart" className="btn btn-dark rounded-pill">Terminar mi compra</Link>
            }
        </>
    );
}

export default ItemCount;
