const express = require('express');
const router = express.Router();
const Gifs = require('../models/Gifs');

//INDEX/READ ROUTE
router.get('/', (req, res) => {
  Gifs.find({}).then(gif => res.json(gif));
});

//CREATE ROUTE
router.post('/', (req, res) => {
  const newGif = req.body;
  Gifs.create(newGif).then(gif => res.json('/'));
});

//UPDATE ROUTE pt. 1
router.put('/:gifId', (req, res) => {
  Gifs.findOneAndUpdate({ _id: req.params.gifId }, req.body, {
    new: true
  }).then(gif => res.redirect('/'));
});

//DELETE ROUTE
router.delete('/:gifId', (req, res) => {
  Gifs.findOneAndDelete({ _id: req.params.gifId }).then(gif =>
    res.redirect('/')
  );
});

module.exports = router;
