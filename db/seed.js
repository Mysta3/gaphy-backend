const mongoose = require('./connection');
const Gifs = require('../models/Gifs');
const gif = require('../db/gifs.json');

Gifs.deleteMany({}).then(() => {
  Gifs.insertMany(gif, (err, gif) => {
    if (err) {
      console.error;
    }
    console.log('gif created Successfully', gif);
    mongoose.connection.close();
  });
});
