import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import venue1 from '../../assets/img/venue1.jpg';
import venue2 from '../../assets/img/venue2.jpg';
import venue3 from '../../assets/img/venue3.jpg';

const Home = () => {
  return (
    <div id='home-content'>
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

      <section id='about' className='bg-primary row'>
        <br />
        <div className='col-md-5 py-md-5 py-3 px-md-5 px-3 text-center bg-primary'>
          <Container>
            <h5 className='lead pb-4 pt-3'>
              We're redisigning cafés as you know it
            </h5>
            <p>
              Active since 2001 in some of the busiest areas of the city, our
              mission is to resignify what it means to be a "modern café". Our
              coffee beans are all hand-picked to ensure flavour and freshness,
              and our staff is comprised of some of the best baristas in town.
              With a keen eye for perfection, we aim to deliver excellent
              quality service in a modern, elegant and minimalistic environment.
            </p>
          </Container>
        </div>
        <div className='col-md-7' id='home-secondary'>
          <div className='primary-light-overlay'></div>
        </div>
      </section>

      <section id='venues' className='bg-secondary py-4'>
        <Container>
          <h3 className='text-center text-primary pb-4'>Our Venues</h3>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card bg-primary mb-4 mb-md-0'>
                <div className='venue-img'>
                  <img
                    src={venue1}
                    alt=''
                    className='card-img-top'
                    style={{ position: 'absolute', bottom: '0px' }}
                  />
                </div>
                <div className='card-body text-center'>
                  <p className='lead'>St. Kilda Rd.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio dicta nam, hic et inventore doloremque atque
                    nobis numquam officiis eius reprehenderit mollitia dolores
                    itaque, aperiam at labore tenetur maiores magnam.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card bg-primary mb-4 mb-md-0'>
                <div className='venue-img'>
                  <img
                    src={venue2}
                    alt=''
                    className='card-img-top'
                    style={{ position: 'absolute', bottom: '0px' }}
                  />
                </div>
                <div className='card-body text-center'>
                  <p className='lead'>Toorak Rd.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio dicta nam, hic et inventore doloremque atque
                    nobis numquam officiis eius reprehenderit mollitia dolores
                    itaque, aperiam at labore tenetur maiores magnam.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card bg-primary mb-4 mb-md-0'>
                <div className='venue-img'>
                  <img
                    src={venue3}
                    alt=''
                    className='card-img-top'
                    style={{ position: 'absolute', bottom: '0px' }}
                  />
                </div>
                <div className='card-body text-center'>
                  <p className='lead'>High St.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio dicta nam, hic et inventore doloremque atque
                    nobis numquam officiis eius reprehenderit mollitia dolores
                    itaque, aperiam at labore tenetur maiores magnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
