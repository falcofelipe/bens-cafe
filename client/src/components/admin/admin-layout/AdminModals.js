import React, { Fragment, useState } from 'react';
import AddPositionForm from '../admin-forms/AddPositionForm';
import EditAboutForm from '../admin-forms/EditAboutForm';
import EditVenuesForm from '../admin-forms/EditVenuesForm';

import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminModals = () => {
  const [show, setShow] = useState({
    positions: false,
    about: false,
    venues: false,
  });

  const hideModal = modalName => setShow({ ...show, [modalName]: false });
  const showModal = modalName => setShow({ ...show, [modalName]: true });

  return (
    <Fragment>
      <Container>
        <div className='row'>
          <div className='col-sm-4'>
            <a
              href='#!'
              className='btn btn-secondary btn-block'
              onClick={() => showModal('positions')}>
              <i className='fas fa-plus'></i> Add Position
            </a>
          </div>
          <div className='col-sm-4'>
            <a
              href='#!'
              className='btn btn-secondary btn-block'
              onClick={() => showModal('about')}>
              <i className='fas fa-pencil-alt'></i> Update About
            </a>
          </div>
          <div className='col-sm-4'>
            <a
              href='#!'
              className='btn btn-secondary btn-block'
              onClick={() => showModal('venues')}>
              <i className='fas fa-pencil-alt'></i> Update Venues
            </a>
          </div>
        </div>
      </Container>

      {/* Add Position Modal */}
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
          <AddPositionForm />
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <button
            className='btn btn-primary'
            onClick={() => hideModal('positions')}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* Edit About Modal */}
      <Modal
        show={show.about}
        size='lg'
        className='modal fade'
        id='editAboutModal'
        onHide={() => hideModal('about')}>
        <Modal.Header className='bg-primary text-black' closeButton>
          <h5 className='modal-title'>Edit About Section</h5>
        </Modal.Header>
        <Modal.Body>
          <EditAboutForm />
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <button
            className='btn btn-primary'
            onClick={() => hideModal('about')}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* Edit Venues Modal */}
      <Modal
        show={show.venues}
        size='lg'
        className='modal fade'
        id='editVenuesModal'
        onHide={() => hideModal('venues')}>
        <Modal.Header className='bg-primary text-black' closeButton>
          <h5 className='modal-title'>Edit Venues Section</h5>
        </Modal.Header>
        <Modal.Body>
          <EditVenuesForm />
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <button
            className='btn btn-primary'
            onClick={() => hideModal('venues')}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default AdminModals;
