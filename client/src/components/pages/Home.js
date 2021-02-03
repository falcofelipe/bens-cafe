import React from 'react';

import { useHome } from '../../context/home/HomeState';
import Showcase from '../home/Showcase';
import About from '../home/About';
import Venues from '../home/Venues';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Home = () => {
  const homeState = useHome()[0];
  const { about, venues, loading } = homeState;

  return (
    <div id='home-content' className='mw-100 mx-0'>
      <Showcase />

      <About about={about} loading={loading} />

      <Venues venues={venues} loading={loading} />

      <section id='contact' className='bg-primary'>
        <Container fluid>
          <div className='row py-5'>
            <div className='col-lg-4 col-md-3 d-sm-hidden'></div>
            <div className='col-lg-2 col-md-3 text-center'>
              <h2>Any doubts?</h2>
            </div>
            <div className='col-lg-2 col-md-3 text-center'>
              <Button variant='accent' className='btn-lg'>
                Contact Us!
              </Button>
            </div>
            <div className='col-lg-4 col-md-3 d-sm-hidden'></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
