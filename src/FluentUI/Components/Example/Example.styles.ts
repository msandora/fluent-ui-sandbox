// Documentation: ComponentName.styles.ts
// https://github.com/microsoft/fluentui/wiki/Component-Anatomy#componentnamestylests
import { IExampleStyleProps, IExampleStyles } from './Example.types';

export const styles = (props: IExampleStyleProps): IExampleStyles => {
  const { theme } = props;
  return {
    root: [
      'ms-Example', // Add a custom class
      {
        backgroundColor: theme.palette.themePrimary,
      },
      // className,
    ],
    header: [
      {
        backgroundColor: theme.palette.themeSecondary,
      },
    ],
    footer: [
      {
        backgroundColor: theme.palette.themeTertiary,
      },
    ],
    // etc
  };
};
