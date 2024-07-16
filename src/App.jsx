import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Derechos from './Componentes/derechos';
import Banner from './Componentes/Banner';
import Publi from './Componentes/Publi';
import './App.css';
import './index.css';

import ItemCount from './Componentes/ItemCount';


const App = () => {
  return (
    <>
     
      <BrowserRouter>
        <NavBar />
        <ItemCount stock={14}/>
        <Publi />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Derechos />
        <Banner />
      </BrowserRouter>
   
    </>
  );
}

export default App;
