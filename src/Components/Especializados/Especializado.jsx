import React from 'react'
import './Especializado.css'
import lojaVirtual from'../../Images/lojasVirtuais.avif';
import noticiaImage from '../../Images/noticias.avif';
import webPortfolio from '../../Images/WebPortfolio.jpg';
import companyImage from '../../Images/company.avif';


function Especializado() {
  return (
    <div className='especializado'>
       <div className='especializadoText'>
            <div className='primaryText '>
                Especializados Em WebSites:
            </div>
       </div>
     
      <div className='projecto'>
        <div className='sites loja'>
            <img className='imageLanguage react' src={lojaVirtual} alt='' />     
            <p>Lojas Virtuais</p>
        </div>

        <div className='sites notice'>
            <img className='imageLanguage' src={noticiaImage} alt='' />
            <p>Sites de Notícias</p> 
        </div> 
        
        <div className='sites portfolio'>
            <img className='imageLanguage css ' src={webPortfolio} alt='' />
            <p>Portfólios</p>
        </div>

        <div className='sites coorporativos'>
            <img className='imageLanguage js' src={companyImage} alt='' />
            <p>Coorporativos</p>
        </div>
        
      </div>
        
    
    </div>
)
}

export default Especializado;
