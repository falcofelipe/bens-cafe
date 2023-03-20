import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import venue1 from '../../assets/img/venue1.jpg';
import venue2 from '../../assets/img/venue2.jpg';
import venue3 from '../../assets/img/venue3.jpg';

const Venues = ({ venues, loading }) => {
	return (
		<section id='venues' className='bg-secondary py-5'>
			<Container>
				<h3 className='text-center text-primary pb-4'>Our Venues</h3>
				<div className='row'>
					{loading || !venues ? (
						<div className='text-center mx-auto'>
							<Spinner animation='border' />
						</div>
					) : (
						venues.map((venue, idx) => (
							<div className='col-md-4' key={venue._id}>
								<div className='card bg-primary mb-4 mb-md-0'>
									<img
										src={
											idx === 0
												? venue1
												: idx === 1
												? venue2
												: venue3
										}
										alt=''
										className='card-img-top'
									/>
									<div className='card-body text-center'>
										<p className='lead'>{venue.location}</p>
										<p>{venue.description}</p>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</Container>
		</section>
	);
};

export default Venues;
