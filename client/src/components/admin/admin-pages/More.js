import React from 'react';
import AboutForm from '../admin-forms/AboutForm';
import PositionForm from '../admin-forms/PositionForm';
import VenueForm from '../admin-forms/VenueForm';

import Container from 'react-bootstrap/Container';

const More = props => {
  let path = window.location.pathname;

  let form, formId, title;

  let state = props.location.state;

  if (path.includes('about')) {
    title = 'About';
    form = <AboutForm state={state} />;
    formId = 'about-form';
  } else if (path.includes('position')) {
    title = 'Position';
    form = <PositionForm state={state} />;
    formId = `position-form-${state.position._id}`;
  } else if (path.includes('venue')) {
    title = 'Venue';
    form = <VenueForm state={state} />;
    formId = `venue-form-${state.venue._id}`;
  }

  return (
    <section id='edit-entry'>
      <Container>
        <div className='row'>
          <div className='col-xl-10 mx-auto pt-3 pb-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-header'>
                <h4>{title}</h4>
              </div>
              <div className='card-body'>{form}</div>
              <div className='d-flex justify-content-between mx-3 mb-3'>
                <a href='/admin/' className='btn btn-secondary'>
                  Cancel
                </a>
                <button type='submit' form={formId} className='btn btn-accent'>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default More;
