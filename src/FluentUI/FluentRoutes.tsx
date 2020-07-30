import * as React from 'react';
import { Route } from 'react-router-dom';
//Components
import { Layout } from './Components/Layout/Layout';
import { Example } from './Components/Example/Example';
import { CommandBarButtonAsExample } from './Components/Test/CommandBarButtonAsExample';
import { TalentDashboard } from './Components/Talent/TalentDashboard';

const FluentRoutes: React.FC = () => {
  return (
    <Layout>
      <Route exact path={'/fluent/example'} component={Example} />
      <Route exact path={'/fluent/testing'} component={CommandBarButtonAsExample} />
      <Route
        exact
        path={['/fluent/users', '/fluent/']}
        component={TalentDashboard}
      />
    </Layout>
  );
};

export default FluentRoutes;
