const fs = require('fs')
module.exports = (api, options) => {
  api.extendPackage({
    postcss: undefined,

    devDependencies: {
      '@fullhuman/postcss-purgecss': '^1.1.0',
      'postcss-preset-env': '^6.6.0',
      '@therobot/luma-shades': '0.0.3',
      'postcss-import': '^12.0.1',
      tailwindcss: '^1.0.0-beta.4',
      'tailwindcss-grid': '^1.2.1',
      'tailwindcss-tables': '^0.2.0',
      'require-dir': '^1.2.0',
    },
  })

  api.render('./templates', options)

  try {
    const tsPath = api.resolve('src/main.ts')
    const jsPath = api.resolve('src/main.js')

    const tsExists = fs.existsSync(tsPath)
    const jsExists = fs.existsSync(jsPath)

    if (!tsExists && !jsExists) {
      throw new Error('No entry found')
    }

    const file = tsExists ? 'src/main.ts' : 'src/main.js'
    api.injectImports(file, `import './tailwind/tailwind.postcss'`)
  } catch (error) {
    api.exitLog(error, 'warn')
  }
}
