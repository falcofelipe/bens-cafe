import React, { Fragment } from 'react';

import { useAuth, logoutUser } from '../../../context/auth/AuthState';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Dropdown from 'react-bootstrap/Dropdown';

const AdmNavbar = props => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('admin-main');
    if (!sidebar.classList.contains('toggle')) {
      sidebar.classList.add('toggle');
      main.classList.add('toggle');
    } else {
      sidebar.classList.remove('toggle');
      main.classList.remove('toggle');
    }
  };

  // Updates the title and icon according to the path visited
  let title, iconClass;
  let path = window.location.pathname;
  if (path.includes('home')) {
    title = 'Home Content';
    iconClass = 'fas fa-home';
  } else if (path.includes('positions')) {
    title = 'Positions';
    iconClass = 'fas fa-user-tie';
  } else {
    title = 'Dashboard';
    iconClass = 'fas fa-cog';
  }

  const onLogout = () => {
    logoutUser(authDispatch);
  };

  return (
    <Fragment>
      <Navbar
        bg='primary'
        expand='sm'
        variant='light'
        className='py-3 w-100 mw-100'
        id='adm-navbar'>
        <Container>
          <Nav.Link href='#' id='sidebarCollapse' onClick={toggleSidebar}>
            <i className='fas fa-bars' />{' '}
            <span className='d-none d-lg-inline'>Toggle Sidebar</span>
          </Nav.Link>
          <Navbar.Brand className='text-center adm-navbar-brand py-0 mx-auto'>
            <i className={iconClass} /> {title}
          </Navbar.Brand>
          <Nav>
            {isAuthenticated ? (
              <Dropdown
                as={NavItem}
                id='adm-acc-dropdown'
                className='text-primary'>
                <Dropdown.Toggle as={NavLink}>
                  <i className='fas fa-user' />{' '}
                  <span className='d-none d-lg-inline'>
                    Hello {user ? user.name : null}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href='#!'
                    onClick={onLogout}
                    className='text-center'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AdmNavbar;
