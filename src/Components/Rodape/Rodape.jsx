import React from 'react'
import './Rodape.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Rodape() {
  return (
    <section className='rodape'>
      <div className='nameRodape'>
        {"< "}MJr_Web_Design {" />"}
      </div>
 
      <div className='redesSociais'>
        <div className='iconesRedesSociais'>
          <FaWhatsapp />
        </div>
        <div className='iconesRedesSociais'>
          <FaFacebook />
        </div>
        <div className='iconesRedesSociais'>
          <FaInstagram />
        </div>
        <div className='text'> 
          mjr_web_design 
        </div> 
      </div> 

      <div className='redesSociais iconEmail'>
        <div className='iconesRedesSociais'>
          <BiLogoGmail />
        </div>
        <div className='text email'> 
          mjrwebdesign258@gmail.com
        </div> 
      </div>

      <div className='motivation'>
        <h2 className='fraseMotivacional'>One step at a time, one page at a time.</h2>
      </div>

      <div className='motivation'>
        <h3 className='fraseMotivacional'>A small decision will make you take a big step.</h3>
      </div>

      <div className='mjr'>
        DESIGN BY {"@"}MJr34
      </div>

      <div className='mjr'> 
        @Todos os direitos Reservados
      </div>  
    </section>
  )
}

export default Rodape;
