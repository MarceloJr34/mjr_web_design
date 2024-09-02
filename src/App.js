import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Rodape from './Components/Rodape/Rodape';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aqui serão renderizados os componentes das rotas */}
      </main>
      <Rodape />
    </>
  );
}

export default App;
