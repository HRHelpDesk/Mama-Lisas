import React from "react";
import logo from '../assets/img/logo.png'
import bag from '../assets/img/bag.svg'
import { Navbar, Container, Nav } from "react-bootstrap";


const NavigationBar = (props)=>{
    return(
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Latin Seoul"
            />
      
      
          </Navbar.Brand>
          <Nav>
             <Nav.Link>
             <img
              onClick={props.onClickBag}
              src={bag}
              width="50"
              height="50"
              className="d-inline-block ml-auto icon"
              alt="Latin Seoul"
            />
             </Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    )
}

export default NavigationBar;