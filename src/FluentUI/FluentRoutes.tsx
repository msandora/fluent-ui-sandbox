import * as React from 'react';
import { Route } from 'react-router-dom';
//Components
import LayoutFluent from './Components/Layout/Layout';
import { TalentDashboard } from './Components/Talent/TalentDashboard';
import { ExampleBase } from './Components/Example/ExampleBase.base';

const FluentRoutes: React.FC = () => {
  return (
      <LayoutFluent>
        <Route exact path={'/fluent/testing'} component={ExampleBase} />
        <Route
          exact
          path={['/fluent/users', '/fluent/']}
          component={TalentDashboard}
        />
      </LayoutFluent>
  );
};

export default FluentRoutes;
