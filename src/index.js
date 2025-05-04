import React from 'react';
import ReactDOM from 'react-dom/client'; // Importuj `createRoot`
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext'; // Pokud používáš CartContext
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Vytvoření root elementu

root.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
);
