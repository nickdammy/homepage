// This file contains the Navbar component for the website

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarFun() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/homepage" style={{color: "white"}}>OA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: "white"}}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            
            <Nav.Link href="/homepage/#/about" style={{color: "white"}}>About Me</Nav.Link>
            <Nav.Link href="/homepage/#/experience" style={{color: "white"}}>Experiences</Nav.Link>
            {/* <NavDropdown title="Experiences" id="collasible-nav-dropdown" style={{color: "white"}}>
              <NavDropdown.Item href="#action/3.1">Work</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Education</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Volunteer</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="https://www.linkedin.com/in/damiajayi" style={{color: "white"}}>LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/nickdammy" style={{color: "white"}}>GitHub</Nav.Link>
            {/* <Nav.Link href="" style={{color: "white"}}>Resume</Nav.Link>
             */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFun;