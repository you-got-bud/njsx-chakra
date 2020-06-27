
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./njsx-chakra.cjs.production.min.js')
} else {
  module.exports = require('./njsx-chakra.cjs.development.js')
}
