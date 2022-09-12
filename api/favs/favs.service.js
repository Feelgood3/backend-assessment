const Favs = require('./favs.model');

function getAllFavs() {
  return Favs.find({});
}

function getSingleFavs(id) {
  return Favs.findById(id);
}

function deleteFavs(id) {
  return Favs.findByIdAndRemove(id);
}

module.exports = {
  getAllFavs,
  getSingleFavs,
  deleteFavs,
};
