const mongoose = require('../db/connection');



const GifSchema = new mongoose.Schema({
  name: String,
  url: String
});

const Gifs = mongoose.model('Gifs', GifSchema);

module.exports = Gifs;
