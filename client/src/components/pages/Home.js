import React from 'react';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <div>
      <section id='home-showcase' className='py-5'>
        <div className='primary-overlay text-primary'>
          <Container className='h-100'>
            <div className='text-center' style={{ 'padding-top': '40vh' }}>
              <h1 className='display-2'>Ben's Café</h1>
              <p className='lead'>A minimalist approach to modern cafés</p>
            </div>
          </Container>
        </div>
      </section>
      <div className='bg-primary'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
