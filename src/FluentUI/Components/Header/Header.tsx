import * as React from 'react';
import { getTheme } from '@fluentui/react/lib/Styling';
import {
  CommandBar,
  ICommandBarItemProps,
} from '@fluentui/react/lib/CommandBar';

interface IHeaderProps {
  onToggleNavButton(): void;
}

const Header = (props: IHeaderProps) => {
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
            backgroundColor: getTheme().palette.themePrimary,
          },
        ],
      },
    },
    
  ];

  const commandBarFarItems: ICommandBarItemProps[] = [
    {
      key: 'user',
      name: 'User',
      text: 'User',
      buttonStyles: {
        root: {
          backgroundColor: getTheme().palette.themePrimary,
          color: getTheme().palette.white,
        },
        rootHovered: { color: getTheme().palette.themePrimary },
        rootPressed: { color: getTheme().palette.themePrimary },
      },
    },
  ];

  return (
    <CommandBar
      items={commandBarItems}
      farItems={commandBarFarItems}
      styles={{
        root: {
          backgroundColor: getTheme().palette.themePrimary,
          //boxShadow: Depths.depth8,
          position: 'relative',
          padding: '0 10px',
          zIndex: 10,
        },
      }}
    />
  );
};

export default Header;
