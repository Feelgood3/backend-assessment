const express = require('express');

const { Router } = express;

const { isAuthenticated } = require('../../auth/local/auth.service');

const {
  getAllFavsHandler,
  getSingleFavsHandler,
  createFavsHandler,
  deleteFavsHandler,
  getAllFavsListsHandler,
  getSingleFavsListHandler,
  getAllUserFavsListsHandler,
  createFavsListHandler,
  deleteFavsListHandler,
} = require('./favs.controller');

const router = Router();

router.get('/', isAuthenticated, getAllFavsHandler);
router.get('/:id', isAuthenticated, getSingleFavsHandler);
router.post('/', isAuthenticated, createFavsHandler);
router.delete('/', isAuthenticated, deleteFavsHandler);
router.get('/', isAuthenticated, getAllFavsListsHandler);
router.get('/:id', isAuthenticated, getSingleFavsListHandler);
router.get('/user', isAuthenticated, getAllUserFavsListsHandler);
router.post('/', isAuthenticated, createFavsListHandler);
router.delete('/:id', isAuthenticated, deleteFavsListHandler);

module.exports = router;
