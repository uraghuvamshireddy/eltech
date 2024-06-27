import React from 'react'
import {computerData} from '../data/laptop'
import { Link, NavLink } from 'react-router-dom';
const Laptop = () => {

    const first4img= computerData.slice(0,5);
    return (
     <>
 <div className="protitle">    
  <h2>Laptop</h2>
</div>    
  <div className='prosection'>
        {
          first4img.map((item)=>{
              return(
                <NavLink to={`/laptops/${item.id}`} replace>

                  <div className='image'> 
                      <img className='pro-img' src={item.image} alt={"item.company"} />
                  </div>
            </NavLink>
              )
          })
        }
      </div>
     </>
    )
  
}

export default Laptop
