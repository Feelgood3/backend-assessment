const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favsLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Favs',
    },
  ],
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
