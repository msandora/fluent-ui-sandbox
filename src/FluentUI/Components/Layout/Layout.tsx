import * as React from 'react';
import { useState } from 'react';
import { getTheme, ITheme } from '@fluentui/react';
import { ILayoutStyleProps, ILayoutStyles, ILayoutProps } from './Layout.types';
import { styles } from './Layout.styles';

import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import Header from '../Header/Header';
import NavMenu from '../../../FluentUI/Components/NavMenu/NavMenu';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';

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
    PowerPointTheme
  );
  const classNames = getClassNames(styles, { theme });

  //console.log("layout.tsx", theme.palette.themeSecondary)

  return (
    <Stack>
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
  );
};

export default Layout;
