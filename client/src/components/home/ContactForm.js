import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const { name, email, title, message } = form;

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    window.alert(
      "The form submission feature is not implemented because it's a portfolio project."
    );
  };

  return (
    <Form id='contact-form' onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='name'>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={name}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={email}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='title'>Title of message</Form.Label>
        <Form.Control
          type='text'
          name='title'
          value={title}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='message'>Message</Form.Label>
        <Form.Control
          as='textarea'
          name='message'
          value={message}
          onChange={onChange}
          rows={5}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
