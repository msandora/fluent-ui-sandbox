import * as React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// Fluent UI
import { Customizer, getTheme, ITheme, CommandBar } from '@fluentui/react';
//Themes
import { ExcelTheme, loadExcelTheme } from '../FluentUI/Theme/excel.theme';
import { PowerPointTheme, loadPowerPointTheme } from '../FluentUI/Theme/powerpoint.theme';
import { WordTheme, loadWordTheme } from '../FluentUI/Theme/word.theme';
//Components
import LayoutFluent from '../FluentUI/Components/Layout/Layout';
import { TalentDashboard } from '../FluentUI/Components/Talent/TalentDashboard';

const FluentRoutes: React.FC = () => {
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
 
  return (
    <Customizer {...selectedTheme}>
      <LayoutFluent>
        <CommandBar
          styles={{
            root: {
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1000,
              width: '100%',
              borderBottom: `solid 1px`,
              borderBottomColor: getTheme().palette.themePrimary,
              // boxShadow: Depths.depth8,
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
        <Route exact path={'/fluent'} component={TalentDashboard} />
      </LayoutFluent>
    </Customizer>
  );
};

export default FluentRoutes;
