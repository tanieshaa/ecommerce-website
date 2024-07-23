import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';

const Items = (props) => {

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link>
      <p>{props.name}</p>
      <div className='prices'>
        <div className='new-price'>
          ${props.new_price}
        </div>
        <div className='old-price'>
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Items;

