export const theme = {
  componentVariables: {
    // 💡 `colorScheme` is the object containing all color tokens
    Box: ({ colorScheme }) => ({
      // `brand` contains all design tokens for the `brand` color
      color: colorScheme.brand.foreground3,
      backgroundColor: colorScheme.brand.background3,
      // `foreground3` and `background3` are theme-dependent tokens that should
      // be used as value in styles, you can define own tokens 💪
    }),
  },
  componentStyles: {
    Box: {
      // 🚀 We recomend to use `colorScheme` from variables mapping
      root: ({ variables }) => ({
        color: variables.color,
        backgroundColor: variables.backgroundColor,
      }),
    },
  },
};