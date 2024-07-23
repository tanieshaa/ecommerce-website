import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrow.png'
import hero from '../Assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__left'>
           
            <div>
                <h2>Sophisticated Fashion,</h2>
                <h2>Just for You</h2>
            </div>
            <p> Our collection of elegant women's clothing is designed to celebrate the timeless beauty of femininity. Embrace the essence of grace with our curated selection of dresses, blouses, and accessories that exude confidence and charm.With a palette of rich, sophisticated colors and intricate embellishments, our collection is designed to make a statement.</p>
            <div className='hero-btn'>
               <div>Shop Now</div>
               <img src={arrow} alt=''/>
            </div>
        </div>
        <div className='hero__right'>
          <img src={hero} alt='' />
        </div>
      
    </div>
  )
}

export default Hero
