import React from 'react';
import Form from 'react-bootstrap/Form';
import VenueForm from './VenueForm';

const VenuesForm = () => {
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
      <VenueForm />
    </Form>
  );
};

export default VenuesForm;
