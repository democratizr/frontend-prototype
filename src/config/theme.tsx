const colors = {
  black: '#000',
  black25: 'rgba(0, 0, 0, 0.25)',
  white: '#fff',
  grey: {
    darkest: '#454545',
    darker: '#666',
    light: '#ccc',
    lighter: '#ddd',
    lightest: '#f4f4f4',
  },
  pink: '#d52569',
  blue: '#3c6c90',
};

// import { CSSProperties } from 'glamorous/typings/css-properties';
// type Color = string;
//
// interface HTMLColorStyles {
//   color?: Color,
//   backgroundColor?: Color,
// };
//
// interface SVGColorStyles {
//   fill?: Color
// };
//
// interface IconTheme {
//   [name: string]: SVGColorStyles
// };

interface FontStyles {
  fontWeight?: 300 | 400;
};

interface ThemeTypography {
  [name: string]: FontStyles;
};

// export interface Theme {
//   common: {
//     [name: string]: CSSProperties
//   },
//   colors: {
//     [name: string]: Color | HTMLColorStyles | IconTheme,
//   },
//   typography: {
//     [name: string]: FontStyles
//   }
// };

const theme = {
  common: {
    resetList: {
      display: 'block',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  },

  colors: {
    appMenu: {
      color: colors.white,
      backgroundColor: colors.grey.darkest
    },
    appMenuLink: {
      color: colors.white
    },
    appMenuMask: {
      backgroundColor: colors.black25
    },
    appMenuShadow: colors.black25,

    brand: {
      color: colors.pink,
    },
    brandInverted: {
      color: colors.white,
      backgroundColor: colors.pink,
    },

    navigation: {
      color: colors.blue,
    },
    navigationInverted: {
      color: colors.white,
      backgroundColor: colors.blue,
    },

    iconTheme: {
      dark: {
        fill: colors.grey.darkest
      },
      light: {
        fill: colors.white
      },
      brand: {
        fill: colors.pink
      }
    },

    field: {
      color: colors.grey.darkest,
      backgroundColor: colors.white,
    },

    headerFieldShadow: colors.black25,

    headerText: {
      color: colors.white,
    },

    contentBox: {
      borderColor: colors.grey.lighter,
      color: colors.grey.darkest,
      backgroundColor: colors.white,
    },

    contentScreen: {
      color: colors.grey.darkest,
      backgroundColor: colors.white,
    },

    footer: {
      color: colors.grey.darkest,
      backgroundColor: colors.grey.lightest,
    }
  },

  typography: {
    normal: {
      fontWeight: 300,
    },
    bold: {
      fontWeight: 400,
    }
  } as ThemeTypography,
};

export default theme;

export type Theme = typeof theme;
