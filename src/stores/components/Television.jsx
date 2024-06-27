import React from 'react'
import { tvData } from '../data/tv';
import { Link,NavLink } from 'react-router-dom';

function Television() {
    const first4img= tvData.slice(0,5);
    return (
     <>
<div className="protitle">
<h2>Television</h2>
</div>      <div className='prosection'>
        {
          first4img.map((item)=>{
              return(
                <NavLink to={`/tv/${item.id}`} replace>

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

export default Television
