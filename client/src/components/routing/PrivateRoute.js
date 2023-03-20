import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthState';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
	const authState = useAuth()[0];
	const { isAuthenticated, loading } = authState;

	return loading ? (
		<div className='text-center my-2'>
			<Spinner animation='border' className='text-center' />
		</div>
	) : isAuthenticated ? (
		children
	) : (
		<Navigate to='/login' />
	);
};

export default PrivateRoute;
