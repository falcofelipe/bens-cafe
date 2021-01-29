import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Careers from './components/pages/Careers';
import Footer from './components/layout/Footer';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

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
                <Navbar />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/careers' component={Careers} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                </Switch>
                <Footer />
              </Router>
            </AlertState>
          </CareersState>
        </HomeState>
      </AuthState>
    </Fragment>
  );
}

export default App;
