import * as React from 'react';
import { Route } from 'react-router-dom';
//Components
import LayoutFluent from '../FluentUI/Components/Layout/Layout';
import { TalentDashboard } from '../FluentUI/Components/Talent/TalentDashboard';

const FluentRoutes: React.FC = () => {
  return (
      <LayoutFluent>
        <Route exact path={'/fluent/testing'} component={TalentDashboard} />
        <Route
          exact
          path={['/fluent/users', '/fluent/']}
          component={TalentDashboard}
        />
      </LayoutFluent>
  );
};

export default FluentRoutes;
