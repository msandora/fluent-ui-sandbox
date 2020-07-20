import { mergeStyleSets, getTheme } from '@fluentui/react/lib/Styling';
//unable to retrieve theme colors here
// const theme = getTheme();

export const layoutStyles = mergeStyleSets({
  layout_container: {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 45px)',
    backgroundColor: getTheme().palette.themePrimary,
  },
  layout_sideBar: {
    maxWidth: 280,
    overflowY: 'auto',
    borderRight: '2px solid ' + getTheme().palette.themePrimary,
    backgroundColor: getTheme().palette.themePrimary,
  },
  layout_content: {
    alignitems: 'stretch',
    marginLeft: 0 + ' !important',
    backgroundColor: getTheme().palette.themePrimary,
  },
});
