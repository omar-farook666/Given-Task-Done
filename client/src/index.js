import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-slideshow-image/dist/styles.css';
import App from './App';
import { CartProvider } from './context/cart_context';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    
  </React.StrictMode>
);

reportWebVitals();
