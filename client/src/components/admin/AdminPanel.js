import React, { useEffect } from 'react';

import PrivateRoute from '../routing/PrivateRoute';
import { useAuth } from '../../context/auth/AuthState';

import Sidebar from './admin-layout/Sidebar';
import AdmNavbar from './admin-layout/AdmNavbar';
import Modals from './admin-layout/Modals';
import Dashboard from './admin-pages/Dashboard';
import HomeContent from './admin-pages/HomeContent';
import Positions from './admin-pages/Positions';
import More from './admin-pages/More';
import Footer from '../layout/Footer';

import { Switch, Route, Redirect } from 'react-router-dom';

const AdminPanel = props => {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div id='admin-main' className='w-100' style={{ height: '100vh' }}>
        <AdmNavbar />
        <Modals />
        <div id='admin-content'>
          <Switch>
            <PrivateRoute exact path='/admin' component={Dashboard} />
            <PrivateRoute exact path='/admin/home' component={HomeContent} />
            <PrivateRoute exact path='/admin/about/edit' component={More} />
            <PrivateRoute
              exact
              path='/admin/venues/edit/:id'
              component={More}
            />
            <PrivateRoute exact path='/admin/positions' component={Positions} />
            <PrivateRoute
              exact
              path='/admin/positions/edit/:id'
              component={More}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPanel;
