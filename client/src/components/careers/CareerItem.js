import React from 'react';

import Button from 'react-bootstrap/Button';

const CareerItem = ({ position }) => {
  const { title, venue, type, description } = position;

  return (
    <li className='list-group-item bg-primary p-4 py-md-3'>
      <strong>
        {title} @ {venue.location}
      </strong>
      {/* Capitalizes the job type string */}
      <i> {type.slice(0, 1).toUpperCase() + type.slice(1)} </i>
      <p>{description}</p>
      <div className='text-center'>
        <Button variant='accent'>Apply for this position</Button>
      </div>
    </li>
  );
};

export default CareerItem;
