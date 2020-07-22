import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Provider,
  // mergeThemes,
  //teamsDarkTheme,
  teamsTheme,
  Button,
} from '@fluentui/react-northstar';
import { Segment } from '@fluentui/react-northstar';
import TestComponent from '../TestArea/TestComponent';

const HomePage = () => {
  return (
    <Provider theme={teamsTheme}>
      <Button
        as={NavLink}
        to='/northstar'
        content='Northstar UI Example'
        iconPosition='before'
        text
      />
      <Button
        as={NavLink}
        to='/fluent'
        content='Fluent UI Example'
        iconPosition='before'
        text
      />
      <Segment
        content={<TestComponent />}
        styles={() => ({
          height: 'calc(100vh - 50px)',
        })}
      />
    </Provider>
  );
};

export default HomePage;
