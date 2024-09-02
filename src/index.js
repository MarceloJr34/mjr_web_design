import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Inicio from './Routs/Inicio.jsx';
import SobreNos from './Routs/SobreNos.jsx';
import PorqueNos from './Routs/PorqueNos.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App serve como layout
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/SobreNos",
        element: <SobreNos />
      },
      {
        path: "/PorqueNos",
        element: <PorqueNos />
      }
    ]
  }
], {
  basename: "/mjr_web_design" // Adiciona basename se estiver usando GitHub Pages
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
