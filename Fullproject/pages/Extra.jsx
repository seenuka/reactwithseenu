import React, { useEffect } from 'react'

import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'RE',
    price:120000,
    img:'https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/landing/classic-350-motorcycle.jpg',
    
  },
  {
    id:2,
    name:'R15',
    price:130000,
    img:'https://ic1.maxabout.us/autos/tw_india//Y/2017/6/yamaha-r15-v1-autos-maxabout.jpg',
    
  },
  {
    id:3,
    name:'Dominar',
    price:150000,
    img:'https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/dominar/dominar400-green/10.png',
    
  },
  
]
function Extras() {
  const [counter,setCounter]=React.useState(0)
  function handleCounterInc()
  {
    setCounter(counter+1)
  }
  function handleCounterDec(){
    setCounter(counter-1)
  }
  useEffect(()=>{
    console.log(`Your's  ${counter} supe cool bike is  redy to buy`)
  })
  return (
    <>
    <Navbar/>

    <h1 style={{color:'green',paddingTop:'70px'}}>Other things</h1>
    <div className='menu'> 
    {menus.map((menu,index)=>(
    <div key={index}>
    <div className='card middle'>
      <div className='front'> 
          <img className='menuimg' src={menu.img} alt='menu'/>
      </div>
      <div className='back'>
        <div className='back-content middles'>
        <h2 style={{color:'yellow'}}>{menu.name} </h2>
        <p style={{color:'black'}}>{menu.category}</p>
        <p style={{color:'blue'}}>₹{menu.price}</p>
        <span style={{color:'gray'}}>{menu.description}</span><br/>
        <button className='cartbtn' onClick={handleCounterInc} style={{backgroundColor:'gray',marginRight:'3px'}}>+</button>
          <span style={{color:'black',marginRight:'3px'}}>{counter}</span>
        <button className='cartbtn' onClick={handleCounterDec} style={{backgroundColor:'gray'}}>-</button>

     
      </div>
      </div>
    </div>
    </div>
      ))}

    </div>
    <Footer/>
    </>
  )
}

export default Extras