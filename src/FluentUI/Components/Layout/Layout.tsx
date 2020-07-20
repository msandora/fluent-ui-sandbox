import * as React from 'react';
import { useState, useEffect } from 'react';
import { getTheme, ITheme, Customizer, CommandBar } from '@fluentui/react';
import { ILayoutStyleProps, ILayoutStyles, ILayoutProps } from './Layout.types';
import { styles } from './Layout.styles';
// Fluent UI
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';

import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';

//Themes
import { ExcelTheme, loadExcelTheme } from '../../Theme/excel.theme';
import {
  PowerPointTheme,
  loadPowerPointTheme,
} from '../../Theme/powerpoint.theme';
import { WordTheme, loadWordTheme } from '../../Theme/word.theme';

const getClassNames = classNamesFunction<ILayoutStyleProps, ILayoutStyles>();
// I need this to toggle between themes
const theme = loadWordTheme();

const stackTokens: IStackTokens = {
  childrenGap: 20,
};

const Layout = (props: ILayoutProps) => {
  const [navIsVisible, setNavIsVissible] = useState(true);

  const [selectedTheme, setSelectedTheme] = useState<ITheme>();
  const [selectedThemeTitle, setSelectedThemeTitle] = useState<string>(
    WordTheme
  );
  const classNames = getClassNames(styles, { theme });

  const onClickTheme = (themeName: string) => {
    // save theme across sessions
    localStorage.setItem('Theme', themeName);

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
    console.log(theme);

    // eslint-disable-next-line
  }, []);
  
  console.log('selectedTheme', selectedTheme);
  return (
    <Customizer {...selectedTheme}>
      <Stack>
        <CommandBar
          styles={{
            root: {
              position: 'fixed',
              top: 0,
              left: 230,
              zIndex: 1000,
              width: '100%',
              borderBottom: `solid 1px`,
              borderBottomColor: getTheme().palette.themePrimary,
            },
          }}
          items={[
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
                        selectedThemeTitle === WordTheme
                          ? 'ColorSolid'
                          : 'Color',
                    },
                    text: 'WordTheme',
                    onClick: () => onClickTheme(WordTheme),
                  },
                  {
                    key: ExcelTheme,
                    iconProps: {
                      iconName:
                        selectedThemeTitle === ExcelTheme
                          ? 'ColorSolid'
                          : 'Color',
                    },
                    text: 'ExcelTheme',
                    onClick: () => onClickTheme(ExcelTheme),
                  },
                  {
                    key: PowerPointTheme,
                    iconProps: {
                      iconName:
                        selectedThemeTitle === PowerPointTheme
                          ? 'ColorSolid'
                          : 'Color',
                    },
                    text: 'PowerPointTheme',
                    onClick: () => onClickTheme(PowerPointTheme),
                  },
                ],
              },
            },
          ]}
        />
        <Header
          onToggleNavButton={() => setNavIsVissible(!navIsVisible)}
          onClickTheme={() => setSelectedThemeTitle(selectedThemeTitle)}
        />

        <Stack
          horizontal
          grow
          className={classNames.container}
          tokens={stackTokens}
        >
          <Stack.Item
            grow={1}
            className={classNames.sidebar}
            styles={{
              root: {
                // Trying to move this to Layout.styles.ts
                // But Color swap no longer works
                borderRight: '1.5px solid ' + getTheme().palette.white,
                backgroundColor: getTheme().palette.themeSecondary,
                maxWidth: navIsVisible ? 230 : 45,
                minWidth: navIsVisible ? 230 : 45,
              },
            }}
          >
            <NavMenu />
          </Stack.Item>

          <Stack.Item
            grow={2}
            className={classNames.content}
            styles={{
              root: {
                backgroundColor: getTheme().palette.themePrimary,
              },
            }}
          >
            {props.children}
          </Stack.Item>
        </Stack>
      </Stack>
    </Customizer>
  );
};

export default Layout;
