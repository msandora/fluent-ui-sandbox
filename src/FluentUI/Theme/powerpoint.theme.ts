import { loadTheme, FontWeights } from '@fluentui/react/lib/Styling';

export const PowerPointTheme: string = 'powerpoint';
export const loadPowerPointTheme = () => {
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
      themePrimary: '#b7462a',
      themeLighterAlt: '#070302',
      themeLighter: '#1d0b07',
      themeLight: '#37150d',
      themeTertiary: '#6e2a19',
      themeSecondary: '#a23e25',
      themeDarkAlt: '#bf553b',
      themeDark: '#c96b53',
      themeDarker: '#d78d7a',
      neutralLighterAlt: '#ecebe9',
      neutralLighter: '#e8e7e6',
      neutralLight: '#dedddc',
      neutralQuaternaryAlt: '#cfcecd',
      neutralQuaternary: '#c6c5c4',
      neutralTertiaryAlt: '#bebdbc',
      neutralTertiary: '#595959',
      neutralSecondary: '#373737',
      neutralPrimaryAlt: '#2f2f2f',
      neutralPrimary: '#000000',
      neutralDark: '#151515',
      black: '#0b0b0b',
      white: '#f3f2f1',
    },
  });
};
