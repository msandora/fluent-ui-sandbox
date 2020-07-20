import { getTheme } from '@fluentui/react/lib/Styling';
import { ILayoutStyleProps, ILayoutStyles } from './Layout.types';
import { IStackTokens } from '@fluentui/react/lib/Stack';

export const styles = (props: ILayoutStyleProps): ILayoutStyles => {
  const { theme } = props;
  // console.log('layout.styles', getTheme().palette.themeSecondary);
  return {
    root: [
      {
        display: 'flex',
        borderTop: '4px solid ' + theme.palette.themeDark,
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        height: 'auto',
        minWidth: '400px',
        maxWidth: '1000px',
      },
    ],
    container: [
      {
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 45px)',
        // backgroundColor: getTheme().palette.themePrimary,
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
    content: {
      alignitems: 'stretch',
      marginLeft: 0 + ' !important',
      backgroundColor: getTheme().palette.themePrimary,
    },
  };
};


export const layoutTokens: IStackTokens = {
  childrenGap: 20,
};
