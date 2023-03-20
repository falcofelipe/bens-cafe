import React from 'react';
import Container from 'react-bootstrap/Container';

import PositionsTable from '../tables/PositionsTable';

const AdminPositions = () => {
  return (
    <section id='positions-tables' className='bg-primary'>
      <Container>
        <div className='row'>
          <div className='col-xl-10 mx-auto pt-3 pb-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-header'>
                <h4>Available positions</h4>
              </div>
              <PositionsTable />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdminPositions;
