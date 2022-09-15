/* Main application routes */

const user = require('./api/user/index');
const auth = require('./auth/local/index');
const favs = require('./api/favs/index');
const favlists = require('./api/favs/index');

const routes = function (app) {
  app.use('/api/users', user);
  app.use('/api/auth/local', auth);
  app.use('/api/favs', favs);
  app.use('/api/favlists', favlists);
};

module.exports = routes;
