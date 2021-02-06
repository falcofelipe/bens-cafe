import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useHome } from '../../../context/home/HomeState';

const VenueForm = props => {
  const homeState = useHome()[0];
  // const { loading } = homeState;

  const action = props.state.action;
  const initialState = props.state.venue;
  const formId = `venue-form-${initialState._id}`;

  const [venue, setVenue] = useState(initialState);

  let { location, description } = venue;

  const onChange = e =>
    setVenue({
      ...venue,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();

    console.log(`Submitted the form with `, venue);

    return false;
  };

  return (
    <Form id={formId} onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='location'>Location</Form.Label>
        <Form.Control
          type='text'
          name='location'
          value={location}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='venue-description'>Venue Description</Form.Label>
        <Form.Control
          as='textarea'
          name='venue-description'
          value={description}
          onChange={onChange}
          rows={4}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default VenueForm;
