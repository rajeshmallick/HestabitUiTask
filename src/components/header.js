import React from 'react'
import headerlogo from '../img/header-logo.png';
function header() {
    return (
        <div className='header'>
        <div className='custompadding'>
        <img src={headerlogo} alt='header_logo'/>
        <div className='links'>
        <a href='#'>Home</a>
        <a href='#'>Key Features</a>
        <a href='#'>Pricing</a>
        <a href='#'>Testiminial</a>
        <a href='#'>FAQ</a>
        <button className='tryfree'>Try for free</button>
        </div>
        </div>
        </div>
    )
}

export default header
