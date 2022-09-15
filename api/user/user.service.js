const User = require('./user.model');

function getAllUsers() {
  return User.find({});
}

function getSingleUser(id) {
  return User.findById(id);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function findOneUser(query) {
  return User.findOne(query);
}

function registerUser(user) {
  return User.create(user);
}

function deleteUser(id) {
  return User.findByIdAndRemove(id);
}

function addFavsListToUser(id, favListId) {
  return User.findByIdAndUpdate(
    id,
    { $push: { favLists: favListId } },
    { new: true },
  );
}

function deleteFavsListInUser(id, favListId) {
  return User.findByIdAndUpdate(
    id,
    { $pull: { favLists: favListId } },
    { multi: true },
  );
}

module.exports = {
  getAllUsers,
  getSingleUser,
  findOneUser,
  findUserByEmail,
  registerUser,
  deleteUser,
  addFavsListToUser,
  deleteFavsListInUser,
};
