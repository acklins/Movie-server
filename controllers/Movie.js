const db = require('../models');

const index = (req, res) => {
  db.Movie.find({}, (err, foundMovies) => {
      if (err) console.log('Error in movies#index:', err);

      res.send("Incomplete movies#index controller function");
  });
};

const show = (req, res) => {
  db.Movie.findById(req.params.id, (err, foundMovie) => {
      if (err) console.log('Error in movies#show:', err);

      res.send("Incomplete moviess#show controller function");
  });
};

const create = (req, res) => {
  db.Movie.create(req.body, (err, savedMovie) => {
      if (err) console.log('Error in movies#create:', err);

      res.send("Incomplete movies#create controller function");
  });
};

const update = (req, res) => {
  db.Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMovie) => {
      if (err) console.log('Error in movies#update:', err);

      res.send("Incomplete movies#update controller function");
  });
};

const destroy = (req, res) => {
  db.Movie.findByIdAndDelete(req.params.id, (err, deletedMovie) => {
      if (err) console.log('Error in movies#destroy:', err);

      res.send("Incomplete movies#destroy controller function");
  });
};


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
