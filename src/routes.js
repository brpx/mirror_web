import React from 'react';
import { Route } from 'react-router';

// views
import Weather from './weather';
import Soccer from './soccer';
import TimeLeftTo from './timeleftto';
import News from './news';
import Homepage from './homepage';

const routes = (
  <Route>
    <Route path="/" component={Homepage} />
    <Route path="/weather(/:city)" component={Weather} />
    <Route path="/timeleft(/:date)(/:label)" component={TimeLeftTo} />
    <Route path="/news(/:source)" component={News} />
    <Route path="/soccer" component={Soccer} />
  </Route>
);

export {
   routes as default,
};
