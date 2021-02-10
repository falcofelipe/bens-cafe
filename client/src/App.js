import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Careers from './components/pages/Careers';
import Footer from './components/layout/Footer';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import PrivateRoute from './components/routing/PrivateRoute';
import AdminPanel from './components/admin/AdminPanel';

import CareersState from './context/careers/CareersState';
import HomeState from './context/home/HomeState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './assets/scss/custom.scss';

function App() {
  return (
    <Fragment>
      <AuthState>
        <HomeState>
          <CareersState>
            <AlertState>
              <Router>
                <Switch>
                  <Route path='/admin' component={AdminPanel} />
                  <Route path='/'>
                    <Navbar />
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/careers' component={Careers} />
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/register' component={Register} />
                    </Switch>
                    <Footer />
                  </Route>
                </Switch>
              </Router>
            </AlertState>
          </CareersState>
        </HomeState>
      </AuthState>
    </Fragment>
  );
}

export default App;
