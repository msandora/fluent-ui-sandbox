import { loadTheme, FontWeights } from '@fluentui/react/lib/Styling';

export const WordTheme: string = 'word';
export const loadWordTheme = () => {
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
      themePrimary: '#2b579a',
      themeLighterAlt: '#f4f7fb',
      themeLighter: '#d3deef',
      themeLight: '#b0c3e0',
      themeTertiary: '#6e90c2',
      themeSecondary: '#3d66a5',
      themeDarkAlt: '#274e8a',
      themeDark: '#214274',
      themeDarker: '#183156',
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
