import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';

import Container from 'react-bootstrap/Container';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/careers' component={Careers} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
