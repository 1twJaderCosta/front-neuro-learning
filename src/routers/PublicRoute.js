import React from 'react';
import { Route } from 'react-router-dom';


const PublicRoute = ({
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

export default PublicRoute;