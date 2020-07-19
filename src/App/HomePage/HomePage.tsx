import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Provider,
  // mergeThemes,
  //teamsDarkTheme,
  teamsTheme, Button
} from '@fluentui/react-northstar';

const HomePage = () => {
  return (
    <Provider theme={teamsTheme}>
      <Button
        as={NavLink}
        to='/northstar'
        content='Northstar UI'
        iconPosition='before'
        text
      />
      <Button
        as={NavLink}
        to='/fluent'
        content='Fluent UI'
        iconPosition='before'
        text
      />
    </Provider>
  );
};

export default HomePage;
