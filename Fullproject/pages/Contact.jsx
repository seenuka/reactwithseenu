import React from 'react'
import {Carousel} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <h1 style={{paddingTop:'40px',backgroundColor:'Blue'}}>Branches</h1>
      <section>
      <Carousel fade >
  
 
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'Blue'}}
      src='https://i.pinimg.com/originals/90/39/63/90396310a9928d2aedd61e2b6da50891.jpg' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>chennai</h1>
      <p>123,xyz Road,Chennai-00</p>
      <button onClick={()=>navigate('/menu')}> Wanna buy!</button>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.carandbike.com/bike-images/large/royal-enfield/scram-411/royal-enfield-scram-411.jpg?v=11'height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>newyork</h1>
      <p>256,willington road,newyork</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact