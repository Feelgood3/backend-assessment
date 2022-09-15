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
  favsList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FavsList',
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const FavsListsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  favsItem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Favs',
    },
  ],
  owner: {
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
