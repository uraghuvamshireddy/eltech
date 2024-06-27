import React,{useState} from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
import { Link,NavLink } from 'react-router-dom'


function Tp() {
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

 tvData : tvData.filter((orange)=>selectedproduct.includes(orange.company))


  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="prosel">
      {tvData.map((tv)=>{
        return (
          <div className='proinput'>
            <label htmlFor="">
              <input type="checkbox"
              checked={selectedproduct.includes(tv.company)}
              onChange={()=>companyhandler(tv.company)}
              />
              {tv.company}
            </label>
          </div>
        )
      })}
    </div>
    <div className='pagesection'>
      {filterProduct.map((item)=>{
        return(
            <div>
               <NavLink to={`/tv/${item.id}`} replace>
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


export default Tp