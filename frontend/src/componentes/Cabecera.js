import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Cabecera = () => {
  return (
        <Navbar collapseOnSelect className='bg-body-tertiary' expand="lg">
          <Container>
              <Navbar.Brand href={Link} to="/">
                  <img
                      src="../img/bookfacesnnavbarlight.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="Logo" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href={Link} to="/carrito">
                          <i className="fa-solid fa-bag-shopping"></i>
                      </Nav.Link>

                      <Nav.Link href={Link} to="/lista-deseos">
                          <i className="fa-regular fa-heart"></i>
                      </Nav.Link>

                      <NavDropdown title="Usuario" id="collapsible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.2">LogOut</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    );
};

export default Cabecera;