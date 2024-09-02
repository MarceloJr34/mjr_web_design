import React, { useEffect, useState } from 'react';
import './Header.css';
import logoOnly from '../../Images/logoOnly.jpg';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false); 
  }, []);

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleRedirect = () => {
    const phoneNumber = '841479420';
    const WhatsappLink = `https://wa.me/${phoneNumber}`;
    window.location.href = WhatsappLink;
  };

  return (
    <header className='header'>
      <div className={`logo headerTransition ${isLoaded ? 'visible' : ''}`}>
        <img className='logoImage' src={logoOnly} alt="Logo" />
        <div className={`logoName ${isLoaded ? 'visible' : ''}`}>
          MJr_Web_Design
        </div>
      </div>

      <div className={`menu-icon ${isLoaded ? 'visible' : ''}`} onClick={handleMenuToggle}>
        <BiMenuAltRight size={30} />
      </div>

      <div className={`menu ${menuOpened ? 'opened' : 'closed'} headerTransition ${isLoaded ? 'visible' : ''}`}>
        <Link to="/"> Início </Link>
        <Link to="/SobreNos"> Sobre_Nós</Link>
        <Link to="/porqueNos"> Porquê_Nós?</Link>
        <button className="button" onClick={handleRedirect}>
            Contactar 
        </button>
      </div>

    </header>
  );
}

export default Header;