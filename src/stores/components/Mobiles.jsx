import React from 'react'
import {mobileData} from '../data/Phone'
import { Link,NavLink } from 'react-router-dom';
const Mobiles = () => {

    const first4img= mobileData.slice(0,5);
  return (
   <>
<div className="protitle">
<h2>Mobiles</h2>
</div>
    <div className='prosection'>
      {
        first4img.map((item)=>{
            return(
              <NavLink to={`/mobiles/${item.id}`} replace >

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

export default Mobiles
