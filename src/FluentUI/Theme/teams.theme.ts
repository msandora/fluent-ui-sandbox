import { loadTheme, FontWeights } from '@fluentui/react/lib/Styling';

export const TeamsTheme: string = 'teams';
export const loadTeamsTheme = () => {
  return loadTheme({
    defaultFontStyle: {
      fontFamily: 'Segoe UI, Roboto, Helvetica Neue',
      fontWeight: FontWeights.regular,
    },
    fonts: {
      small: {
        fontSize: '11px',
      },
      medium: {
        fontSize: '13px',
      },
      large: {
        fontSize: '16px',
        fontWeight: FontWeights.semibold,
      },
      xLarge: {
        fontSize: '18px',
        fontWeight: FontWeights.semibold,
      },
    },
    palette: {
      themePrimary: '#6264a7',
      themeLighterAlt: '#f7f7fb',
      themeLighter: '#e1e1f1',
      themeLight: '#c8c9e4',
      themeTertiary: '#989ac9',
      themeSecondary: '#7173b0',
      themeDarkAlt: '#585a95',
      themeDark: '#4a4c7e',
      themeDarker: '#37385d',
      neutralLighterAlt: '#ecebe9',
      neutralLighter: '#e8e7e6',
      neutralLight: '#dedddc',
      neutralQuaternaryAlt: '#cfcecd',
      neutralQuaternary: '#c6c5c4',
      neutralTertiaryAlt: '#bebdbc',
      neutralTertiary: '#b5b4b2',
      neutralSecondary: '#9d9c9a',
      neutralPrimaryAlt: '#868482',
      neutralPrimary: '#252423',
      neutralDark: '#565453',
      black: '#3e3d3b',
      white: '#f3f2f1',
    },
  });
};
