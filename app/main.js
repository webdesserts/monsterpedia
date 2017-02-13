
// Split rendering of main.js so that we don't include redux-devtools in
// production. Redux-devtools holds onto previous versions of state, which
// skyrockets memory usage so that would be bad.

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./main.prod')
} else {
  module.exports = require('./main.dev')
}
