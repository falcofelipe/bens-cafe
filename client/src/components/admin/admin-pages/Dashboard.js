import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

import PositionsTable from '../tables/PositionsTable';
import AboutTable from '../tables/AboutTable';
import VenuesTable from '../tables/VenuesTable';

const Dashboard = () => {
  return (
    <Fragment>
      <section id='admin-tables' className='bg-primary pt-3 pb-4'>
        <Container>
          <div className='row'>
            <div className='col-xl-7'>
              <div className='card bg-light mb-3'>
                <div className='card-header'>
                  <h4>Recent positions</h4>
                </div>
                <PositionsTable recent={6} shortened={true} />
              </div>
            </div>
            <div className='col-xl-5'>
              <div className='card mb-3 bg-light'>
                <div className='card-header'>
                  <h4>About Section</h4>
                </div>
                <AboutTable shortened={true} />
              </div>
              <div className='card bg-light'>
                <div className='card-header'>
                  <h4>Venues Section</h4>
                </div>
                <VenuesTable shortened={true} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Dashboard;
