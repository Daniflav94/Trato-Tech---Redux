import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PaginaPadrao from 'components/PaginaPadrao';
import Home from 'pages/Home';
import { Provider } from 'react-redux';
import Categoria from 'pages/Categorias';
import Carrinho from 'pages/Carrinho';
import store from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaPadrao />,
    children: [
     {
      path: '/',
      element: <Home />
     },
     {
      path: '/categoria/:nomeCategoria',
      element: <Categoria />
     },
     {
      path: '/carrinho',
      element: <Carrinho />
     }
    
    ]
  }
])


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
     
  </React.StrictMode>
);
