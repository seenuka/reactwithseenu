import React from 'react'
import {Carousel} from 'react-bootstrap'


import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigate=useNavigate()
  return (
    <div>

      
<section>
      <Carousel fade >
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic3506131bb8729f70.jpg?tr=h-48' height='750px' alt='contactimg'
      />
    <Carousel.Caption>
      <h1>Ride Away</h1>
      <p>Travelling is our only partner</p>
    </Carousel.Caption>
  </Carousel.Item>
  
 
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHw%3D&w=1000&q=80' height='750px' alt='contactimg'
      />
    <Carousel.Caption>
      <h1>dont ride without helmet</h1>
      <p>click  here to dreams come true</p>
      <button onClick={()=>navigate('/menu')}> mmmm.... </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
     
    </div>
  )
}

export default Slider