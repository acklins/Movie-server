const db = require('../models');

const index = (req, res) => {
    db.User.find({}, (err, foundMovies) => {
        if (err) console.log('Error in movies#index:', err);

        res.send("Incomplete movies#index controller function");
    });
};

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundMovie) => {
        if (err) console.log('Error in movies#show:', err);

        res.send("Incomplete movies#show controller function");
    });
};

const create = (req, res) => {
    db.User.create(req.body, (err, savedMovies) => {
        if (err) console.log('Error in movies#create:', err);

        res.send("Incomplete movies#create controller function");
    });
};

module.exports = {
    index,
    show,
    create,
};