const express = require('express');

const { Router } = express;

const { isAuthenticated } = require('../../auth/local/auth.service');

const {
  getAllFavsHandler,
  getSingleFavsHandler,
  createFavsHandler,
  deleteFavsHandler,
} = require('./favs.controller');

const router = Router();

router.get('/', isAuthenticated, getAllFavsHandler);
router.get('/:id', isAuthenticated, getSingleFavsHandler);
router.post('/', isAuthenticated, createFavsHandler);
router.delete('/', isAuthenticated, deleteFavsHandler);
module.exports = router;
