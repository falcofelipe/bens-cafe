import React, { createRef, useEffect } from 'react';

import { useHome, getAbout, getVenues } from '../../context/home/HomeState';
import Showcase from '../home/Showcase';
import About from '../home/About';
import Venues from '../home/Venues';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [homeState, homeDispatch] = useHome();
  const { about, venues } = homeState;

  useEffect(() => {
    try {
      getAbout(homeDispatch);
      getVenues(homeDispatch);
    } catch (error) {
      console.error(error);
      console.log(error.data);
      throw new Error(error);
    }
  }, [homeDispatch]);

  return (
    <div id='home-content' className='mw-100 mx-0'>
      <Showcase />

      <About about={about} />

      <Venues venues={venues} />

      <section id='contact' className='bg-primary'>
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
      </section>
    </div>
  );
};

export default Home;
