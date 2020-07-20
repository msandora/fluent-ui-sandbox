import React, { Component } from 'react';
import { Text } from '@fluentui/react-northstar';

interface IPanelDemoProps {
  panelName: string;
  paragraph?: string;
}

class PanelDemo extends Component<IPanelDemoProps, {}> {
  selectPanel = (panelName: string) => {
    switch (this.props.panelName) {
      case 'panel1':
        return <Text content='Panel1' />;
      case 'panel2':
        return <Text content='Panel2' />;
      default:
        return <Text content={this.props.paragraph} />;
    }
  };

  render() {
    const { panelName } = this.props;
    let themepick = panelName !== undefined ? 'panel1' : 'panel2';
    
    return this.selectPanel(themepick);
  }
}

export default PanelDemo;
