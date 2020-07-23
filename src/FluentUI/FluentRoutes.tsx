import * as React from 'react';
import { Route } from 'react-router-dom';
//Components
import { Layout } from './Components/Layout/Layout';
import { Example } from './Components/Example/Example';
import { TalentDashboard } from './Components/Talent/TalentDashboard';

const FluentRoutes: React.FC = () => {
  return (
    <Layout>
      <Route exact path={'/fluent/testing'} component={Example} />
      <Route
        exact
        path={['/fluent/users', '/fluent/']}
        component={TalentDashboard}
      />
    </Layout>
  );
};

export default FluentRoutes;
