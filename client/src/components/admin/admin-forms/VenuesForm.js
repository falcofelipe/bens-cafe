import React, { Fragment, useState } from 'react';
import { useHome } from '../../../context/home/HomeState';
import VenueForm from './VenueForm';

import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const VenuesForm = () => {
	const homeState = useHome()[0];
	const { venues, loading } = homeState;

	const [venue, setVenue] = useState(venues[0]);

	const onChangeVenue = (e) => {
		setVenue(venues.filter((venue) => venue._id === e.target.value)[0]);
	};

	return loading || !venues ? (
		<div className='text-center my-2'>
			<Spinner animation='border' className='text-center' />
		</div>
	) : (
		<Fragment>
			<Form>
				<Form.Group>
					<Form.Label htmlFor='edit-venues'>
						Which venue would you like to edit?
					</Form.Label>
					<Form.Group>
						<Form.Label htmlFor='venue'>Venue</Form.Label>
						<Form.Control
							as='select'
							name='venue'
							onChange={onChangeVenue}>
							{venues.map((venue) => (
								<option value={venue._id} key={venue._id}>
									{venue.location}
								</option>
							))}
						</Form.Control>
					</Form.Group>
				</Form.Group>
			</Form>
			{venue ? <VenueForm venueState={venue} action='modal' /> : null}
		</Fragment>
	);
};

export default VenuesForm;
