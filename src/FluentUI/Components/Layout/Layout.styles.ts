import { ILayoutStyleProps, ILayoutStyles } from './Layout.types';

export const styles = (props: ILayoutStyleProps): ILayoutStyles => {
  const { theme } = props;
  return {
    root: [
      //   'ms-Layout', // Add a custom class
      //   {
      //     position: 'fixed',
      //     top: 0,
      //     left: 228.5,
      //     right: 228,
      //     zIndex: 1000,
      //     width: 'auto',
      //     borderBottom: 'solid 1px' + theme.palette.themePrimary,
      //   },
      //  className,
    ],
    container: [
      {
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 45px)',
      },
    ],
    sidebar: [
      {
        maxWidth: 280,
        overflowY: 'auto',
        borderRight: '1.5px solid ' + theme.palette.white,
        backgroundColor: theme.palette.themePrimary,
      },
    ],
    content: {
      padding: '0 25px',
      alignitems: 'stretch',
      backgroundColor: theme.palette.themeLight,
    },
  };
};
