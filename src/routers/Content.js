import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute.js';
import PrivateRoute from './PrivateRoute';
import ROUTES from './routes';

import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

const Content = () => (
    <Switch>
        <PrivateRoute path={ROUTES.HOME} component={HomePage} exact />
        
        <PublicRoute path={ROUTES.HOME} component={HomePage} exact />

        <PublicRoute path={ROUTES.NOT_FOUND} component={NotFoundPage}/>
    </Switch>
);

export default Content;
