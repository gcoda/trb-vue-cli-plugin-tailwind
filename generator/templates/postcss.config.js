class TailwindVueExtractor {
  static extract(content) {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ''
    )
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

const extensionsUsingCSS = ['vue', 'html']
const extensionsOfCSS = [
  'css',
  'less',
  'pcss',
  'postcss',
  'sass',
  'scss',
  'styl',
]

module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 2 }),
    require('tailwindcss')(require('./src/tailwind/tailwind')),
    env === 'development'
      ? false
      : require('@fullhuman/postcss-purgecss')({
          content: [`./@(public|src)/**/*.@(${extensionsUsingCSS.join('|')})`],
          css: [`./src/**/*.@(${extensionsOfCSS.join('|')})`],
          extractors: [
            {
              extractor: TailwindVueExtractor,
              extensions: extensionsUsingCSS,
            },
          ],
          whitelist: [],
          whitelistPatterns: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/,
          ],
        }),
    require('autoprefixer'),
  ],
})
