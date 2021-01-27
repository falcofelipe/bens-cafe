import React from 'react';

import Button from 'react-bootstrap/Button';

const CareerItem = ({ position }) => {
  const { title, venue, type, description } = position;

  return (
    <li className='list-group-item bg-primary'>
      <strong>
        {title} @ {venue}
      </strong>
      <i> {type} icon </i>
      <p>{description}</p>
      <div className='text-center'>
        <Button variant='accent'>Apply for this position</Button>
      </div>
    </li>
  );
};

export default CareerItem;
