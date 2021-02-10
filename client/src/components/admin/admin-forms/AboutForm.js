import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useHome, updateAbout } from '../../../context/home/HomeState';

const AboutForm = props => {
  const [homeState, homeDispatch] = useHome();
  const { loading } = homeState;
  const aboutState = homeState.about;

  const { action } = props.state;

  const formId = `about-form-${action}`;

  const [about, setAbout] = useState({
    catchphrase: '',
    main: '',
  });

  useEffect(() => {
    if (!loading) {
      setAbout({
        catchphrase: aboutState.catchphrase,
        main: aboutState.main,
      });
    }
  }, [loading, aboutState]);

  let { catchphrase, main } = about;

  const onChange = e => setAbout({ ...about, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    updateAbout(homeDispatch, about);
    if (props.history) {
      props.history.goBack();
    }

    return false;
  };

  return (
    <Form id={formId} onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='catchphrase'>Catchphrase</Form.Label>
        <Form.Control
          type='text'
          name='catchphrase'
          value={catchphrase}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='main'>Main</Form.Label>
        <Form.Control
          as='textarea'
          name='main'
          value={main}
          onChange={onChange}
          rows={4}></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default AboutForm;
