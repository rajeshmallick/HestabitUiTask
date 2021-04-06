import React from 'react'
import logo1 from '../img/logo-1.png';
import logo2 from '../img/logo-2.png';
import logo3 from '../img/logo-3.png';
import logo4 from '../img/logo-4.png';
import logo5 from '../img/logo-5.png';
import img2 from '../img/img-2.png';
import speed from '../img/speed.png';
import vector from '../img/vector.png';
import prototyping from '../img/prototyping.png';
import android from '../img/android.png';
import apple from '../img/apple.png';
import random from '../img/random.png';

function trustedcompany() {
    return (
        <div className='trust'>
           <div className='trust_text'>Trusted by companies like</div>
           <div className='img_store'>
               <img src={logo1} alt='logo1'/>
               <img src={logo2} alt='logo2'/>
               <img src={logo3} alt='logo3'/>
               <img src={logo4} alt='logo4'/>
               <img src={logo5} alt='logo5'/>
           </div>

           <div className='img_info'>
                <div className='left'>
                    <img src={img2} alt='img2'/>
                </div>
                <div className='right'>
                    <div className='box'>
                    <div className='info_head'>Awesome apps features</div>
                    <div className='feature-para'>Increse productivity with a simple to-do app.app for managing your personal budgets.</div>
                    </div>
                    
                    <div className='features fast'>
                        <div className='left_one'><img src={speed} alt='speed'/></div>
                        <div className='right_one'>
                        <div className='title'>Fast Performance</div>
                        <div className='para'>Get your blood test delivered at home collect a sample from the news your blood tests.</div>
                        </div>
                    </div>

                    <div className='features prototyping'>
                        <div className='left_one'><img src={prototyping} alt='prototyping'/></div>
                        <div className='right_one'>
                        <div className='title'>Prototyping</div>
                        <div className='para'>Get your blood test delivered at home collect a sample from the news your blood tests.</div>
                        </div>
                    </div>


                    <div className='features vector'>
                        <div className='left_one'><img src={vector} alt='vector'/></div>
                        <div className='right_one'>
                        <div className='title'>Vector Editing</div>
                        <div className='para'>Get your blood test delivered at home collect a sample from the news your blood tests.</div>
                        </div>
                    </div>

                </div>
           </div>

           <div className='downloadnow'>
               <div className='left_content'>
               <div className='text'>Download our App now !</div>
               <div className='para'>The rise of mobile devices transforms the way we consume information entirely
and the world's most elevant channels such as Facebook.</div>
<div className='options'>
    <img src={android} alt='android'/>
    <img src={apple} alt='apple'/>
</div>
           </div>
           <div className='right_content'><img src={random} alt='random'/></div>
           </div>
           
        </div>
    )
}

export default trustedcompany
