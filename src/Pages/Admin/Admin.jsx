import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import logo from '../../assets/img/logo.png'
import Dashboard from "./Dashboard.jsx";
import MenuEditor from "./MenuEditor.jsx";
import Reports from "./Reports";
import Settings from './Settings'
import RegisterMenu from "./RegisterMenu";
import SideNav from "../../Components/SideNav.jsx";
import {Container, Row, Col, Card, Form, Button, Nav, Navbar,Offcanvas, NavDropdown, FormControl } from "react-bootstrap";
import ParentRegister from "./ParentRegister";
const Admin = ()=>{

return (
    <div>
   <Navbar width="100px" bg="light" expand={false}>
  <Container fluid>
  <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Brand href="#"><img src={logo} width="100px" height="auto"/></Navbar.Brand>
    
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link ><Link to="/admin">Dashboard</Link></Nav.Link>
          <Nav.Link ><Link to="Menu-Editor">Menu Editor</Link></Nav.Link>
          <Nav.Link ><Link to="settings">Settings</Link></Nav.Link>
          <Nav.Link ><Link to="reports">Reports</Link></Nav.Link>
          <Nav.Link ><Link to="admin-order">Register Order</Link></Nav.Link>
          
         
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    <nav>
    
    <br></br>
    
    </nav>
   

    <Routes>
    <Route path="/" element={<Dashboard />} />
        <Route path="Menu-Editor" element={<MenuEditor />} />
        <Route path="settings" element={<Settings />} />
        <Route path="reports" element={<Reports />} />
        <Route path="admin-order" element={<ParentRegister />} />
        
      </Routes>
    </div>
)
} 

 export default Admin;