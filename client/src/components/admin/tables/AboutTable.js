import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useHome } from '../../../context/home/HomeState';

const AboutTable = ({ shortened }) => {
  const homeState = useHome()[0];
  const { about, loading } = homeState;

  const shortenDescription = description => {
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
          <td>{shortened ? shortenDescription(about.main) : about.main}</td>
          <td>
            <a href='/admin/about/1' className='btn btn-accent btn-sm'>
              <i className='fas fa-angle-double-right'></i> More
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AboutTable;
