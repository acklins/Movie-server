const db = require("../models");

const index = (req, res) => {
  db.User.find({}, (err, foundUser) => {
    if (err) console.log("Error in users#index:", err);
    res.json(foundUser);
  });
};

const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if (err) console.log("Error in users#show:", err);
    res.json(foundUser);
  });
};

const create = (req, res) => {
  console.log("creating user", req.body);
  db.User.create(req.body, (err, savedUser) => {
    if (err) console.log("Error in users#create:", err);
    res.json(savedUser);
  });
};

const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) console.log("Error in users#update:", err);
      res.json(updatedUser);
    }
  );
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) console.log("Error in users#destroy:", err);

    res.json(deletedUser);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
