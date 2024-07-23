import React from 'react'
import "./Breadcrumb.css"
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} = props;
    console.log("Breadcrumb product:", product);
  return (
    <div className='breadcrumb'>
      HOME <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrumb
