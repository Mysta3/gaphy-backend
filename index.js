const express = require('express');
const app = express();

//link controllers to index
const gifsController = require('./controllers/gifs');
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json()); //converts req to JSON
app.use(express.urlencoded({ extended: true }));

app.use('/gifs', gifsController);
app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () =>
  console.log(` ✅ PORT: ${app.get('port')} 🔥 `)
);
