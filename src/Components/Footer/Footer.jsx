import React from 'react'
import './Footer.css'
import instagram_icon from'../Assets/instagram_icon.png'
import pinterest_icon from'../Assets/pinterest_icon.png'
import whatsapp_icon from'../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>Aura</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='social-icon'>
        
          <img src={instagram_icon} alt=''/>
        
          <img src={pinterest_icon} alt=''/>
       
          <img src={whatsapp_icon} alt=''/>
        
      </div>
      <div className="copyright">
        <hr/>
        <p>Copyright 2024 Aura. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
