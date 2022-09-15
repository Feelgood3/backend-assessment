const mongoose = require('mongoose');

const SingleFavsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const FavsListsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  favsItem: [SingleFavsSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
}, { timestamps: true });

const FavsList = mongoose.model('FavsList', FavsListsSchema);
const Favs = mongoose.model('Favs', SingleFavsSchema);

module.exports = {
  FavsList,
  Favs,
};
