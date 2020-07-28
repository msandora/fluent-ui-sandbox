import * as React from 'react';
import { useState, useEffect } from 'react';
import { getTheme, ITheme, Customizer, CommandBar } from '@fluentui/react';
import { styles } from './Layout.styles';
// Fluent UI
import { Stack } from '@fluentui/react/lib/Stack';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';
import { ILayoutStyleProps, ILayoutStyles, ILayoutProps } from './Layout.types';
// Components
import { Header } from '../Header/Header';
import { NavMenu } from '../NavMenu/NavMenu';

//Themes
import { ExcelTheme, loadExcelTheme } from '../../Theme/excel.theme';
import {
  PowerPointTheme,
  loadPowerPointTheme,
} from '../../Theme/powerpoint.theme';
import { WordTheme, loadWordTheme } from '../../Theme/word.theme';
import { TeamsTheme, loadTeamsTheme } from '../../Theme/teams.theme';
// import { ThemeSelect } from '../../Theme/ThemeSelect';

let theme = loadTeamsTheme();

const LayoutBase = (props: ILayoutProps) => {
  const getClassNames = classNamesFunction<ILayoutStyleProps, ILayoutStyles>();
  const [navIsVisible, setNavIsVissible] = useState(true);

  const [selectedTheme, setSelectedTheme] = useState<ITheme>();
  const [selectedThemeTitle, setSelectedThemeTitle] = useState<string>(
    WordTheme
  );

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
      case TeamsTheme:
        setSelectedTheme(loadTeamsTheme());
        break;
      default:
        setSelectedTheme(loadWordTheme());
        break;
    }
  };

  //component did mount
  useEffect(() => {
    // load theme if saved in local storage
    const themeName = localStorage.getItem('Theme');
    if (themeName) setTheme(themeName);
    // console.log(theme);
    // console.log("themeName", themeName);
    // eslint-disable-next-line
  }, []);

  const classNames = getClassNames(styles, { theme });

  return (
    <Customizer {...selectedTheme}>
      <Stack>
        <CommandBar
          styles={{
            root: {
              position: 'fixed',
              top: 0,
              left: 40,
              zIndex: 1000,
              width: 'auto',
            },
          }}
          items={[
            {
              key: 'theme',
              iconProps: { iconName: 'Color' },
              text: selectedThemeTitle,
              subMenuProps: {
                items: [
                  {
                    key: TeamsTheme,
                    iconProps: {
                      iconName:
                        selectedThemeTitle === TeamsTheme
                          ? 'ColorSolid'
                          : 'Color',
                    },
                    text: 'TeamsTheme',
                    onClick: () => onClickTheme(TeamsTheme),
                  },
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
          // Tried to move theme switch into Header Component
          // onClickTheme={() => setSelectedThemeTitle(selectedThemeTitle)}
        />

        <Stack horizontal grow className={classNames.container}>
          <Stack.Item
            grow={1}
            className={classNames.sidebar}
            styles={{
              root: {
                // Trying to move this to Layout.styles.ts
                // But Color swap no longer works
                // borderRight: '1.5px solid ' + getTheme().palette.white,
                backgroundColor: getTheme().palette.themeDarker,
                maxWidth: navIsVisible ? 230 : '41.5px',
                minWidth: navIsVisible ? 230 : '41.5px',
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
                backgroundColor: getTheme().palette.white,
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

export default LayoutBase;
