import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Careers = () => {
  return (
    <div id='careers-bg'>
      <div className='primary-overlay'>
        <section id='careers-showcase' className='py-4'>
          <div className='text-primary'>
            <Container>
              <div className='text-center'>
                <h1 className='display-2' style={{ 'margin-top': '10rem' }}>
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
            <ul className='list-group'>
              <li className='list-group-item bg-primary'>
                <strong>Waiter @ St. Kilda Road</strong>
                <i> Full-time icon</i>
                <p>
                  Our company is currently looking for a full-time qualified
                  waiter to help us in our St. Kilda Rd. venue. The ideal
                  candidate would have perfect english communicational skills,
                  at least 6 months of experience on being a waiter in cefés or
                  restaurants, and excellent presentation. Coffee-making
                  abilities are a plus!
                </p>
                <div className='text-center'>
                  <Button variant='accent'>Apply for this position now</Button>
                </div>
              </li>
              <li className='list-group-item bg-primary'>
                <strong>Kitchen Staff @ St. Kilda Road</strong>
                <i> Part-time icon</i>
                <p>
                  Our company is currently looking for a part-time kitchen staff
                  to help us in our St. Kilda Rd. venue. The ideal candidate
                  would have a passion for food and cooking, shown abilities to
                  work very well in teams and follow orders, and impecable
                  cleanliness.
                </p>
                <div className='text-center'>
                  <Button variant='accent'>Apply for this position now</Button>
                </div>
              </li>
              <li className='list-group-item bg-primary'>
                <strong>FOH manager @ Toorak Road</strong>
                <i> Part-time icon</i>
                <p>
                  Our company is currently looking for a Front-of-house manager
                  to help us in our Toorak Rd. venue. The ideal candidate would
                  have more than five years of experience in the area and at
                  least one year of experience as a management role. He/she
                  would also have excellent communicational and leadership
                  skills. Excellent coffee-making skills are essential,
                  including latte art!
                </p>
                <div className='text-center'>
                  <Button variant='accent'>Apply for this position now</Button>
                </div>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Careers;
