import { IExampleStyleProps, IExampleStyles } from './Example.types';

export const styles = (props: IExampleStyleProps): IExampleStyles => {
  const {
    theme,
    className,
    // etc
  } = props;

  return {
    root: [
      'ms-Example',
      {
        backgroundColor: 'red',
      },
      className,
    ],
    header: [{ backgroundColor: 'blue' }],
    footer: [{ backgroundColor: 'green' }],
    // etc
  };
};
