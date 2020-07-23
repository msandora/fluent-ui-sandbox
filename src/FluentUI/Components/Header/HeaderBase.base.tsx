import * as React from 'react';
import { useEffect, useState, Fragment } from 'react';
// Fluent imports
import {
  CommandBar,
  ICommandBarItemProps,
} from '@fluentui/react/lib/CommandBar';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import { getTheme, ITheme } from '@fluentui/react/lib/Styling';
// Anatomy imports
import { styles } from './Header.styles';
import { IHeaderStyleProps, IHeaderStyles, IHeaderProps } from './Header.types';

//Themes
import { ExcelTheme, loadExcelTheme } from '../../Theme/excel.theme';
import {
  PowerPointTheme,
  loadPowerPointTheme,
} from '../../Theme/powerpoint.theme';
import { WordTheme, loadWordTheme } from '../../Theme/word.theme';


const getClassNames = classNamesFunction<IHeaderStyleProps, IHeaderStyles>();
const theme = getTheme();
const classNames = getClassNames(styles, { theme });

const HeaderBase = (props: IHeaderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<ITheme>();
  const [selectedThemeTitle, setSelectedThemeTitle] = useState<string>();
  const onClickTheme = (themeName: string) => {
    // save theme across sessions
    localStorage.setItem('Theme', themeName);
    console.log('header.themeName', themeName);
    console.log('header.selectedTheme', selectedTheme);

    setTheme(themeName);
  };

  const setTheme = (themeName: string) => {
    setSelectedThemeTitle(themeName);
    switch (themeName) {
      case PowerPointTheme:
        setSelectedTheme(loadPowerPointTheme());
        break;
      case ExcelTheme:
        setSelectedTheme(loadExcelTheme());
        break;
      default:
        setSelectedTheme(loadWordTheme());
        break;
    }
  };

  //component did mount
  useEffect(() => {
    // load theme if saved in local storage
    const theme = localStorage.getItem('Theme');
    if (theme) setTheme(theme);

    // eslint-disable-next-line
  }, []);

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
    {
      key: 'theme',
      iconProps: { iconName: 'Color' },
      text: 'Theme',
      subMenuProps: {
        items: [
          {
            key: WordTheme,
            iconProps: {
              iconName:
                selectedThemeTitle === WordTheme ? 'ColorSolid' : 'Color',
            },
            text: 'WordTheme',
            onClick: () => onClickTheme(WordTheme),
          },
          {
            key: ExcelTheme,
            iconProps: {
              iconName:
                selectedThemeTitle === ExcelTheme ? 'ColorSolid' : 'Color',
            },
            text: 'ExcelTheme',
            onClick: () => onClickTheme(ExcelTheme),
          },
          {
            key: PowerPointTheme,
            iconProps: {
              iconName:
                selectedThemeTitle === PowerPointTheme ? 'ColorSolid' : 'Color',
            },
            text: 'PowerPointTheme',
            onClick: () => onClickTheme(PowerPointTheme),
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
    <Fragment>
      <CommandBar
        items={commandBarItems}
        farItems={commandBarFarItems}
        className={classNames.root}
        styles={{
          root: {
            padding: 0,
            zIndex: 10,
            borderBottom: '1.5px solid ' + getTheme().palette.white,
            backgroundColor: getTheme().palette.themePrimary,
          },
        }}
      />
    </Fragment>
  );
};

export default HeaderBase;
