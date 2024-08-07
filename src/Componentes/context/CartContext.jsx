// src/Componentes/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(cartItem => cartItem.id !== itemId);
        setCart(updatedCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const summProducts = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getTotalQuantity, summProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

export default CartProvider;
