import React from 'react'
import { watchData } from '../data/watcj'
import Navbar from '../components/Navbar'
import { Link,NavLink } from 'react-router-dom'
import { useState } from 'react'


function Wp() {
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

watchData :watchData.filter((orange)=>selectedproduct.includes(orange.company))


  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="prosel">
      {watchData.map((watch)=>{
        return (
          <div className='proinput'>
            <label htmlFor="">
              <input type="checkbox"
              checked={selectedproduct.includes(watch.company)}
              onChange={()=>companyhandler(watch.company)}
              />
              {watch.company}
            </label>
          </div>
        )
      })}
    </div>
    <div className='pagesection'>
      {filterProduct.map((item)=>{
        return(
            <div>
               <NavLink to={`/watches/${item.id}`} replace>
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


export default Wp