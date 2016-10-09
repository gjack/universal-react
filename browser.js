import React from 'react';
import {render} from 'react-dom';
import {match, Router, browserHistory} from 'react-router';
import routes from './app/routes';

match({history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
  <Router {...renderProps}>{routes}</Router>, document.getElementById('root'))
});
