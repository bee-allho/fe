import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
      <>        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">TEST</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">TEST</Nav.Link>
            <Nav.Link href="#features">TEST</Nav.Link>
            <Nav.Link href="#pricing">TEST</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Nav>TEST</Nav>
        </>

    );
};

export default Header;