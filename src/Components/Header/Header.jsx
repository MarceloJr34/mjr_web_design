import React, { useState } from 'react';
import './Header.css';
import logoOnly from '../../Images/logoOnly.jpg';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpened(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpened(false); // Fecha o menu ao clicar em um link
  };

  const handleRedirect = () => {
    const phoneNumber = '841479420';
    const WhatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(WhatsappLink, '_blank'); // Abre em uma nova aba
    setMenuOpened(false); // Fecha o menu após o clique no botão
  };

  return (
    <header className='header'>
      <div className='logo'>
        <img className='logoImage' src={logoOnly} alt="Logo" />
        <div className='logoName'>
          MJr_Web_Design
        </div>
      </div>

      <div className='menu-icon' onClick={handleMenuToggle}>
        <BiMenuAltRight size={30} />
      </div>

      <div className={`menu ${menuOpened ? 'opened' : 'closed'}`}>
        <Link to="/" onClick={handleLinkClick}>Início</Link>
        <Link to="/SobreNos" onClick={handleLinkClick}>Sobre Nós</Link>
        <Link to="/PorqueNos" onClick={handleLinkClick}>Porquê Nós?</Link>
        <button className="button" onClick={handleRedirect}>
            Contactar 
        </button>
      </div>
    </header>
  );
}

export default Header;
