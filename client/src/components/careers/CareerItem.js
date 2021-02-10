import React, { Fragment, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CareerItem = ({ position }) => {
  const { title, venue, type, description } = position;

  const [show, setShow] = useState(false);

  const hideModal = () => setShow(false);
  const showModal = () => setShow(true);

  return (
    <Fragment>
      <li className='list-group-item bg-primary p-4 py-md-3'>
        <strong>
          {title} @ {venue.location}
        </strong>
        {/* Capitalizes the job type string */}
        <i> {type.slice(0, 1).toUpperCase() + type.slice(1)} </i>
        <p>{description}</p>
        <div className='text-center'>
          <Button variant='accent' onClick={showModal}>
            Apply for this position
          </Button>
        </div>
      </li>

      <Modal
        show={show}
        size='lg'
        className='modal fade'
        id='job-application-modal'
        onHide={hideModal}>
        <Modal.Header className='bg-primary text-black' closeButton>
          <h5 className='modal-title'>Apply for this position now!</h5>
        </Modal.Header>
        <Modal.Body>
          <p>
            To apply for this position, send us your CV at our email{' '}
            <em>do_not_send_email@bens.com</em>{' '}
          </p>
          <p>
            <small>
              P.S.: This is a placeholder text, do not send any emails.
            </small>
          </p>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default CareerItem;
