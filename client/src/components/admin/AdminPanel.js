import React from 'react';
import Sidebar from './admin-layout/Sidebar';
import AdmNavbar from './admin-layout/AdmNavbar';
import Modals from './admin-layout/Modals';
import Dashboard from './admin-pages/Dashboard';
import HomeContent from './admin-pages/HomeContent';
import Positions from './admin-pages/Positions';
import More from './admin-pages/More';
import Footer from '../layout/Footer';

import { Switch, Route } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div id='admin-main' className='w-100' style={{ height: '100vh' }}>
        <AdmNavbar />
        <Modals />
        <div id='admin-content'>
          <Switch>
            <Route exact path='/admin' component={Dashboard} />
            <Route exact path='/admin/home' component={HomeContent} />
            <Route exact path='/admin/about/:id' component={More} />
            <Route exact path='/admin/venues/:id' component={More} />
            <Route exact path='/admin/positions' component={Positions} />
            <Route exact path='/admin/positions/:id' component={More} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPanel;
