import React, { useEffect } from 'react';
import CareerItem from '../careers/CareerItem';
import { useCareers, getPositions } from '../../context/careers/CareersState';

import Container from 'react-bootstrap/Container';

const Careers = () => {
  const [careersState, careersDispatch] = useCareers();

  const { positions } = careersState;

  useEffect(() => {
    getPositions(careersDispatch);
  }, [careersDispatch, positions]);

  return (
    <div id='careers-content'>
      <div className='primary-overlay'>
        <section id='careers-showcase' className='py-4'>
          <div className='text-primary'>
            <Container>
              <div className='text-center'>
                <h1 className='display-2' style={{ marginTop: '10rem' }}>
                  Join our team today!
                </h1>
                <p className='lead'>
                  Apply for an available position today and join our team of
                  talents!
                </p>
              </div>
            </Container>
          </div>
        </section>
        <div className='py-4'>
          <Container>
            <ul className='list-group mb-3'>
              {positions.map(position => (
                <CareerItem position={position} key={position._id} />
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Careers;
