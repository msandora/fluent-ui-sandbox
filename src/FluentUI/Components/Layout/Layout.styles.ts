import { getTheme } from '@fluentui/react/lib/Styling';
import { ILayoutStyleProps, ILayoutStyles } from './Layout.types';

export const styles = (props: ILayoutStyleProps): ILayoutStyles => {
  const { theme } = props;
  //console.log('layout.styles', theme);
  return {
    root: [
      {
        position: 'fixed',
        top: 0,
        left: 228.5,
        right: 228,
        zIndex: 1000,
        width: 'auto',
        borderBottom: 'solid 1px' + theme.palette.themePrimary,
      },
    ],
    container: [
      {
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 45px)',
        // backgroundColor: 'red',
      },
    ],
    sidebar: [
      {
        maxWidth: 280,
        overflowY: 'auto',
        borderRight: '1.5px solid ' + getTheme().palette.white,
        backgroundColor: theme.palette.themeSecondary,
      },
    ],
    content: {
      alignitems: 'stretch',
      backgroundColor: theme.palette.themePrimary,
    },
  };
};
