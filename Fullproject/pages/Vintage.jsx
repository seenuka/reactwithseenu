import React, { useEffect } from 'react'
import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'RE',
    price:120000,
    img:'https://modifyseva.com/wp-content/uploads/2020/04/Re-Vintage-350-Custom-Old-Bullet-by-modifyseva-4.jpg',
    
  },
  {
    id:2,
    name:'RX',
    price:90000,
    img:']data:image/jpeg;base64,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',
    
  },
  {
    id:3,
    name:'Splender',
    price:10000,
    img:'https://3.imimg.com/data3/VW/MA/MY-9385795/splender-pro-250x250.jpg',
    

  },
  {
    id:4,
    name:'Dio',
    price:25000,
    img:'https://bd.gaadicdn.com/processedimages/honda/dio-bs6/640X309/dio-bs661161150b1571.jpg?tr=w-135',
    
  },
  
]
function Menu() {
  const [counter,setCounter]=React.useState(0)
  function handleCounterInc()
  {
    setCounter(counter+1)
  }
  function handleCounterDec(){
    setCounter(counter-1)
  }
  useEffect(()=>{
    console.log(`Yours classic vintage bike ${counter} is read to roar`)
  })
  return (
    <>
    <Navbar/>

    <h1 style={{color:'white',paddingTop:'70px'}}>shirts</h1>
    <div className='menu'> 
    {menus.map((menu,index)=>(
    <div key={index}>
    <div className='card middle'>
      <div className='front'> 
          <img className='menuimg' src={menu.img} alt='menu'/>
      </div>
      <div className='back'>
        <div className='back-content middles'>
        <h2 style={{color:'#fa0505'}}>{menu.name} </h2>
        <p style={{color:'black'}}>{menu.category}</p>
        <p style={{color:'gray'}}>₹{menu.price}</p>
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

export default Menu