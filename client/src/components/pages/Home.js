import React from 'react';

import { useHome } from '../../context/home/HomeState';
import Showcase from '../home/Showcase';
import About from '../home/About';
import Venues from '../home/Venues';
import Contact from '../home/Contact';

const Home = () => {
  const homeState = useHome()[0];
  const { about, venues, loading } = homeState;

  return (
    <div id='home-content' className='mw-100 mx-0'>
      <a href='#showcase' id='showcase'></a>
      <Showcase />

      <a href='#about' id='about'></a>
      <About about={about} loading={loading} />

      <a href='#venues' id='venues'></a>
      <Venues venues={venues} loading={loading} />

      <a href='#contact' id='contact'></a>
      <Contact />
    </div>
  );
};

export default Home;
