const { shadesPreset, shadesConfig, shades } = require('@therobot/luma-shades')
module.exports = {
  accent: shades(
    '#ff9900',
    {
      // ...shadesConfig,
      light: { min: 0.7, max: 0.75 },
      dark: { min: 0.3, max: 0.35 },
    },
    {
      lighten: [{ lighten: 0.01, saturate: 0.05 }],
      darken: [{ darken: 0.01, desaturate: 0.05 }],
    }
  ),
  brand: { ...shadesPreset('#ff9900'), base: '#ff9900' },
  ruby: shadesPreset('#e53e3e'),
}
