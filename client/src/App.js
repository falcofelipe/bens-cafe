import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shared from './components/layout/Shared';
import Home from './components/pages/Home';
import Careers from './components/pages/Careers';
import Footer from './components/layout/Footer';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import PrivateRoute from './components/routing/PrivateRoute';
import AdminPanel from './components/admin/AdminPanel';

import CareersState from './context/careers/CareersState';
import HomeState from './context/home/HomeState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './assets/scss/custom.scss';

function App() {
	return (
		<Fragment>
			<AuthState>
				<HomeState>
					<CareersState>
						<AlertState>
							<Router>
								<Routes>
									<Route
										path='/admin/*'
										element={
											<PrivateRoute>
												<AdminPanel />
											</PrivateRoute>
										}
									/>
									<Route path='/' element={<Shared />}>
										<Route path='' element={<Home />} />
										<Route
											path='careers'
											element={<Careers />}
										/>
										<Route
											path='login'
											element={<Login />}
										/>
										<Route
											path='register'
											element={<Register />}
										/>
									</Route>
									<Route
										path='/gg/careers'
										element={<Careers />}
									/>
								</Routes>
							</Router>
						</AlertState>
					</CareersState>
				</HomeState>
			</AuthState>
		</Fragment>
	);
}

export default App;
