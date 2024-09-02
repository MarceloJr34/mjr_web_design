import React from 'react'
import Header from "../Components/Header/Header";
import Rodape from '../Components/Rodape/Rodape';
import imageImpulsione from '../Images/wideWeb.png';
import imagemEmail from '../Images/email.webp';
import './Styles/PorqueNos.css';
import { useTypewriter } from 'react-simple-typewriter';
import logoJPG from '../Images/logoOnly.jpg';
import webPort from '../Images/webPort.webp';

function PorqueNos() {
  const [typeEffect] = useTypewriter({
    words: [' ter um negócio offline é como ser invisível."'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 35
  });

  
  const handleRedirect = () => {
    const phoneNumber = '841479420'; // Substitua pelo seu número de telefone
    const message = 'Estou interessado nos seus serviços'; // Mensagem que você quer enviar
    const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para a URL
    const WhatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.location.href = WhatsappLink;
  };

  return (
    <div>
      <Header />
      <div className='impulsione'>
      <div className='corpo'>
        <div className="textoCorpo">
          Dê Visibilidade ao Seu Negócio. <br />
          Divulgue os seus Produtos.<br />
          Mostre o Seu Trabalho para o Mundo.<br />
          Crie já o seu WebSite Profissional.<br />
          Clique Acima para Contactar.<br />
        </div>
       
        <div className='bodyImage'>
          <img className='imageBody img' src={imageImpulsione} alt=''/>
        </div>
      </div>

      <div className='lema'>
        <span>"No mundo digital de hoje,{typeEffect}</span>     
      </div>
    </div>
    <div >
  </div>

  <div className='porque'>
      
    <div className='porqueInfo'>
      <div className='tituloSob ma'> Email Profissional</div>
        Você deseja ter confiança dos teus clientes e/ou parceiros e estabelecer mais confiança na comunicação com eles?<br/>
        Temos a opção de email personalizado para si que aumenta a credibilidade da sua empresa.<br/>
        Mas porquê? Porque tudo que é legítimo possui uma identidade e é isso que nós criamos: Identidade para sua empresa.
      </div>
    <div className='porqueImg'>
    <img src={imagemEmail} alt=''/>
    <button className='queroJaBtn' onClick={handleRedirect}>Quero Já</button>
    </div> 
  </div>

  
  <div className='porque'>
      
      <div className='porqueInfo'>
      <div className='tituloSob ma'> WebSite Profissional</div>
        Deseja atrair mais clientes e consolidar sua marca no mercado? Um website profissional é o primeiro passo para o sucesso online.<br/>
        Oferecemos soluções personalizadas que não só aumentam a visibilidade da sua empresa, mas também refletem a sua identidade única.<br/>
        Por que escolher nossa empresa? Porque acreditamos que cada negócio merece uma presença digital que inspire confiança e credibilidade.<br/>
        Transformamos suas ideias em realidade, criando uma plataforma que destaca o valor da sua marca.
      </div>
    <div className='porqueImg'>
    <img className='lg' src={logoJPG} alt=''/>
    <button className='queroJaBtn' onClick={handleRedirect}>Quero Já</button>
  </div>
</div>


<div className='porque'>   
      <div className='porqueInfo'>
      <div className='tituloSob ma'> Web Portfolio</div>
        Você tem um talento incrível e projetos impressionantes, mas como fazer o mundo conhecê-los? Um portfólio online é a chave para mostrar o seu trabalho ao mundo.<br/>
        Oferecemos designs personalizados que destacam suas habilidades e conquistas, ajudando você a se conectar com clientes e oportunidades de maneira eficaz.<br/>
      </div>
    <div className='porqueImg'>
    <img src={webPort} alt=''/>
    <button className='queroJaBtn' onClick={handleRedirect}>Quero Já</button>
  </div> 
</div>



  <Rodape />
</div>
  )
}
export default PorqueNos;
