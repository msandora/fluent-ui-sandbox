import { IHeaderStyleProps, IHeaderStyles } from './Header.types';

export const styles = (props: IHeaderStyleProps): IHeaderStyles => {
  const { theme } = props;
  //console.log(theme)
  return {
    root: [
      'ms-Header', // Add a custom class
      {
        borderBottom: '1.5px solid ' + theme.palette.white,
        backgroundColor: theme.palette.themeDark,
      },
      // className,ms-CommandBar
    ],  
    // etc
  };
};

