import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import {
	useCareers,
	getPositions,
} from '../../../context/careers/CareersState';

const PositionsTable = ({ recent, shortened }) => {
	const [careersState, careersDispatch] = useCareers();
	const { positions, loading } = careersState;

	useEffect(() => {
		getPositions(careersDispatch);
	}, [careersDispatch]);

	let positionsFiltered, shortenDescription;

	/*let posId = positions.indexOf(
		positions.find(
			(pos) => pos._id === position._id
		)
	);*/

	// Sorts the positions by most recent
	if (!loading && positions) {
		positionsFiltered = positions.slice().reverse();
		if (recent) {
			positionsFiltered = positionsFiltered.slice(0, recent); //Gets the most recent pos.
		}

		shortenDescription = (description) => {
			let descriptionArray, maxLength, joinStr;
			if (description.includes(' ')) {
				descriptionArray = description.split(' ');
				maxLength = 11;
				joinStr = ' ';
			} else {
				descriptionArray = description.split('');
				maxLength = 51;
				joinStr = '';
			}
			const descriptionString = descriptionArray
				.slice(0, maxLength)
				.join(joinStr);
			return descriptionArray.length > maxLength
				? descriptionString + ' ...'
				: descriptionString;
		};
	}

	return loading || !positions ? (
		<div className='text-center my-2'>
			<Spinner animation='border' className='text-center' />
		</div>
	) : (
		<table id='positions-table' className='table table-striped'>
			<thead className='thead-dark'>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Type</th>
					<th>Venue</th>
					<th>Description</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{positionsFiltered.map((position, idx) => (
					<tr key={idx}>
						<td>{idx + 1}</td>
						<td>{position.title}</td>
						<td>{position.type}</td>
						<td>
							{position.venue
								? position.venue.location
								: 'Loading...'}
						</td>
						<td>
							{position.description && shortened
								? shortenDescription(position.description)
								: position.description}
						</td>
						<td>
							<Link
								to={`/admin/positions/edit/${idx}`}
								state={{
									position,
									action: 'edit',
									previousPath: window.location.pathname,
								}}
								className='btn btn-accent btn-sm'>
								<i className='fas fa-angle-double-right'></i>{' '}
								More
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default PositionsTable;
