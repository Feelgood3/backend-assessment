/**
 * User API
 */
 const express = require('express');
 const { Router } = express;

 const {
   getSingleUserHandler,
   findUserByEmailHandler,
   registerUserHandler,

 } = require('./user.controller.js')

 const router = Router();

 router.get('/', findUserByEmailHandler);
 router.get('/:id', getSingleUserHandler)
 router.post('/:id', registerUserHandler)
 module.exports = router;
