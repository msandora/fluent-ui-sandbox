import { INavMenuStyleProps, INavMenuStyles } from './NavMenu.types';
import { INavStyles } from '@fluentui/react/lib/Nav';

export const styles = (props: INavMenuStyleProps): INavMenuStyles => {
  // const { theme } = props;
  return {
    root: [
      {
        backgroundColor: 'red',
        // maxWidth: 280,
        // overflowY: 'auto',
        // borderRight: '1.5px solid ' + theme.palette.themeSecondary,
        // backgroundColor: theme.palette.themeSecondary,
      },
    ],
    // etc
  };
};

export const navStyles: Partial<INavStyles> = {
  root: {
    overflowY: 'hidden',
    backgroundColor: 'red',

  },
  link: {
    backgroundColor: 'green',
    selectors: {
      '.ms-Nav-compositeLink:hover &': {
        // backgroundColor: 'transparent',
      },
    },
  },
};