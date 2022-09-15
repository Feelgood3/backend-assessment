/**
 * User API
 */
const express = require('express');

const { Router } = express;

const {
  getSingleUserHandler,
  findUserByEmailHandler,

} = require('./user.controller');

const router = Router();

router.get('/', findUserByEmailHandler);
router.get('/:id', getSingleUserHandler);
module.exports = router;
