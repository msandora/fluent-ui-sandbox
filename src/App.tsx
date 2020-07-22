import * as React from 'react';
import { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './App/HomePage/HomePage';
import NorthstarRoutes from './Northstar/NorthstarRoutes';
import FluentRoutes from './FluentUI/FluentRoutes';
//import ModalManager from './Northstar/Components/Modals/ModalManager';

class App extends Component {
  render() {
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
  }
}

export default App;
