// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
// import './index.css';

// const root = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   root
// );

import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client'
import Inicio from './Routs/Inicio.jsx';
import SobreNos from './Routs/SobreNos.jsx';
import PorqueNos from './Routs/PorqueNos.jsx';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// const root = document.getElementById('root');
const router = createBrowserRouter([
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
  // {
  //   path: "/",
  //   element: <App/>,
  //   children:
  //   [
  //     {
  //       path: "/",
  //       element: <Inicio />
  //     },
  //     {
  //       path: "/SobreNos",
  //       element: <SobreNos />
  //     },
  //     {
  //       path: "/Impulsione",
  //       element: <Impulsione />
  //     },
  //   ]
  // }
 
])

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>,
//   // root
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


