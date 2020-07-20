//Not being used atm

import {
  mergeStyleSets,
  getTheme
} from '@fluentui/react/lib/Styling';
import { INavMenuStyleProps, INavMenuStyles } from './NavMenu.types';
const theme = getTheme();

export const navMenuStyles = mergeStyleSets({
  root: [
    {
      backgroundColor: 'red',
      maxWidth: 280,
      overflowY: 'auto',
      borderRight: '1.5px solid ' + getTheme().palette.themeSecondary,
      // backgroundColor: getTheme().palette.themeSecondary,
    },
  ],
  sidebar: [
    {
      maxWidth: 280,
      overflowY: 'auto',
      borderRight: '1.5px solid ' + getTheme().palette.themeSecondary,
      backgroundColor: getTheme().palette.themeSecondary,
    },
  ],
  nav_button: {
    justifyContent: 'start !important',
    color: 'red',
    // backgroundColor: theme.palette.neutralLighter,
  },
});
