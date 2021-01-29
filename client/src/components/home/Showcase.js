import React from 'react';
import Container from 'react-bootstrap/Container';

const Showcase = props => {
  return (
    <section id='home-showcase' className='py-5'>
      <div className='primary-overlay text-primary'>
        <Container className='h-100'>
          <div className='text-center' style={{ paddingTop: '40vh' }}>
            <h1 className='display-2'>Ben's Café</h1>
            <p className='lead'>A minimlist approach to modern cafés</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Showcase;
