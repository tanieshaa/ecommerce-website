import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull from "../Assets/star_dull_icon.png"
import { HomeContext } from '../../Context/HomeContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext)
  return (
    <div className='productdisplay'>
      <div className="left">
        <div className="productimage">
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
        </div>
        <div className="displayImage">
            <img className='main-img' src={product.image} alt="product" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="stars">
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_dull} alt="star" />
            <p>(122)</p>
        </div>
        <div className="right-prices">
            <div className="old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit assumenda similique laudantium! Quo ipsa non iure adipisci dicta beatae id vero optio perspiciatis, inventore ipsam perferendis, dolorem iusto porro!
        </div>
        <div className="size">
          <h1>
            Select Size
          </h1>
          <div className="size-options">
           <button>One Size</button>
          </div>
        </div>
        <div className="right-btn">
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></div>
        <p className='right-category'><span>Category :</span>{' '}{product.category}, Top</p>
      </div>
    </div>
  )
}

export default ProductDisplay
