import {
  mergeStyleSets,
  //getTheme
} from '@fluentui/react/lib/Styling';

//const theme = getTheme();

export const layoutStyles = mergeStyleSets({
  layout_container: {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 50px)',
    // backgroundColor: theme.palette.neutralLighter,
  },
  layout_sideBar: {
    maxWidth: 230,
    minWidth: 230,
    overflowY: 'auto',
    // borderRight: '2px solid ' + theme.palette.themePrimary,
    // backgroundColor: theme.palette.neutralLighter
  },
  layout_content: {
    alignitems: 'stretch',
    marginLeft: 0 + ' !important',
  },
});
