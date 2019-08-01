import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Content from './routers/Content';

import './styles/index.scss';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Content />
    </Router>
  );
}

export default App;
