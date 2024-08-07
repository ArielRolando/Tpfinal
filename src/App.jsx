// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './Componentes/context/CartContext'; // Asegúrate de ajustar la ruta
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Derechos from './Componentes/derechos';
import Banner from './Componentes/Banner';
import Publi from './Componentes/Publi';
import ProductList from './Componentes/ProductList';
import Cart from './Componentes/Cart'; // Asegúrate de que esta ruta sea correcta

const AppContent = () => {
  const location = useLocation();
  const showBanner = !location.pathname.startsWith('/item/');

  return (
    <>
      <NavBar />
      {showBanner && <Banner />}
      <Publi />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Derechos />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
