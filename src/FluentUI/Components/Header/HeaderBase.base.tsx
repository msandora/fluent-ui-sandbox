import * as React from 'react';
import {  Fragment } from 'react';
// Fluent imports
import {
  CommandBar,
  ICommandBarItemProps, ICommandBarStyles
} from '@fluentui/react/lib/CommandBar';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import { getTheme } from '@fluentui/react/lib/Styling';
// Anatomy imports
import { styles } from './Header.styles';
import { IHeaderStyleProps, IHeaderStyles, IHeaderProps } from './Header.types';

const HeaderBase = (props: IHeaderProps) => {
  const getClassNames = classNamesFunction<IHeaderStyleProps, IHeaderStyles>();
  const theme = getTheme();
  const classNames = getClassNames(styles, { theme });
  //console.log(classNames);

  const commandBarItems: ICommandBarItemProps[] = [
    {
      key: 'navToggle',
      iconProps: { iconName: 'GlobalNavButton' },
      iconOnly: true,
      onClick: props.onToggleNavButton,
      buttonStyles: {
        icon: {
          color: getTheme().palette.white,
          backgroundColor: 'transparent',
        },
        root: [
          {
            backgroundColor: getTheme().palette.themeDark,
          },
        ],
      },
    },
    {
      key: 'divider',
      onRender: () => <div style={{margin: '5px 0', width: '2px', background: '#ddd'}} > </div>
    },
  ];

  const commandBarFarItems: ICommandBarItemProps[] = [
    {
      key: 'user',
      name: 'User',
      text: 'User Name',
      buttonStyles: {
        root: {
          backgroundColor: getTheme().palette.themeDark,
          color: getTheme().palette.white,
        },
        rootHovered: { color: getTheme().palette.themePrimary },
        rootPressed: { color: getTheme().palette.themePrimary },
      },
    },
  ];

  let rootStyles: ICommandBarStyles = { 
    root: { 
      padding: 0,
      backgroundColor: 'transparent',
    }
  }; 
  
  return (
    <Fragment>
      <CommandBar
        items={commandBarItems}
        farItems={commandBarFarItems}
        className={classNames.root}
        styles={rootStyles}
      />
    </Fragment>
  );
};

export default HeaderBase;
