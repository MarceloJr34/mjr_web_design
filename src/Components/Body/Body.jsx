import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import './Body.css';
import bodyImage from '../../Images/LogoBody(2).jpg';

function Body() {
  const [typeEffect] = useTypewriter({
    words: ['O Seu Negócio Ficará Sem Negócio" - Bill Gates.'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 35
  });

  return (
    <div className='body'>
      <div className='corpo'>
        <div className="bodyText">
          Dê Visibilidade ao Seu Negócio. <br />
          Divulgue os seus Produtos.<br />
          Mostre o Seu Trabalho para o Mundo.<br />
          Crie já o seu WebSite Profissional.<br />
          Clique Acima para Contactar.<br />
        </div>
       
        <div className='bodyImage'>
          <img className='imageBody' src={bodyImage} alt=''/>
        </div>
      </div>

      <div className='lema'>
        <span>"Se o Seu Negócio Não Está Na Internet, {typeEffect}</span>     
      </div>
    </div>
  );
}

export default Body;
