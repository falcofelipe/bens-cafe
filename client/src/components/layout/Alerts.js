import React from 'react';
import { useAlert } from '../../context/alert/AlertState';

const Alerts = () => {
  const alertState = useAlert()[0];

  const { alerts } = alertState;

  return alerts.length > 0
    ? alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.message}
        </div>
      ))
    : null;
};

export default Alerts;
