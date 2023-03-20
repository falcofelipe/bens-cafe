import React, { Fragment, useState } from 'react';
import ContactForm from './ContactForm';

import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Contact = () => {
	const [show, setShow] = useState(false);

	const hideModal = () => setShow(false);
	const showModal = () => setShow(true);

	return (
		<Fragment>
			<section id='contact' className='bg-primary'>
				<Container fluid>
					<div className='row py-5'>
						<div className='col-xl-4 col-lg-3 d-sm-hidden'></div>
						<div className='col-xl-2 col-lg-3 text-center'>
							<h2>Any doubts?</h2>
						</div>
						<div className='col-xl-2 col-lg-3 text-center'>
							<Button
								variant='accent'
								className='btn-lg'
								onClick={showModal}>
								Contact Us!
							</Button>
						</div>
						<div className='col-xl-4 col-lg-3 d-sm-hidden'></div>
					</div>
				</Container>
			</section>

			<Modal
				show={show}
				size='lg'
				className='modal fade'
				id='contact-modal'
				onHide={hideModal}>
				<Modal.Header className='bg-primary text-black' closeButton>
					<h5 className='modal-title'>Contact Us</h5>
				</Modal.Header>
				<Modal.Body>
					<ContactForm />
				</Modal.Body>
				<Modal.Footer className='modal-footer'>
					<button
						type='submit'
						form='contact-form'
						className='btn btn-accent'
						onClick={hideModal}>
						Send Form
					</button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

export default Contact;
