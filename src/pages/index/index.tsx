import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from '../../routes';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Routes />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
