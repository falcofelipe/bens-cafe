import React from 'react';
import Container from 'react-bootstrap/Container';

const Showcase = (props) => {
	return (
		<section id='home-showcase'>
			<div className='text-primary py-5 h-100'>
				<Container>
					<div className='text-center'>
						<h1 className='display-2'>Ben's Café</h1>
						<p className='lead'>
							A minimalist approach to modern cafés
						</p>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Showcase;
