import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import CareersContext from './careersContext';
import careersReducer from './careersReducer';

import {
	GET_POSITIONS,
	ADD_POSITION,
	UPDATE_POSITION,
	DELETE_POSITION,
	POSITION_ERROR,
} from '../types';

export const useCareers = () => {
	const { state, dispatch } = useContext(CareersContext);
	return [state, dispatch];
};

/*--------------------- ACTIONS -----------------------*/

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const getPositions = async (dispatch) => {
	try {
		const positions = await axios.get('/api/careers');

		dispatch({
			type: GET_POSITIONS,
			payload: positions.data,
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: POSITION_ERROR,
			payload: err.response.data.msg,
		});
	}
};

export const addNewPosition = async (dispatch, positionData) => {
	try {
		const newPos = await axios.post('/api/careers', positionData, config);

		dispatch({
			type: ADD_POSITION,
			payload: newPos.data,
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: POSITION_ERROR,
			payload: err.response.data.msg,
		});
	}
};

export const updatePosition = async (dispatch, updatedPosition) => {
	try {
		const position = await axios.put(
			`/api/careers/${updatedPosition._id}`,
			updatedPosition,
			config
		);

		dispatch({
			type: UPDATE_POSITION,
			payload: position.data,
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: POSITION_ERROR,
			payload: err.response.data.msg,
		});
	}
};

export const deletePosition = async (dispatch, positionId) => {
	try {
		await axios.delete(`/api/careers/${positionId}`);

		dispatch({
			type: DELETE_POSITION,
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: POSITION_ERROR,
			payload: err.response.data.msg,
		});
	}
};

/*--------------------- STATES -----------------------*/

const CareersState = (props) => {
	const initialState = {
		positions: [],
		loading: true,
		error: null,
	};

	const [state, dispatch] = useReducer(careersReducer, initialState);

	useEffect(() => {
		let mounted = true;
		const source = axios.CancelToken.source();

		const fetchPositions = async () => {
			try {
				const positionsRaw = await axios.get('/api/careers', {
					cancelToken: source.token, //Needed for the cancellation
				});

				return positionsRaw.data;
			} catch (error) {
				if (axios.isCancel(error)) {
				} else {
					console.error(error);
					console.error(error.response);
					console.error(error.response.data);

					dispatch({
						type: POSITION_ERROR,
						payload: error.response.data.msg,
					});
				}
			}
		};

		fetchPositions().then((positions) => {
			if (mounted && positions) {
				dispatch({
					type: GET_POSITIONS,
					payload: positions,
				});
			}
		});

		// Cleanup to prevent memory leaks
		return function cleanup() {
			source.cancel();
			mounted = false;
		};
	}, []);

	return (
		<CareersContext.Provider
			value={{
				state: state,
				dispatch,
			}}>
			{props.children}
		</CareersContext.Provider>
	);
};

export default CareersState;
