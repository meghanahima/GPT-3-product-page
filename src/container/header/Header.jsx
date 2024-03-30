import React from 'react'
import '../../App.css'
import './header.css'
import illu from '../../assets/images/Illustration.png'
import people from '../../assets/images/people.png'
import { Navbar } from '../../components'
export default function Header() {
  return (
    <>
    <div className='gradient-bg'>
      <Navbar/>
      <div className='header-section section-padding padding'>
        <div className='header-content'>

          <div className='gradient-text header-gradient-text'>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </div>

          <p className='header-content-para'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          
          <div className='header-content-input'>
            <input type="email" placeholder='Your email address here'/>
            <button type="button">Get Started</button>
          </div>

          <div className='header-content-peep'>
            <img src={people}/>
            <p className='header-content-peep-para'>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='header-content-image'>
          <img src={illu}/>
        </div>
      </div>
    </div>
    </>
  )
}
