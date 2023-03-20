import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AboutForm from '../admin-forms/AboutForm';
import PositionForm from '../admin-forms/PositionForm';
import VenueForm from '../admin-forms/VenueForm';
import {
	useCareers,
	deletePosition,
} from '../../../context/careers/CareersState';

import Container from 'react-bootstrap/Container';

const More = ({ action }) => {
	const careersDispatch = useCareers()[1];

	const navigate = useNavigate();
	const params = useParams();

	let path = window.location.pathname;

	if (!action) {
		navigate('/admin');
		return null;
	}

	let form, formId, title;

	let includeDelete = false;

	if (path.includes('about')) {
		title = 'About';
		form = <AboutForm action={action} previousPath={path} />;
		formId = `about-form-${action}`;
	} else if (path.includes('position')) {
		title = 'Position';
		form = (
			<PositionForm
				paramsID={params.id}
				action={action}
				previousPath={path}
			/>
		);
		formId = `position-form-${params.id}`;
		includeDelete = true;
	} else if (path.includes('venue')) {
		title = 'Venue';
		form = <VenueForm action={action} previousPath={path} />;
		formId = `venue-form-${action}`;
	}

	const onDelete = (dispatch, id) => {
		let result = window.confirm(
			'Are you sure you want to delete this position?'
		);
		if (result) {
			deletePosition(dispatch, id);
			navigate('/admin/');
		}
	};

	return (
		<section id='edit-entry'>
			<Container>
				<div className='row'>
					<div className='col-xl-10 mx-auto pt-3 pb-4'>
						<div className='card mb-3 bg-light'>
							<div className='card-header d-flex justify-content-between'>
								<h4>{title}</h4>
								{includeDelete ? (
									<a
										href='#!'
										onClick={() =>
											onDelete(careersDispatch, params.id)
										}>
										<i className='fas fa-trash-alt text-danger my-auto mr-1 fa-lg' />
									</a>
								) : null}
							</div>
							<div className='card-body'>{form}</div>
							<div className='d-flex justify-content-between mx-3 mb-3'>
								<a href='/admin/' className='btn btn-secondary'>
									Cancel
								</a>
								<button
									type='submit'
									form={formId}
									className='btn btn-accent'>
									Save Changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default More;
