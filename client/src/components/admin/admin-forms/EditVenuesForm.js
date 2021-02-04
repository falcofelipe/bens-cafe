import React from 'react';
import Form from 'react-bootstrap/Form';

const EditVenuesForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor='edit-venues'>
          Which venue would you like to edit?
        </Form.Label>
        <Form.Control as='select' name='edit-venues'>
          <option value=''>St. Kilda Rd.</option>
          <option value=''>Toorak Rd.</option>
          <option value=''>High St.</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='title'>Location</Form.Label>
        <Form.Control type='text' name='title' />
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

export default EditVenuesForm;
