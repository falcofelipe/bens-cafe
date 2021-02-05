import React from 'react';

import Nav from 'react-bootstrap/Nav';

const AdminSidebar = () => {
  return (
    <Nav id='sidebar' className='bg-secondary px-3 flex-column'>
      <div className='sidebar-header border-bottom border-primary text-center text-primary'>
        <h3 className='pt-2 m-0'>Ben's Café</h3>
        <p className='m-0'>Admin Panel</p>
      </div>

      <Nav className='pt-4'>
        <Nav.Link href='/admin/'>
          <h5>Dashboard</h5>
        </Nav.Link>
        <Nav.Link href='/admin/home' className='pl-5'>
          <h6>Home Content</h6>
        </Nav.Link>
        <Nav.Link href='/admin/positions' className='pl-5'>
          <h6>Positions</h6>
        </Nav.Link>
        <Nav.Link
          href='/'
          className='mt-5 pt-4 border-top border-primary text-center'>
          <h5>Back to the Main Website</h5>
        </Nav.Link>
      </Nav>
    </Nav>
  );
};

export default AdminSidebar;
