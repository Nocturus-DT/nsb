import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';        // seus CSS globais
import './styles/components.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/cart.css';
import './styles/dashboard.css';
import './styles/tutorial.css';
// import './styles/login.css';      // se quiser usar a página animada antiga

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);