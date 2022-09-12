const mongoose = require('mongoose')

const FavsListsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  favsItem: [FavsItemSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
}, { timestamps: true });

const FavsItemSchema = new mongoose.Schema({
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
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
}, { timestamps: true });

const Favs = mongoose.model("Favs", FavsListsSchema);

module.exports = Favs
