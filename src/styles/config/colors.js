const base = {
  black: '#000',
  black25: 'rgba(0, 0, 0, 0.25)',
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

  icon: {
    fill: base.grey.darkest
  },

  field: {
    color: base.grey.darkest,
    backgroundColor: base.white
  },

  headerFieldShadow: base.black25,

  headerIcon: {
    fill: base.white
  }
};

export default colors;
