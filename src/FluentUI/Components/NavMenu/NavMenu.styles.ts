import { INavMenuStyleProps, INavMenuStyles } from './NavMenu.types';

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
