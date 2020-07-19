import {
  mergeStyleSets,
  //getTheme
} from '@fluentui/react/lib/Styling';

// const theme = getTheme();

export const navMenuStyles = mergeStyleSets({
  nav_button: {
    justifyContent: 'start !important',
    color: 'red',
    // backgroundColor: theme.palette.neutralLighter,
  },
});
