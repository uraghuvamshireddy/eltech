import React, { useState } from 'react'
import { mobileData } from '../data/Phone'
import { Link,NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Mp() {
  const [selectedproduct,setselectedproduct] = useState([])
  const companyhandler = (mango)=>{
    if(selectedproduct.includes(mango)){
      setselectedproduct(selectedproduct.filter(item => item!=mango))
    }
    else{
      setselectedproduct([...selectedproduct,mango])
    }
  }
  
 const filterProduct = selectedproduct.length===0?

 mobileData : mobileData.filter((orange)=>selectedproduct.includes(orange.company))


  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="prosel">
      {mobileData.map((phone)=>{
        return (
          <div className='proinput'>
            <label htmlFor="">
              <input type="checkbox"
              checked={selectedproduct.includes(phone.company)}
              onChange={()=>companyhandler(phone.company)}
              />
              {phone.company}
            </label>
          </div>
        )
      })}
    </div>
    <div className='pagesection'>
      {filterProduct.map((item)=>{
        return(
            <div>
               <NavLink to={`/mobiles/${item.id}`} replace>
               <div className="pageimg">
                    <img src={item.image} alt="" />
                </div>
                </NavLink>
                <div className="promodel">
                    {item.company},{item.model}
                </div>
            </div>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default Mp
