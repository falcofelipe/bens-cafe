import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const About = ({ about }) => {
  return (
    <section id='about' className='bg-primary row mx-0'>
      <div className='col-md-5 py-md-5 py-3 px-md-5 px-3 mx-0 text-center align-self-center bg-primary'>
        <Container>
          {about === {} ? (
            <Spinner />
          ) : (
            <span>
              <h5 className='lead pb-4 pt-3'>{about.catchphrase}</h5>
              <p>{about.main}</p>
            </span>
          )}
        </Container>
      </div>
      <div className='col-md-7 mx-0' id='home-secondary'>
        <div className='primary-light-overlay'></div>
      </div>
    </section>
  );
};

export default About;
