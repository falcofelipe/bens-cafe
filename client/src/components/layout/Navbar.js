import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {
  return (
    <Fragment>
      <Navbar
        bg='primary'
        variant='light'
        expand='lg'
        fixed='top'
        className='py-3'>
        <Container>
          <Navbar.Brand>Ben's Café</Navbar.Brand>
          <Navbar.Toggle aria-controls='main-navbar-nav' />
          <Navbar.Collapse id='main-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/#about'>About Us</Nav.Link>
              <Nav.Link href='/careers'>Careers</Nav.Link>
              <Nav.Link href='/contact'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
