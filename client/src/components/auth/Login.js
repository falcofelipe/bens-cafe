import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alerts from '../layout/Alerts';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAuth, loginUser, clearErrors } from '../../context/auth/AuthState';
import {
	useAlert,
	setAlert,
	clearAlerts,
} from '../../context/alert/AlertState';

const Login = (props) => {
	const [authState, authDispatch] = useAuth();
	const alertDispatch = useAlert()[1];

	const { error, isAuthenticated } = authState;

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}

		if (error) {
			setAlert(alertDispatch, error, 'danger');
			clearErrors(authDispatch);
		}
	}, [isAuthenticated, navigate, error, alertDispatch, authDispatch]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		clearAlerts(alertDispatch);

		if (email === '' || password === '') {
			setAlert(alertDispatch, 'Please fill in all fields', 'danger');
		} else {
			loginUser(authDispatch, {
				email,
				password,
			});
		}
	};

	return (
		<div className='auth' id='login-form'>
			<div className='primary-overlay'>
				<Container className='px-4 mt-4 h-100 w-100'>
					<div className='d-flex align-items-center h-100 w-100'>
						<div className='align-self-center bg-primary px-5 pt-4 pb-5 rounded w-100'>
							<Alerts />
							<h1>
								Account{' '}
								<span className='text-accent'>Login</span>
							</h1>
							<Form onSubmit={onSubmit}>
								<Form.Group>
									<Form.Label>Email address:</Form.Label>
									<Form.Control
										type='email'
										name='email'
										value={email}
										onChange={onChange}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Password:</Form.Label>
									<Form.Control
										type='password'
										name='password'
										value={password}
										onChange={onChange}
									/>
								</Form.Group>
								<Button variant='accent' type='submit'>
									Submit
								</Button>
							</Form>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Login;
