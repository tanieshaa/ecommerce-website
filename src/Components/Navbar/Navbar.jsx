import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalitems} = useContext(HomeContext);

  return (
    <div className='nav'>
      <div className='nav-logo'>
        <p>Aura</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link to='/'>Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("apparel")}>
          <Link to='/apparel'>Apparel</Link>
          {menu === "apparel" && <hr />}
        </li>
        <li onClick={() => setMenu("accessories")}>
          <Link to='/accessories'>Accessories</Link>
          {menu === "accessories" && <hr />}
        </li>
        <li onClick={() => setMenu("beauty")}>
          <Link to='/beauty'>Beauty</Link>
          {menu === "beauty" && <hr />}
        </li>
      </ul>
      <div className='login-cart'>
        <Link to='/cart'>
          <img src={cart_icon} alt=''/>
        </Link>
        <div className='cart-count'>{getTotalitems()}</div>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;

