const db = require("../models");

const index = (req, res) => {
  db.Movie.find({}, (err, foundMovie) => {
    if (err) console.log("Error in movies#index:", err);

    res.json(foundMovie);
  });
};

const show = (req, res) => {
  db.Movie.findById(req.params.id, (err, foundMovie) => {
    if (err) console.log("Error in movies#show:", err);
    res.json(foundMovie);
  });
};

const create = (req, res) => {
  db.Movie.create(req.body, (err, savedMovie) => {
    if (err) console.log("Error in movies#create:", err);
    res.json(savedMovie);
  });
};

const update = (req, res) => {
  db.Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedMovie) => {
      if (err) console.log("Error in movies#update:", err);
      res.json(updatedMovie);
    }
  );
};

const destroy = (req, res) => {
  db.Movie.findByIdAndDelete(req.params.id, (err, deletedMovie) => {
    if (err) console.log("Error in movies#destroy:", err);

    res.json(deletedMovie);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
