import { INavMenuStyleProps, INavMenuStyles } from './NavMenu.types';
import { INavStyles } from '@fluentui/react/lib/Nav';

export const styles = (props: INavMenuStyleProps): INavMenuStyles => {
  const { theme } = props;
  return {
    root: [
      {
        backgroundColor: 'green', // Just for testing
      }
    ],
    // etc
  };
};

export const navStyles: Partial<INavStyles> = {
  root: {
    overflowY: 'hidden',
  },
  chevronButton: {
    color: 'white',
    border: 'none !important',
  },
  link: {
    selectors: {
      '.ms-Nav-compositeLink:not(.is-selected) &': {
        color: 'white',
      },
      '.ms-Nav-compositeLink:hover:not(.is-selected) &': {
        color: 'black',
      },
    },
  },
};
