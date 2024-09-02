import React from 'react'
import './Language.css'
import javaImage from '../../Images/java.png'
import htmlImage from '../../Images/html.png'
import cssImage from '../../Images/css.jpg';
import javaScriptImage from '../../Images/javaScript.png'
import reactImage from '../../Images/react.png';
import sqlImage from '../../Images/sql.png';

function Language() {
  return (
    <div className='linguagem'>
      <div className='language'>
            <img className='imageLanguage' src={javaImage} alt='' />
      </div>

      <div className='language'>
            <img className='imageLanguage' src={htmlImage} alt='' />
      </div>

      <div className='language'>
            <img className='imageLanguage css' src={cssImage} alt='' />
      </div>

      <div className='language'>
            <img className='imageLanguage js' src={javaScriptImage} alt='' />
      </div>

      <div className='language'>
            <img className='imageLanguage react' src={reactImage} alt='' />
      </div>

      <div className='language'>
            <img className='imageLanguage sql' src={sqlImage} alt='' />
      </div>

    </div>
  )
}

export default Language;
