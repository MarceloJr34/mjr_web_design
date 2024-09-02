import React from 'react';
import Body from "../Components/Body/Body";
import Contacto from "../Components/Contactos/Contacto";
import Especializado from "../Components/Especializados/Especializado";
import GetStarted from "../Components/GetStarted/GetStarted";
import Header from "../Components/Header/Header";
import Language from "../Components/Languages/Language";
import Rodape from "../Components/Rodape/Rodape";

function Inicio() {
  return (
    <div className=''>
      <Header />
      <Body />
      <Language />
      <GetStarted />
      <Especializado />
      <Contacto />
      <Rodape />   
    </div>  
  )
}

export default Inicio;
