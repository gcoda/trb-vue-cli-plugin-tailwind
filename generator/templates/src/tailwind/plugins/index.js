const { development, ...plugins } = require('require-dir')('.', {
  recurse: true,
})

const indexJs = mod =>
  typeof mod !== 'function' && mod.index ? mod.index : mod
const isFunction = mod => typeof mod === 'function'
const prod = Object.values(plugins)
  .map(indexJs)
  .filter(isFunction)

const dev = development
  ? Object.values(development)
      .map(indexJs)
      .filter(isFunction)
  : []

module.exports =
  process.env.NODE_ENV === 'development' ? [...prod, ...dev] : prod
