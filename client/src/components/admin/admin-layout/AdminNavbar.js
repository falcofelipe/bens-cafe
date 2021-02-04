import React, { Fragment } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Dropdown from 'react-bootstrap/Dropdown';

const AdminNavbar = () => {
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
            <i className='fas fa-cog text-secondary' /> Dashboard
          </Navbar.Brand>
          <Nav>
            <Dropdown as={NavItem} id='adm-acc-dropdown'>
              <Dropdown.Toggle as={NavLink}>
                <i className='fas fa-user' />{' '}
                <span className='d-none d-lg-inline'>Hello Chris</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href='/'
                  onClick={() => console.log('Logged Out')}
                  className='text-center'>
                  <i className='fas fa-sign-out-alt' />{' '}
                  <span className='hide-sm'>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AdminNavbar;
