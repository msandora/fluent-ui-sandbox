import { loadTheme, FontWeights } from '@fluentui/react/lib/Styling';

export const ExcelTheme: string = 'excel';
export const loadExcelTheme = () => {
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
      themePrimary: '#217346',
      themeLighterAlt: '#f2f9f5',
      themeLighter: '#cee9da',
      themeLight: '#a8d5bc',
      themeTertiary: '#62ab83',
      themeSecondary: '#318456',
      themeDarkAlt: '#1e673f',
      themeDark: '#195735',
      themeDarker: '#134027',
      neutralLighterAlt: '#f8f8f8',
      neutralLighter: '#f4f4f4',
      neutralLight: '#eaeaea',
      neutralQuaternaryAlt: '#dadada',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c8c8',
      neutralTertiary: '#c7c7c7',
      neutralSecondary: '#8f8f8f',
      neutralPrimaryAlt: '#5b5b5b',
      neutralPrimary: '#444444',
      neutralDark: '#343434',
      black: '#272727',
      white: '#ffffff',
    },
  });
};
