/* Main application routes */

const user = require('./api/user/index');
const auth = require('./auth/local/index');
const favs = require('./api/favs/index');

const routes = (app) => {
  app.use('/api/users', user);
  app.use('/auth/local', auth);
  app.use('/api/favs', favs);
};

module.exports = routes;
