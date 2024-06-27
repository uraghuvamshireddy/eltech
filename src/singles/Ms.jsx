import React from 'react'
import { mobileData } from '../stores/data/Phone'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/cart/Cartcontext';

function Ms() {
  const {id}= useParams();
  const {addToCart,cartItems} =useCart()
  const product = mobileData.find((item)=>item.id===id)
  return (
  <>
  <Navbar />
    <div>
       <div className="indpage">
        <div className="indimg">
          <img src={product.image} alt="" />
        </div>
      <div className="inddetail">
        <div className="indcomp space">
          <h2>{product.company}</h2>
        </div>
        <div className="indmodel space">
          <h3>{product.model}</h3>
        </div>
         <div className="indprice space">
          <h2>{product.price}</h2>
         </div>
         <div className="inddes space">
          <p>{product.description}</p>
         </div>
         <button onClick={()=>addToCart(product)} className='space'>Add to Cart</button>
      </div>
        </div>      
        
    </div>
    </>
  )
}

export default Ms
