import * as React from 'react';
import { useState } from 'react';
import { getTheme } from '@fluentui/react';
import {
  ILayoutStyleProps,
  ILayoutStyles,
  ILayoutProps,
} from './Layout.types';
import { styles } from './Layout.styles';

import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import Header from '../Header/Header';
import NavMenu from '../../../FluentUI/Components/NavMenu/NavMenu';
import { classNamesFunction } from '@fluentui/react/lib/Utilities';

import { ExcelTheme, loadExcelTheme } from '../../Theme/excel.theme';
import { PowerPointTheme, loadPowerPointTheme } from '../../Theme/powerpoint.theme';
import { WordTheme, loadWordTheme } from '../../Theme/word.theme';

const getClassNames = classNamesFunction<ILayoutStyleProps, ILayoutStyles>();


// I need this to toggle between themes
const theme = loadWordTheme();

const stackTokens: IStackTokens = {
  childrenGap: 20,
};

const Layout = (props: ILayoutProps) => {
  //const classNames: any = appStyles();
  const classNames = getClassNames(styles, { theme });

  const [navIsVisible, setNavIsVissible] = useState(true);
  console.log("layout.tsx", theme.palette.themeSecondary)

  return (
    <Stack>
      <Header 
      onToggleNavButton={() => setNavIsVissible(!navIsVisible)}
      onClickTheme={() => setNavIsVissible(!navIsVisible)} 
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
              borderRight: '1.5px solid ' + getTheme().palette.white,
              // backgroundColor: getTheme().palette.themeSecondary,
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
