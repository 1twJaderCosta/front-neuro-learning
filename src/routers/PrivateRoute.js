import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <React.Fragment>
      <Route
        {...rest}
        component={props => (
          <Component {...props} />
        )}
      />
    </React.Fragment>
  );
}

export default PrivateRoute;