import { IHeaderStyleProps, IHeaderStyles } from './Header.types';

export const styles = (props: IHeaderStyleProps): IHeaderStyles => {
  const { theme } = props;
  return {
    root: [
      'ms-Header', // Add a custom class
      {
        padding: 0,
        zIndex: 10,
        borderBottom: '1.5px solid ' + theme.palette.white,
        backgroundColor: theme.palette.themeDarkAlt,
      },
      // className,
    ],
    // etc
  };
};
