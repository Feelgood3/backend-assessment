const mongoose = require('mongoose');

const connectDb = async () => {
  const URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URI);

    console.log('Connected to Favs on MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDb;
