import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'
export default function Footer() {
  return (
    <div className='footer-section section-padding'>
      <div className='footer-heading'>
        <p className='footer-heading-gradient-text gradient-text'>Do you want to step in to the future before others</p>
        <button className='footer-heading-button'>Request Early Access</button>
      </div>

      <div className='footer-about'>
        <div className='footer-logo'><img src={logo} alt="img"/><p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p></div>

        <div className='footer-links'>
          <ul>
            <h4>Links</h4>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='footer-links'>
          <ul>
            <h4>Company</h4>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='footer-links'>
          <ul>
            <h4>Get in touch</h4>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>

      <div className='footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
      
    </div>
  )
}
