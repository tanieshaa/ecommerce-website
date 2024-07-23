import React from 'react'
import './Offers.css'
import offer_img from '../Assets/offer_img.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
        <h1>Discover</h1>
        <h1>Our Summer Collection</h1>
        <p>Step into the season with our stunning summer collection, where elegance meets comfort. Explore a curated selection of flowy dresses, chic blouses, and versatile accessories that embody the spirit of summer.</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={offer_img} alt=''/>
      </div>
    </div>
  )
}

export default Offers
