import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  mergeThemes,
  teamsDarkTheme,
  teamsTheme,
  Segment,
} from '@fluentui/react-northstar';
import { NavBar } from './Components/NavBar/NavBar';

import { UsersDashboard } from './Components/Users/UsersDashboard';
import Layout from './Components/Layout/Layout';
import { theme } from './Theme/theme';
import { ColorSchemeExample } from './Components/Test/ColorSchemeExample';

const App = () => {
  return (
    <Fragment>
      <Provider theme={mergeThemes(teamsTheme, theme)}>
        <Segment
          content={<NavBar />}
          inverted
          styles={({ theme: { siteVariables } }) => ({
            backgroundColor: siteVariables.colorScheme.brand.background2,
          })}
        />
        <Layout>
          <Switch>
            <Route path={'/'} component={UsersDashboard} />
            <Route path={'/testing'} component={ColorSchemeExample} />
          </Switch>
        </Layout>
      </Provider>
    </Fragment>
  );
};

export default App;
