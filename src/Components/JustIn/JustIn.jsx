import React from 'react'
import './JustIn.css'
import new_collections from '../Assets/new_collections'
import Item from '../Items/Items'

const JustIn = () => {
  return (
    <div className='new'>
      <h1>New Collections</h1>
      <hr />
      <div className='new-container'>
        {new_collections.map((item, i) => {
          return <div className={`grid-item ${item.large ? 'large' : ''}`} key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          </div>
        })}
      </div>
    </div>
  )
}

export default JustIn
