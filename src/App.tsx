import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  mergeThemes,
  // teamsHighContrastTheme,
  teamsTheme,
} from '@fluentui/react-northstar';
import { UsersDashboard } from './Components/Users/UsersDashboard';
import { Layout } from './Components/Layout/Layout';
import { theme } from './Theme/theme';
// import { ColorSchemeExample } from './Components/Test/ColorSchemeExample';

const App = () => {
  return (
    <Fragment>
      <Provider theme={mergeThemes(teamsTheme, theme)}>
        <Layout>
          <Switch>
            <Route path={'/'} component={UsersDashboard} />
          </Switch>
        </Layout>
      </Provider>
    </Fragment>
  );
};

export default App;
