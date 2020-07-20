import * as React from 'react';
import { Fragment } from 'react';
import PanelDemo from './App/TestArea/PanelDemo';


type RootProps = {
  panelName: string;
  paragraph?: string;
};

const Root: React.FunctionComponent<RootProps> = ({
  panelName = 'panel1',
  paragraph = 'Hello World',
}) => {
  return (
    <Fragment>
        <PanelDemo panelName={panelName} paragraph={paragraph} />
    </Fragment>
  );
};

export default Root;
