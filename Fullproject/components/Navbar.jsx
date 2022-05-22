import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl, Button  } from 'react-bootstrap'
function Navbars(){ 

 
  //react-router-dom-->navigate

  const navigate=useNavigate()
  const handleLogout=()=>{
    alert("Logged out! Thank you Come Again")
    navigate('/')
  }
  
  return(
   <> 
  {/* navbar in bootstrap */}
   
<Navbar fixed='top' style={{backgroundColor:'grey',height:'80px'}} variant='light' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">FashionWorld</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link  onClick={()=>navigate('/home')}>Home</Nav.Link>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
          <NavDropdown.Item  onClick={()=>navigate('/menu')}>new</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>navigate('/starters')}>vintage</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  onClick={()=>navigate('/extras')}>
            other things
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  onClick={()=>navigate('/contact')}>Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          style={{marginTop:'20px'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
          
      </Form>
      <Nav.Link  style={{color:'black'}} onClick={()=>navigate('/about')}>User Profile</Nav.Link>
      <Button variant='outline-danger' onClick={handleLogout}>Logout</Button >

    </Navbar.Collapse>
  </Container>
</Navbar>
</>
)}
export default Navbars