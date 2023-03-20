import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useHome, updateVenue } from '../../../context/home/HomeState';

const VenueForm = ({ action, venueState }) => {
	const homeDispatch = useHome()[1];

	const loc = useLocation();
	const navigate = useNavigate();

	const initialState = loc.state
		? loc.state.venue
		: venueState
		? venueState
		: null;
	const [venue, setVenue] = useState(initialState);

	const formId = `venue-form-${action}`;

	useEffect(() => {
		setVenue(initialState);
	}, [initialState]);

	let { location, description } = venue;

	const onChange = (e) =>
		setVenue({
			...venue,
			[e.target.name]: e.target.value,
		});

	const onSubmit = (e) => {
		e.preventDefault();

		updateVenue(homeDispatch, venue);
		if (loc.state?.previousPath) {
			navigate(loc.state.previousPath);
		} else if (action === 'modal') {
			navigate(0);
		} else {
			navigate('admin', { replace: true });
		}

		return false;
	};

	return (
		<Form id={formId} onSubmit={onSubmit}>
			<Form.Group>
				<Form.Label htmlFor='location'>Location</Form.Label>
				<Form.Control
					type='text'
					name='location'
					value={location}
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor='description'>Venue Description</Form.Label>
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

export default VenueForm;
