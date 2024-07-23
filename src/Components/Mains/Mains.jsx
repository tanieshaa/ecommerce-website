import React from 'react'
import './Mains.css'
import data_product from '../Assets/data'
import Item from '../Items/Items'

const Mains = () => {
  return (
    <div className='mains'>
      <h1>Trending Collections</h1>
      <hr />
      <div className='mains-container'>
        {data_product.map((item, i) => {
            return <Item
             key={i}
             id={item.id}
             name={item.name}
             image={item.image}
             new_price={item.new_price}
             old_price={item.old_price} />
            })}
      </div>
    </div>
  )
}

export default Mains
