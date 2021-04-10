const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },

  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
