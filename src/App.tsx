import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  mergeThemes,
  teamsDarkTheme,
  teamsTheme,
} from '@fluentui/react-northstar';

import { UsersDashboard } from './Components/Users/UsersDashboard';
import Layout from './Components/Layout/Layout';
import { theme } from './Theme/theme';
import { ColorSchemeExample } from './Components/Test/ColorSchemeExample';
import TestComponent from './Components/Test/TestComponent';

//import PanelDemo from './Components/Test/PanelDemo';


const App = () => {
  return (
    <Fragment>
      <Provider theme={mergeThemes(teamsDarkTheme, theme)}>
        <Layout>
          <Switch>
            <Route path={'/testing'} component={ColorSchemeExample} />
            <Route path={'/users'} component={UsersDashboard} />
            <Route exact path={'/'} component={TestComponent} />
          </Switch>
        </Layout>
      </Provider>
    </Fragment>
  );
};

export default App;
