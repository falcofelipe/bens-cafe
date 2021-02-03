import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminDashboard = () => {
  const [show, setShow] = useState({
    positions: false,
    about: false,
    venues: false,
  });

  const hideModal = modalName => setShow({ ...show, [modalName]: false });
  const showModal = modalName => setShow({ ...show, [modalName]: true });

  return (
    <Fragment>
      <section id='actions' className='pt-4 pb-5 bg-light'>
        <Container>
          <div className='row'>
            <div className='col-sm-4'>
              <a
                href='#!'
                className='btn btn-primary btn-block'
                onClick={() => showModal('positions')}>
                <i className='fas fa-plus'></i> Add Position
              </a>
            </div>
            <div className='col-sm-4'>
              <a
                href='#!'
                className='btn btn-primary btn-block'
                onClick={() => showModal('about')}>
                <i className='fas fa-pencil-alt'></i> Update About
              </a>
            </div>
            <div className='col-sm-4'>
              <a
                href='#!'
                className='btn btn-primary btn-block'
                onClick={() => showModal('venues')}>
                <i className='fas fa-pencil-alt'></i> Update Venues
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Modal
        show={show.positions}
        size='lg'
        className='modal fade'
        id='addPositionModal'
        onHide={() => hideModal('positions')}>
        <Modal.Header className='bg-primary text-black' closeButton>
          <h5 className='modal-title'>Add New Position</h5>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Control
                as='textarea'
                name='description'
                rows={4}></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <button
            className='btn btn-primary'
            onClick={() => hideModal('positions')}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default AdminDashboard;
