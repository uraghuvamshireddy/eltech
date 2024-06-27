import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useCart } from '../cart/Cartcontext'

function Navbar() {
  const {cartItems}= useCart()
  return (
  <>
    <div className='navsection'>
      <div className="title"><h2>ELCART</h2></div>
      <div className="search">
        <input type="text" placeholder='Search' />
      </div>
      <div className="user">
        <div className="user-details">SignIN/SignUp</div>
     <Link to='/cart'> <div className="cart">Cart 
     <span>
      {cartItems.length}
     </span>
     </div></Link>
      </div>
    </div>
    <div className="submenu">
        <ul>
            <NavLink to='/mobiles' replace>
            <li>Mobiles</li>
            </NavLink>
            <NavLink to='/laptops' replace>
            <li>Laptops</li>
            </NavLink>
            <NavLink to='/watches' replace>
            <li>Watch</li>
            </NavLink>
           <NavLink to='/tv' replace>
           <li>Television</li>
           </NavLink>
        </ul>
    </div>
  </>
  )
}

export default Navbar
