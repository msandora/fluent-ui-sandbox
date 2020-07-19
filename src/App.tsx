import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Provider,
  mergeThemes,
  //teamsDarkTheme,
  teamsTheme,
} from '@fluentui/react-northstar';

import { Customizer, getTheme } from '@fluentui/react';
import {
  //ExcelTheme,
  loadExcelTheme,
} from './FluentUI/Theme/excel.theme';

import HomePage from './App/HomePage/HomePage';
import { TalentDashboard } from './FluentUI/Components/Talent/TalentDashboard';

import { UsersDashboard } from './Northstar/Components/Users/UsersDashboard';
import LayoutNorthstar from './Northstar/Components/Layout/Layout';
import LayoutFluent from './FluentUI/Components/Layout/Layout';
import { northStarTheme } from './Northstar/Theme/theme';
// import { ColorSchemeExample } from './App/Test/ColorSchemeExample';
import TestComponent from './App/Test/TestComponent';

//import Template from './App/Test/Template';

const App = () => {
  return (
    <Fragment>
      <Route exact path={'/'} component={HomePage} />
      <Route
        path='/northstar'
        render={() => (
          <Fragment>
            <Switch>
              <Provider theme={mergeThemes(teamsTheme, northStarTheme)}>
                <LayoutNorthstar>
                  <Route
                    exact
                    path={'/northstar/testing'}
                    component={TestComponent}
                  />
                  <Route
                    exact
                    path={['/northstar/users', '/northstar/']}
                    component={UsersDashboard}
                  />
                </LayoutNorthstar>
              </Provider>
            </Switch>
          </Fragment>
        )}
      />

      <Route
        path='/fluent'
        render={() => (
          <Fragment>
            <Switch>
              <Customizer {...loadExcelTheme}>
                <LayoutFluent>
                  <Route exact path={'/fluent'} component={TalentDashboard} />
                </LayoutFluent>
                <div
                  className='TEST'
                  style={{
                    backgroundColor: getTheme().semanticColors.bodyBackground,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: -1000,
                  }}
                ></div>
              </Customizer>
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
