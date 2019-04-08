const config = require('tailwindcss/defaultConfig')
const plugins = require('./plugins')
const colors = require('./colors')

module.exports = {
  ...config,
  prefix: '',
  theme: {
    ...config.theme,
    colors: {
      ...config.theme.colors,
      ...colors
    },
  },
  plugins,
}
