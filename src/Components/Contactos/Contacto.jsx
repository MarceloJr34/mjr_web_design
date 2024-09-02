import React from 'react'
import './Contacto.css';
// import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
// import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

export default function Contacto() {
  return (
    <div className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'> 
        <div className='flexColStart c-left'>
         <div className='flexColS contactModes'> 

          <div className='flexColCenter row'> 
            <div className='flexColCenter mode'>
              <div className='flexStart'>
                <div className='flexCenter icon'>
                 <BsFillChatDotsFill size={25}/>
                </div> 
                <div className='flexColStart detail'>
                 <span className='primaryText'>Whatsapp</span>
                 <span className='secondaryText'>841479420</span>
                </div>
              </div>
              <a href="https://wa.me/841479420" target="_blank" rel="noopener noreferrer">
                <div className='flexCenter button'>
                 Whatsapp
                </div>
              </a>
            </div>           
          </div>

          <div className='flexColCenter row'> 
            <div className='flexColCenter mode'>
              <div className='flexStart'>
                <div className='flexCenter icon'>
                 <BsFillChatDotsFill size={25}/>
                </div> 
                <div className='flexColStart detail'>
                 <span className='primaryText'>Instagram</span>
                 <span className='secondaryText'>mjr_web_design</span>
                </div>
              </div>
              <a href="https://instagram.com/mjr_web_design" target="_blank" rel="noopener noreferrer">
                <div className='flexCenter button'>
                 Instagram
                </div>
              </a>
            </div>           
          </div>

        </div>    
      </div>
    </div>
  </div>
  )
}