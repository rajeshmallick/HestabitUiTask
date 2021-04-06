import React from 'react'
import mobile from '../img/Banner-ing.png';
function bestapp() {
    return (
        <div className='bestapp'>
        <div className='content'>
            <div className='left'>
        <div className='badge'>#1 Editors Choice App of 2020</div>
        <h1 className='text'>Best app for your modern lifestyle</h1>
        <div className='para'>Increase productivity with a simple to-do app. app for managing your personal budgets.</div>
        <div className='last_row'><button className='tryfree'>Try for free</button><a href='#'>Watch demo video</a></div>
        </div>
        <div className='right'><img src={mobile} alt='mobile'/></div>
        </div>
        </div>
    )
}

export default bestapp
