const express = require('express');

const { Router } = express;

const {
  registerUserHandler,
  loginUserHandler,
} = require('./auth.controller');

const router = Router();

router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);

module.exports = router;
