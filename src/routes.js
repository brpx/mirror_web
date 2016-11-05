import React from 'react';
import { Route } from 'react-router';

// views
import Weather from './weather';
import Soccer from './soccer';
import Homepage from './homepage';

const routes = (
  <Route>
    <Route path="/" component={Homepage} />
    <Route path="/weather" component={Weather} />
    <Route path="/soccer" component={Soccer} />
  </Route>
);

export {
   routes as default,
};
