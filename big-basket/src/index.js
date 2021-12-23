import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from './navbar/Navbar';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>      
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
