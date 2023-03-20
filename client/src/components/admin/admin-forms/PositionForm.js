import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {
	useCareers,
	addNewPosition,
	updatePosition,
} from '../../../context/careers/CareersState';
import { useHome } from '../../../context/home/HomeState';

const PositionForm = ({ paramsID, action, previousPath }) => {
	const [careersState, careersDispatch] = useCareers();
	const homeState = useHome()[0];
	const { venues } = homeState;

	const navigate = useNavigate();
	const { state } = useLocation();
	const index = useParams().id;

	let initialState, formId;

	if (state) {
		initialState = state.position;
		formId = `position-form-${paramsID ?? initialState._id}`;
	} else if (index) {
		initialState = careersState.positions[index];
		console.log('Initial State:', initialState);
		formId = `position-form-${paramsID ?? initialState._id}`;
	} else {
		initialState = {
			title: '',
			type: 'full-time',
			venue: venues[0],
			description: '',
		};
		formId = 'position-form-add';
	}

	const [position, setPosition] = useState(initialState);

	let { title, type, description } = position;

	const onChange = (e) =>
		setPosition({
			...position,
			[e.target.name]: e.target.value,
		});

	const onChangeVenue = (e) => {
		setPosition({
			...position,
			venue: venues.filter((venue) => venue._id === e.target.value)[0],
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (action === 'add') {
			addNewPosition(careersDispatch, position);
			navigate(0);
		} else if (action === 'edit') {
			updatePosition(careersDispatch, position);
			if (state?.previousPath) navigate(state.previousPath);
			else navigate('admin', { replace: true });
		}

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
				<Form.Control
					as='select'
					name='type'
					value={type}
					onChange={onChange}>
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
					value={position.venue._id}
					onChange={onChangeVenue}>
					{venues.map((venue) => (
						<option value={venue._id} key={venue._id}>
							{venue.location}
						</option>
					))}
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
