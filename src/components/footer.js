import React from 'react'
import footerlogo from '../img/Footer-logo.png';
function footer() {
    return (
        <div className='footer'>
      <img src={footerlogo} alt='footerlogo'/>
      <div className='links'>
        <a href='#'>Home</a>
        <a href='#'>Key Features</a>
        <a href='#'>Pricing</a>
        <a href='#'>Testiminial</a>
        <a href='#'>FAQ</a>
        </div>
        <div className='copyright'>Copyright© Arifur Rahman Tushar 2019. All rights reserved</div>
        </div>
    )
}

export default footer
