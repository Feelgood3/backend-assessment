/* Main application routes */

const user = require('./api/user/index.js')
const auth = require('./api/auth/local/index.js')
const favs = require('./api/favs/local/index.js')
const favlists = require('./api/favlists/index.js')
const favitems = require('./api/favitems/index.js')
const search = require('./api/search/index.js')

const routes = function (app) {
  app.use('/api/users', user)
  app.use('/api/auth', auth)
  app.use('/api/favs', favs)
  app.use('/api/favlists', favlists)
  app.use('/api/favitems', favitems)
  app.use('/api/search', search)
}

module.exports = routes
