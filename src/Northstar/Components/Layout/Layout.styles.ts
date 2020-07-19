import { mergeStyleSets } from '@fluentui/react/lib/Styling';

export const layoutStyles = mergeStyleSets({
  layout_container: {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 50px)',
  },
  layout_sideBar: {
    maxWidth: 230,
    minWidth: 230,
    overflowY: 'auto',
  },
  layout_content: {
    alignitems: 'stretch',
    marginLeft: 0 + ' !important',
  },
});
