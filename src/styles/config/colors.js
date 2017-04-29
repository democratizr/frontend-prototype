const base = {
  black: '#000',
  white: '#fff',
  grey: {
    darkest: '#454545',
    darker: '#666',
    light: '#ccc',
    lighter: '#ddd',
    lightest: '#f4f4f4'
  },
  pink: '#d52569',
  blue: '#3c6c90'
};

const colors = {
  brand: {
    color: base.pink
  },
  brandInverted: {
    color: base.white,
    backgroundColor: base.pink
  },

  navigation: {
    color: base.blue
  },
  navigationInverted: {
    color: base.white,
    backgroundColor: base.blue
  },

  headerIcon: {
    fill: base.white
  }
};

export default colors;
