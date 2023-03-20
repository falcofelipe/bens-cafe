import React, { useEffect } from 'react';

import PrivateRoute from '../routing/PrivateRoute';
import { useAuth } from '../../context/auth/AuthState';

import Sidebar from './admin-layout/Sidebar';
import AdmNavbar from './admin-layout/AdmNavbar';
import Modals from './admin-layout/Modals';
import Dashboard from './admin-pages/Dashboard';
import HomeContent from './admin-pages/HomeContent';
import Positions from './admin-pages/Positions';
import More from './admin-pages/More';
import Footer from '../layout/Footer';

import { Routes, Route } from 'react-router-dom';

const AdminPanel = (props) => {
	return (
		<div className='wrapper'>
			<Sidebar />
			<div id='admin-main' className='w-100' style={{ height: '100vh' }}>
				<AdmNavbar />
				<Modals />
				<div id='admin-content'>
					<Routes>
						<Route
							path=''
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path='home'
							element={
								<PrivateRoute>
									<HomeContent />
								</PrivateRoute>
							}
						/>
						<Route
							path='about/edit'
							element={
								<PrivateRoute>
									<More action={'edit'} />
								</PrivateRoute>
							}
						/>
						<Route
							path='venues/edit/:id'
							element={
								<PrivateRoute>
									<More action={'edit'} />
								</PrivateRoute>
							}
						/>
						<Route
							path='positions'
							element={
								<PrivateRoute>
									<Positions />
								</PrivateRoute>
							}
						/>
						<Route
							path='positions/edit/:id'
							element={
								<PrivateRoute>
									<More action={'edit'} />
								</PrivateRoute>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default AdminPanel;
