import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const { getTotalAmt, all_product, CartItems, removeCart } = useContext(HomeContext);

  // Check if the cart is empty
  const isCartEmpty = Object.values(CartItems).every((item) => item === 0);

  return (
    <div className='cartItems'>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {isCartEmpty ? (
        <div className="empty-cart-message">
          <p>No items available in cart.</p>
        </div>
      ) : (
        all_product.map((e) => {
          if (CartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cart-format format-main">
                  <img src={e.image} alt='' className='cart-prod-icon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='quantity'>{CartItems[e.id]}</button>
                  <p>${e.new_price * CartItems[e.id]}</p>
                  <img className='remove-icon' src={remove_icon} onClick={() => { removeCart(e.id) }} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })
      )}
      {!isCartEmpty && (
        <div className="cartDown">
          <div className="cartTotal">
            <h1>Cart Total</h1>
            <div>
              <div className="totalItem">
                <p>Subtotal</p>
                <p>${getTotalAmt()}</p>
              </div>
              <hr />
              <div className="totalItem">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="totalItem">
                <h3>Total</h3>
                <h3>${getTotalAmt()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="promocode">
            <p>If you have a promo code, enter here.</p>
            <div className="promobox">
              <input type="text" placeholder='Promo Code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems;
