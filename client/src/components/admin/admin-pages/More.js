import React from 'react';
import { Link } from 'react-router-dom';
import AboutForm from '../admin-forms/AboutForm';
import PositionForm from '../admin-forms/PositionForm';
import VenueForm from '../admin-forms/VenueForm';
import {
  useCareers,
  deletePosition,
} from '../../../context/careers/CareersState';

import Container from 'react-bootstrap/Container';

const More = props => {
  const careersDispatch = useCareers()[1];

  const onDelete = (dispatch, state, history) => {
    let result = window.confirm(
      'Are you sure you want to delete this position?'
    );
    if (result) {
      deletePosition(dispatch, state.position._id);
      history.push('/admin/');
    }
  };

  let path = window.location.pathname;

  let form, formId, title;

  let state = props.location.state;
  let includeDelete = false;

  if (path.includes('about')) {
    title = 'About';
    form = <AboutForm state={state} history={props.history} />;
    formId = 'about-form';
  } else if (path.includes('position')) {
    title = 'Position';
    form = <PositionForm state={state} history={props.history} />;
    formId = `position-form-${state.position._id}`;
    includeDelete = true;
  } else if (path.includes('venue')) {
    title = 'Venue';
    form = <VenueForm state={state} history={props.history} />;
    formId = `venue-form-${state.venue._id}`;
  }

  return (
    <section id='edit-entry'>
      <Container>
        <div className='row'>
          <div className='col-xl-10 mx-auto pt-3 pb-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-header d-flex justify-content-between'>
                <h4>{title}</h4>
                {includeDelete ? (
                  <a
                    href='#!'
                    onClick={() =>
                      onDelete(careersDispatch, state, props.history)
                    }>
                    <i className='fas fa-trash-alt text-danger my-auto mr-1 fa-lg' />
                  </a>
                ) : null}
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
