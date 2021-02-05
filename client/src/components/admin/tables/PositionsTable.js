import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useCareers } from '../../../context/careers/CareersState';

const PositionsTable = ({ recent, shortened }) => {
  const careersState = useCareers()[0];
  const { positions, loading } = careersState;

  // Sorts the positions by most recent
  let positionsFiltered = positions.reverse();
  if (recent) {
    positionsFiltered = positionsFiltered.slice(0, recent); //Gets the most recent pos.
  }

  const shortenDescription = description => {
    const descriptionArray = description.split(' ');
    const descriptionString = descriptionArray.slice(0, 11).join(' ');
    return descriptionString + ' ...';
  };

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
          <tr key={position._id}>
            <td>{idx + 1}</td>
            <td>{position.title}</td>
            <td>{position.type}</td>
            <td>{position.venue}</td>
            <td>
              {shortened
                ? shortenDescription(position.description)
                : position.description}
            </td>
            <td>
              <a href='#!' className='btn btn-accent btn-sm'>
                <i className='fas fa-angle-double-right'></i> Details
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PositionsTable;
