import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const About = ({ about, loading }) => {
	return (
		<Container fluid>
			<section id='about' className='bg-primary row'>
				<div className='col-md-5 py-md-5 py-3 px-md-5 px-3 mx-0 text-center align-self-center bg-primary'>
					<Container>
						{loading || !about ? (
							<div className='text-center'>
								<Spinner animation='border' />
							</div>
						) : (
							<span>
								<h5 className='lead pb-4 pt-3'>
									{about.catchphrase}
								</h5>
								<p>{about.main}</p>
							</span>
						)}
					</Container>
				</div>
				<div
					className='col-md-7 mx-0 position-relative'
					id='home-secondary'>
					<div className='primary-light-overlay'></div>
				</div>
			</section>
		</Container>
	);
};

export default About;
