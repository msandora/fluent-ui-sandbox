export const theme = {
  componentVariables: {
    // 💡 `colorScheme` is the object containing all color tokens
    Box: ({ colorScheme }) => ({
      // `brand` contains all design tokens for the `brand` color
      color: colorScheme.brand.foreground2,
      //backgroundColor: colorScheme.brand.background4,
      // `foreground3` and `background3` are theme-dependent tokens that should
      // be used as value in styles, you can define own tokens 💪
    }),
    Table: ({ colorScheme }) => ({
      backgroundColor: colorScheme.brand.background2,
    }),
  },
  componentStyles: {
    Box: {
      // 🚀 We recomend to use `colorScheme` from variables mapping
      root: ({ variables }) => ({
        backgroundRepeat: 'no-repeat',
        color: variables.color,
        backgroundColor: variables.backgroundColor,
      }),
    },
    Table: {
      root: ({ variables }) => ({
        backgroundColor: variables.backgroundColor,
        width: '100%'
      }),
    },
    Segment: {
      root: () => ({
        padding: 0
      }),
    },
  },
};
