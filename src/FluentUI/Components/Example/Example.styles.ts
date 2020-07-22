import { IExampleStyleProps, IExampleStyles } from './Example.types';

export const styles = (props: IExampleStyleProps): IExampleStyles => {
  const { theme } = props;
  return ({
    root: [
      'ms-Example', // Add a custom class
      {
        backgroundColor: theme.palette.redDark,
      },
      // className,
    ],
    header: [{ backgroundColor: 'blue' }],
    footer: [{ backgroundColor: 'green' }],
    // etc
  });
};
