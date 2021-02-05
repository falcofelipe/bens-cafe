import React from 'react';
import Form from 'react-bootstrap/Form';

const VenueForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor='venue-loc'>Location</Form.Label>
        <Form.Control type='text' name='venue-loc' />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='venue-description'>Venue Description</Form.Label>
        <Form.Control
          as='textarea'
          name='venue-description'
          rows={4}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default VenueForm;
