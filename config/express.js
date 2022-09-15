const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routesConfig = require('../routes');

function configExpress() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  routesConfig(app);

  return app;
}

module.exports = configExpress;
