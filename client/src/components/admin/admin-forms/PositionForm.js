import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useCareers } from '../../../context/careers/CareersState';

const PositionForm = props => {
  const careersState = useCareers()[0];
  // const { loading } = careersState;

  let initialState, formId;
  let action = 'add';

  if (props.state) {
    action = props.state.action;
    initialState = props.state.position;
    formId = `position-form-${initialState._id}`;
  } else {
    initialState = {
      title: '',
      type: 'full-time',
      venue: 'St. Kilda Rd.',
      description: '',
    };
    formId = 'position-form-add';
  }

  const [position, setPosition] = useState(initialState);

  let { title, type, venue, description } = position;

  const onChange = e =>
    setPosition({
      ...position,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();

    console.log(`Submitted the form with `, position);

    return false;
  };

  return (
    <Form id={formId} onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='title'>Title</Form.Label>
        <Form.Control
          type='text'
          name='title'
          value={title}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='type'>Job Type</Form.Label>
        <Form.Control as='select' name='type' value={type} onChange={onChange}>
          <option value='full-time'>Full-time</option>
          <option value='part-time'>Part-time</option>
          <option value='contract'>Contract</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='venue'>Venue</Form.Label>
        <Form.Control
          as='select'
          name='venue'
          value={venue}
          onChange={onChange}>
          <option value='St. Kilda Rd.'>St. Kilda Rd.</option>
          <option value='Toorak Rd.'>Toorak Rd.</option>
          <option value='High St.'>High St.</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='description'>Description</Form.Label>
        <Form.Control
          as='textarea'
          name='description'
          value={description}
          onChange={onChange}
          rows={4}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PositionForm;
