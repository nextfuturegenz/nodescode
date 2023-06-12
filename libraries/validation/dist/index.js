
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./validation.cjs.production.min.js')
} else {
  module.exports = require('./validation.cjs.development.js')
}
