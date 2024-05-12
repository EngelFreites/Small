import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from 'react-bootstrap/Badge';
 
export const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="nav">
        <div  className="brand">
        <h2> 
        Small
        </h2>
        </div>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="link">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav className="link2">
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
       
       

    
    </>
  );
};

export default Header;
