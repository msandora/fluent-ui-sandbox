import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './App/HomePage/HomePage';
import NorthstarRoutes from './Northstar/NorthstarRoutes';
import FluentRoutes from './FluentUI/FluentRoutes';

export const App = () => {
  return (
    <Fragment>
      <Route exact path={'/'} component={HomePage} />
      <Route
        path='/northstar'
        render={() => (
          <Fragment>
            <Switch>
              <NorthstarRoutes />
            </Switch>
          </Fragment>
        )}
      />
      <Route
        path='/fluent'
        render={() => (
          <Fragment>
            <Switch>
              <FluentRoutes />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
