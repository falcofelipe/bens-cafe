import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useHome, updateVenue } from '../../../context/home/HomeState';

const VenueForm = props => {
  const [homeState, homeDispatch] = useHome();

  const initialState = props.state.venue;

  let formId = `venue-form-${initialState._id}`;

  const [venue, setVenue] = useState(initialState);

  useEffect(() => {
    setVenue(props.state.venue);
    formId = `venue-form-${props.state.venue._id}`;
  }, [props.state.venue]);

  let { location, description } = venue;

  const onChange = e =>
    setVenue({
      ...venue,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();

    updateVenue(homeDispatch, venue);
    if (props.history) {
      props.history.goBack();
    }

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
