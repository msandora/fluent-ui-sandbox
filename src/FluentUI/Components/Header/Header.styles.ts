import { IHeaderStyleProps, IHeaderStyles } from './Header.types';

export const styles = (props: IHeaderStyleProps): IHeaderStyles => {
  // const { theme } = props;
  return {
    root: [
      'ms-Header', // Add a custom class
      {
        zIndex: 10,
      },
      // className,
    ],
    // etc
  };
};
