import React from 'react'
import { watchData } from '../data/watcj';
import { Link,NavLink } from 'react-router-dom';

function Watch() {
    const first4img= watchData.slice(0,5);
    return (
     <>
                  

     <div className="protitle">     <h2>Watch</h2>
</div>
      <div className='prosection'>
        {
          first4img.map((item)=>{
              return(
                <NavLink to={`/watches/${item.id}`} replace>
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

export default Watch
