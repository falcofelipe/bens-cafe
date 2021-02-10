import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthState';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authState = useAuth()[0];
  const { isAuthenticated, loading } = authState;

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <div className='text-center my-2'>
            <Spinner animation='border' className='text-center' />
          </div>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
