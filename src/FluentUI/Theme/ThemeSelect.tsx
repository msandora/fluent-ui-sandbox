import * as React from 'react';
import { useState, useEffect } from 'react';
import { getTheme, ITheme, Customizer, CommandBar } from '@fluentui/react';

//Themes
import { ExcelTheme, loadExcelTheme } from './excel.theme';
import { PowerPointTheme, loadPowerPointTheme } from './powerpoint.theme';
import { WordTheme, loadWordTheme } from './word.theme';
import { TeamsTheme, loadTeamsTheme } from './teams.theme';

const ThemeSelect = () => {
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
    const theme = localStorage.getItem('Theme');
    if (theme) setTheme(theme);
    // console.log(theme);

    // eslint-disable-next-line
  }, []);

  // console.log('selectedTheme', selectedTheme);
  return (
    <Customizer {...selectedTheme}>
      <CommandBar
        styles={{
          root: {
            position: 'fixed',
            top: 0,
            left: 228.5,
            right: 228,
            zIndex: 1000,
            width: 'auto',
            borderBottom: 'solid 1px' + getTheme().palette.themePrimary,
            // borderBottomColor: getTheme().palette.themePrimary,
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
                      selectedThemeTitle === WordTheme ? 'ColorSolid' : 'Color',
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
    </Customizer>
  );
};

export default ThemeSelect;
