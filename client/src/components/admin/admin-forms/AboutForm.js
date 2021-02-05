import React from 'react';
import Form from 'react-bootstrap/Form';

const EditAboutForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor='catchphrase'>Catchphrase</Form.Label>
        <Form.Control type='text' name='catchphrase' />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='main'>Main</Form.Label>
        <Form.Control as='textarea' name='main' rows={4}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default EditAboutForm;
