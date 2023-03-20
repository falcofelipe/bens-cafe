import React from 'react';
import Container from 'react-bootstrap/Container';

import AboutTable from '../tables/AboutTable';
import VenuesTable from '../tables/VenuesTable';

const HomeContent = () => {
  return (
    <section id='home-content-tables' className='bg-primary'>
      <Container>
        <div className='row'>
          <div className='col-xl-10 mx-auto pt-3 pb-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-header'>
                <h4>About Section</h4>
              </div>
              <AboutTable />
            </div>
            <div className='card bg-light'>
              <div className='card-header'>
                <h4>Venues Section</h4>
              </div>
              <VenuesTable />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeContent;
