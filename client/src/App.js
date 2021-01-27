import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import CareersState from './context/careers/CareersState';

import './assets/scss/custom.scss';

function App() {
  return (
    <Fragment>
      <CareersState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/careers' component={Careers} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </CareersState>
    </Fragment>
  );
}

export default App;
