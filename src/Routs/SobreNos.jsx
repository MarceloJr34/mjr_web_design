import React from 'react'
import './Styles/SobreNos.css';
import desenvolvimentoImage from '../Images/crescimento.jpg';
import { useTypewriter } from 'react-simple-typewriter';

function SobreNos() {
  const [typeEffect] = useTypewriter({
    words: [' é uma necessidade para a sobrevivência das empresas."'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 35
  });

  const [typeEffect2] = useTypewriter({
    words: [' e o sucesso global."'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 35
  });

  return (
    <div> 
      <div className='spacing'>

      </div>
     
      <div className='corpoSobre'>      
        <div className='sobre'>
          <h2 className='tituloSobre'>Bem-vindo a Mjr_Web_Design</h2>
        </div>

        <div className='textoSobreNos'>
          <span className='linha'>
            A MJr_Web_Design é uma empresa de desenvolvimento que atua na área de programação, 
            especificamente na área de desenvolvimento Web. Oferecemos soluções modernas e inovadoras
            com o objectivo de manter os nossos Clientes dentro da concorrência do mercado.
          </span>
        </div>

        <div className='desenvolvimento'>
          <div className='desenvolvimentoTexto'>
            O nosso Objectivo é promover o seu trabalho e digitalizar o seu negócio. <br/>
            Fazer com que o seu negócio cresca e se torne conhecido globalmente. 
            Seja mais profissional conosco, crie o seu email empresarial personalizado e aumente a segurança dos seus clientes.<br/>
            O nosso é: dev@mjrwebdesign.net, venha criar o seu e tenha a sua empresa registrada para o Mundo.
          </div>

          <div className='des'> 
            <img className='imageBody' src={desenvolvimentoImage} alt=''/>
          </div>
        </div>

        <div className='lema top'>
           <span>"A transformação digital não é uma tendência passageira, {typeEffect}</span>     
        </div>

        </div>
        
        <div className='corpoSob'>
          <span className='tituloSob'>Como Podemos Ajudar </span> < br/>
          <div className='sob'>
            Queremos que você se sinta confiante no mundo digital. Por isso, oferecemos mais do que apenas desenvolvimento de sites.<br/>
            Nossa missão é ajudar a construir uma presença online sólida e profissional para sua empresa. < br />
            E para completar essa transformação, ajudamos a criar emails empresariais personalizados que fortalecem a confiança e segurança dos seus clientes.
          </div>
      </div>  
      
    <div className='corpoSob'>
      <span className='tituloSob'>Nossa Filosofia</span> < br/>
      <span className='sob'> "A digitalização é a ponte entre o seu negócio, {typeEffect2}"<br/></span>
      <div  className='sob'>
        Com a MJr_Web_Design, você está escolhendo mais do que um serviço – está escolhendo um parceiro comprometido com o sucesso a longo prazo do seu negócio. <br />
        Junte-se a nós e descubra como podemos transformar a sua visão em realidade.
      </div>
    </div>
      

    </div>
  )
}

export default SobreNos;
