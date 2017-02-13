
/*
 * We have to tie some middleware and the like into our store for
 * redux-devtools. Again, since we don't want redux-devtools in our production
 * environment, we split this file into two versions.
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
