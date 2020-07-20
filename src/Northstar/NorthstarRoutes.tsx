import * as React from 'react';
import { Route } from 'react-router-dom';

import {
  Provider,
  mergeThemes,
  //teamsDarkTheme,
  teamsTheme,
} from '@fluentui/react-northstar';

import { UsersDashboard } from '../Northstar/Components/Users/UsersDashboard';
import LayoutNorthstar from '../Northstar/Components/Layout/Layout';
import { northStarTheme } from '../Northstar/Theme/theme';
import TestComponent from '../App/Test/TestComponent';


const NorthstarRoutes: React.FC = () => {
  return (
    <Provider theme={mergeThemes(teamsTheme, northStarTheme)}>
      <LayoutNorthstar>
        <Route exact path={'/northstar/testing'} component={TestComponent} />
        <Route
          exact
          path={['/northstar/users', '/northstar/']}
          component={UsersDashboard}
        />
      </LayoutNorthstar>
    </Provider>
  );
};

export default NorthstarRoutes;
