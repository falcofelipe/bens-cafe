import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useAuth, logoutUser } from '../../context/auth/AuthState';

const NavbarComponent = () => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  const nonUserLinks = (
    <NavDropdown title='Account' className='nav-acc-dropdown'>
      <Nav.Item>
        <Nav.Link href='/login' className='nav-acc-link'>
          <i className='fas fa-sign-in-alt' />{' '}
          <span className='hide-sm'>Login</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/register' className='nav-acc-link'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Register</span>
        </Nav.Link>
      </Nav.Item>
    </NavDropdown>
  );

  const userLinks = (
    <NavDropdown
      title={`Hello ${user ? user.name : null}`}
      className='nav-acc-dropdown'>
      <Nav.Item>
        <Nav.Link href='/admin' className='nav-acc-link'>
          <i className='fas fa-cog' /> <span className='hide-sm'>Admin</span>
        </Nav.Link>
        <Nav.Link
          href='#!'
          onClick={() => logoutUser(authDispatch)}
          className='nav-acc-link'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Nav.Link>
      </Nav.Item>
    </NavDropdown>
  );

  return (
    <Fragment>
      <Navbar
        bg='primary'
        variant='light'
        expand='lg'
        fixed='top'
        className='py-3 mx-0 w-100 mw-100'
        id='main-navbar'>
        <Container>
          <Navbar.Brand>
            <a href='/' className='text-dark'>
              Ben's Café
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='main-navbar-nav' />
          <Navbar.Collapse id='main-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/#showcase'>Home</Nav.Link>
              <Nav.Link href='/#about'>About Us</Nav.Link>
              <Nav.Link href='/#venues'>Our Venues</Nav.Link>
              <Nav.Link href='/careers'>Careers</Nav.Link>
              <Nav.Link href='/#contact'>Contact Us</Nav.Link>
              {isAuthenticated ? userLinks : nonUserLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
