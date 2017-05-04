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

const theme = {
  colors: {
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
  },
};

export default theme;
