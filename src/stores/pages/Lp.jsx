import React,{useState} from 'react'
import { computerData } from '../data/laptop'
import Navbar from '../components/Navbar'
import { Link,NavLink } from 'react-router-dom'


function Lp() {
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

 computerData : computerData.filter((orange)=>selectedproduct.includes(orange.company))


  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="prosel">
      {computerData.map((laptop)=>{
        return (
          <div className='proinput'>
            <label htmlFor="">
              <input type="checkbox"
              checked={selectedproduct.includes(laptop.company)}
              onChange={()=>companyhandler(laptop.company)}
              />
              {laptop.company}
            </label>
          </div>
        )
      })}
    </div>
    <div className='pagesection'>
      {filterProduct.map((item)=>{
        return(
            <div>
               <NavLink to={`/laptops/${item.id}`} replace>
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

export default Lp