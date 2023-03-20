import React, { useState } from 'react';
import PositionForm from '../admin-forms/PositionForm';
import AboutForm from '../admin-forms/AboutForm';
import VenuesForm from '../admin-forms/VenuesForm';

import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

const AdminModals = () => {
	const [show, setShow] = useState({
		positions: false,
		about: false,
		venues: false,
	});

	const hideModal = (modalName) => setShow({ ...show, [modalName]: false });
	const showModal = (modalName) => setShow({ ...show, [modalName]: true });

	const positionsButton = (
		<a
			href='#!'
			className='btn btn-primary btn-block'
			onClick={() => showModal('positions')}>
			<i className='fas fa-plus'></i> Add Position
		</a>
	);
	const aboutButton = (
		<a
			href='#!'
			className='btn btn-primary btn-block'
			onClick={() => showModal('about')}>
			<i className='fas fa-pencil-alt'></i> Update About
		</a>
	);
	const venuesButton = (
		<a
			href='#!'
			className='btn btn-primary btn-block'
			onClick={() => showModal('venues')}>
			<i className='fas fa-pencil-alt'></i> Update Venues
		</a>
	);

	// Generates the buttons according to the page
	let buttons;
	let path = window.location.pathname;
	let classes = 'bg-accent pt-3 pb-1';
	if (path.includes('home')) {
		buttons = (
			<div className='row'>
				<div className='col-sm-6 mb-2'>{aboutButton}</div>
				<div className='col-sm-6 mb-2'>{venuesButton}</div>
			</div>
		);
	} else if (path.includes('edit')) {
		buttons = <div className='row d-none'></div>;
		classes = 'd-none';
	} else if (path.includes('positions')) {
		buttons = (
			<div className='row'>
				<div className='col-sm-10 mb-2 mx-auto'>{positionsButton}</div>
			</div>
		);
	} else {
		buttons = (
			<div className='row'>
				<div className='col-sm-4 mb-2'>{positionsButton}</div>
				<div className='col-sm-4 mb-2'>{aboutButton}</div>
				<div className='col-sm-4 mb-2'>{venuesButton}</div>
			</div>
		);
	}

	return (
		<section id='modals' className={classes}>
			<Container>{buttons}</Container>

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
					<PositionForm action='add' />
				</Modal.Body>
				<Modal.Footer className='modal-footer'>
					<button
						type='submit'
						form='position-form-add'
						className='btn btn-accent'
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
					<AboutForm action='modal' />
				</Modal.Body>
				<Modal.Footer className='modal-footer'>
					<button
						type='submit'
						form='about-form-modal'
						className='btn btn-accent'
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
					<VenuesForm />
				</Modal.Body>
				<Modal.Footer className='modal-footer'>
					<button
						type='submit'
						form='venue-form-modal'
						className='btn btn-accent'
						onClick={() => hideModal('venues')}>
						Save Changes
					</button>
				</Modal.Footer>
			</Modal>
		</section>
	);
};

export default AdminModals;
