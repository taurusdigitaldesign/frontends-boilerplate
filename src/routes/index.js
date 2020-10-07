
import React from 'react';
import { Route } from 'react-router-dom';
import routeConfig from './config';

export default () => routeConfig
  .map((route, i) => (
    <Route 
      exact 
      key={i} 
      path={route.path} 
      component={require('~/' + route.component).default} 
    />
  ))
  