import React from 'react';
import Body from "../Components/Body/Body";
import Contacto from "../Components/Contactos/Contacto";
import Especializado from "../Components/Especializados/Especializado";
import GetStarted from "../Components/GetStarted/GetStarted";
import Language from "../Components/Languages/Language";

function Inicio() {
  return (
    <div>
      <Body />
      <Language />
      <GetStarted />
      <Especializado />
      <Contacto />
    </div>  
  );
}

export default Inicio;
