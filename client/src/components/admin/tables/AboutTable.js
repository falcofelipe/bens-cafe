import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useHome, getAbout } from '../../../context/home/HomeState';

const AboutTable = ({ shortened }) => {
	const [homeState, homeDispatch] = useHome();
	const { about, loading } = homeState;

	useEffect(() => {
		getAbout(homeDispatch);
	}, [homeDispatch]);

	const shortenDescription = (description) => {
		const descriptionArray = description.split(' ');
		const descriptionString = descriptionArray.slice(0, 8).join(' ');
		return descriptionString + ' ...';
	};

	return loading || !about ? (
		<div className='text-center my-2'>
			<Spinner animation='border' className='text-center' />
		</div>
	) : (
		<table id='about-table' className='table table-striped'>
			<thead className='thead-dark'>
				<tr>
					<th>Catchphrase</th>
					<th>Main</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{about.catchphrase}</td>
					<td>
						{shortened && about.main
							? shortenDescription(about.main)
							: about.main}
					</td>
					<td>
						<Link
							to={`/admin/about/edit`}
							state={{
								about,
								action: 'edit',
								previousPath: window.location.pathname,
							}}
							className='btn btn-accent btn-sm'>
							<i className='fas fa-angle-double-right'></i> More
						</Link>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default AboutTable;
