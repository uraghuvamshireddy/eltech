import React from 'react'
import { useCart } from './cart/Cartcontext'

function Usercart() {
    const {cartItems,addToCart,removeFromCart} = useCart()

  return (
  <>
  <h2 className='carty'> CART iTEMS</h2>
  {cartItems.length===0 ?
    <h3 className='carty'>Your Cart is Empty</h3> : <div>
      {cartItems.map((item)=>{
        return (
            <div className="cartsec">
                <div className="cartimg"><img src={item.image} alt=""/></div>
                <div className="cartdet">
                    <h1>{item.product}</h1>
                    <h3>{item.company} , {item.model}</h3>
                    <h2>{item.price}</h2>
                    
                <button onClick={()=>removeFromCart(item)} className='remove'>Remove</button>
                </div>
            </div>
        )
      })}
    </div>}</>
  )
}

export default Usercart
