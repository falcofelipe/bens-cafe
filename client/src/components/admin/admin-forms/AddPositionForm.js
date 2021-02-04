import React from 'react';
import Form from 'react-bootstrap/Form';

const AddPositionForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor='title'>Title</Form.Label>
        <Form.Control type='text' name='title' />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='type'>Job Type</Form.Label>
        <Form.Control as='select' name='type'>
          <option value=''>Full-time</option>
          <option value=''>Part-time</option>
          <option value=''>Contract</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='venues'>Venues</Form.Label>
        <Form.Control as='select' name='venues'>
          <option value=''>St. Kilda Rd.</option>
          <option value=''>Toorak Rd.</option>
          <option value=''>High St.</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='description'>Description</Form.Label>
        <Form.Control as='textarea' name='description' rows={4}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default AddPositionForm;
