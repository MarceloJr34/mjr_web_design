import React from 'react'
import './GetStarted.css'
import {useTypewriter} from 'react-simple-typewriter';
function GetStarted () {
  const [typeEffect] = useTypewriter({
    words: ['841479420.'],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 50
  
  });

  return (
    <div className='iniciar'> 
      <section className="g-wrapper">
        <div className="innerWidth">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Inicie Conosco< br /></span>
                <span className="text">
                    WebSites Actualizados Para o Mercado. <br />
                    Responsivos para Todo Tipo de Dispositivo.< br/>
                </span>
               <span className='primaryText '>Contacte-nos: <span>{typeEffect}</span> </span> 

            </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted;
