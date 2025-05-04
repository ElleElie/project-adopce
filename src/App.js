import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout';

function App() {
  console.log("App rendering..."); // Debugging log

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zvirata" element={<AnimalList />} />
      <Route path="/kosik" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
