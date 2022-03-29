import React, { Component } from 'react';
import './style.css'

import Telainicial from './telas/Telainicial';
import Carrinho from './telas/Carrinho';
import { Routes, Route, Link } from "react-router-dom";
import { CartProvider } from './CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Telainicial />} />
          <Route path="Carrinho" element={<Carrinho />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
export default App;