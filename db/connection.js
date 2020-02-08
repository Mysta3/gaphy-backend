const mongoose = require('mongoose');

mongoose.Promise = Promise;
let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/gifs';
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(conn => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`);
  })
  .catch(err => {
    console.error(err);
  });

module.exports = mongoose;
