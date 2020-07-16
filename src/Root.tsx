import * as React from 'react';
import { Fragment } from 'react';

import { getTheme, loadTheme } from '@uifabric/styling';
import {
  Provider,
  mergeThemes,
  teamsHighContrastTheme,
  teamsTheme,
} from '@fluentui/react-northstar';
import { theme } from './Theme/theme';
import { ColorSchemeExample } from './Components/Test/ColorSchemeExample';

// loadTheme({
//   palette: {
//     themePrimary: 'red',
//     themeLighterAlt: 'white',
//     themeLighter: 'blue',
//   },
// });

class Root extends React.Component {
  private theme = getTheme();

  public render() {
    console.log("theme", theme)
    return (
      <Fragment>
        <Provider theme={mergeThemes(teamsTheme, theme)}>
          <div className='App'>
            <h1 style={{ color: this.theme.palette.themePrimary }}>
              themePrimary
            </h1>
            <h1 style={{ color: this.theme.palette.themeSecondary }}>
              themeSecondary
            </h1>
            <h1 style={{ color: this.theme.palette.themeTertiary }}>
              themeTertiary
            </h1>
            <h1 style={{ color: this.theme.palette.themeDark }}>themeDark</h1>
          </div>
        </Provider>
        <Provider theme={mergeThemes(teamsHighContrastTheme, theme)}>
          <div className='App'>
            <h1 style={{ color: this.theme.palette.themePrimary }}>
              themePrimary
            </h1>
            <h1 style={{ color: this.theme.palette.themeSecondary }}>
              themeSecondary
            </h1>
            <h1 style={{ color: this.theme.palette.themeTertiary }}>
              themeTertiary
            </h1>
            <h1 style={{ color: this.theme.palette.themeDark }}>themeDark</h1>
          </div>
        </Provider>
        <ColorSchemeExample/>
      </Fragment>
    );
  }
}
export default Root;
