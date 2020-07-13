import { getTheme, loadTheme } from '@uifabric/styling';
import * as React from 'react';

loadTheme(
  {
    palette: {
      "themePrimary": "#1490ef",
      "themeLighterAlt": "#f5fafe",
      "themeLighter": "#d7ecfd"
    }
  }
);

class Root extends React.Component {
  private theme = getTheme();

  public render() {
    return (
      <div className="App">
        <h1 style={\{color: this.theme.palette.themePrimary} }>It works</h1>
      </div>
    );
  }
}
export default Root;