import React from 'react';
import AdminNavbar from './admin-layout/AdminNavbar';
import AdminSidebar from './admin-layout/AdminSidebar';
import AdminDashboard from './admin-pages/AdminDashboard';
import AdminHomeContent from './admin-pages/AdminHomeContent';
import AdminPositions from './admin-pages/AdminPositions';
import Footer from '../layout/Footer';

import { Switch, Route } from 'react-router-dom';

const AdminRoot = () => {
  return (
    <div class='wrapper'>
      <AdminSidebar />

      <div id='admin-main' className='w-100' style={{ height: '100vh' }}>
        <AdminNavbar />
        <div id='admin-content'>
          <Switch>
            <Route exact path='/admin' component={AdminDashboard} />
            <Route exact path='/admin/home' component={AdminHomeContent} />
            <Route exact path='/admin/careers' component={AdminPositions} />
          </Switch>
        </div>
        <Footer />
      </div>

      {/* <section id='posts'>
        <Container></Container>
      </section> */}
    </div>
  );
};

export default AdminRoot;
