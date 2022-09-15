const { Favs, FavsList } = require('./favs.model');

function getAllFavs() {
  return Favs.find({});
}

function getSingleFavs(id) {
  return Favs.findById(id);
}

function createSingleFavs(favsList) {
  return Favs.create(favsList);
}

function deleteSingleFavs(id) {
  return Favs.findByIdAndDelete(id);
}

function getAllFavsLists() {
  return FavsList.find({});
}

function getSingleFavsList(id) {
  return FavsList.findById(id);
}

function getAllUserFavsLists(owner) {
  return FavsList.find({ owner });
}

function createFavsList(favList) {
  return FavsList.create(favList);
}

function deleteFavsList(id) {
  return FavsList.findByIdAndDelete(id);
}

function addFavsToFavsList(id, favId) {
  return FavsList.findByIdAndUpdate(
    id,
    { $push: { favs: favId } },
    { new: true },
  );
}

function deleteFavsAtFavsList(favId, id) {
  return FavsList.findByIdAndUpdate(
    id,
    { $pull: { favs: favId } },
    { multi: true },
  );
}

module.exports = {
  getAllFavs,
  getSingleFavs,
  createSingleFavs,
  deleteSingleFavs,
  getAllFavsLists,
  getSingleFavsList,
  getAllUserFavsLists,
  createFavsList,
  deleteFavsList,
  addFavsToFavsList,
  deleteFavsAtFavsList,
};
