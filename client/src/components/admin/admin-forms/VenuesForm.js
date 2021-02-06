import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import VenueForm from './VenueForm';

const VenuesForm = () => {
  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label htmlFor='edit-venues'>
            Which venue would you like to edit?
          </Form.Label>
          <Form.Control as='select' name='edit-venues'>
            <option value={1}>St. Kilda Rd.</option>
            <option value={2}>Toorak Rd.</option>
            <option value={3}>High St.</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <VenueForm />
    </Fragment>
  );
};

export default VenuesForm;
