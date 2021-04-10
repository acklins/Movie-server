const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
