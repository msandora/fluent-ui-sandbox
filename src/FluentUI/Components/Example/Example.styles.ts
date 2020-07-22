import { IExampleStyleProps, IExampleStyles } from './Example.types';

export const styles = (props: IExampleStyleProps): IExampleStyles => {
  const { theme, root, header, footer } = props;

  return {
    root: [
      'ms-Example',
      {
        backgroundColor: 'red !important',
      },
      // className,
    ],
    // myClass: [{ backgroundColor: 'purple !important' }],
    header: [{ backgroundColor: 'blue' }],
    footer: [{ backgroundColor: 'green' }],
    // etc
  };
};
