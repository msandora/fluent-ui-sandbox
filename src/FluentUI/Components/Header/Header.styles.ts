import { getTheme } from '@fluentui/react/lib/Styling';
import { IHeaderStyleProps, IHeaderStyles } from './Header.types';
import { IStackTokens } from '@fluentui/react/lib/Stack';

export const styles = (props: IHeaderStyleProps): IHeaderStyles => {
  const { theme } = props;
  // console.log('layout.styles', getTheme().palette.themeSecondary);
  return {
    root: [
      {
        backgroundColor: 'purple',

      },
    ],
    container: [
      {
        backgroundColor: 'purple',
        //width: '100%',
        //height: 'calc(100vh - 45px)',
        // backgroundColor: getTheme().palette.themePrimary,
      },
    ],
  };
};


export const layoutTokens: IStackTokens = {
  childrenGap: 20,
};
