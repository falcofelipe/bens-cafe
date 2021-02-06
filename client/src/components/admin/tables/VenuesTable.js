import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useHome } from '../../../context/home/HomeState';

const VenuesTable = ({ shortened }) => {
  const homeState = useHome()[0];
  const { venues, loading } = homeState;

  const shortenDescription = description => {
    const descriptionArray = description.split(' ');
    const descriptionString = descriptionArray.slice(0, 6).join(' ');
    return descriptionString + ' ...';
  };

  return loading || !venues ? (
    <div className='text-center my-2'>
      <Spinner animation='border' className='text-center' />
    </div>
  ) : (
    <table id='venues-table' className='table table-striped'>
      <thead className='thead-dark'>
        <tr>
          <th>#</th>
          <th>Location</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {venues.map((venue, idx) => (
          <tr key={venue._id}>
            <td>{idx + 1}</td>
            <td>{venue.location}</td>
            <td>
              {shortened
                ? shortenDescription(venue.description)
                : venue.description}
            </td>
            <td>
              <Link
                to={{
                  pathname: `/admin/venues/${idx + 1}`,
                  state: {
                    venue,
                    action: 'edit',
                  },
                }}
                className='btn btn-accent btn-sm'>
                <i className='fas fa-angle-double-right'></i> More
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VenuesTable;
