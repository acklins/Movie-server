const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const UserSchema = new Schema({
	name:  {
    type: String,
    required: true,
    unique: true
  }, 
	email: {
    type: String,
    required: true },

    password: {
        type: String,
        required: true },

	movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie"
    }], 
})
const User = mongoose.model('User', UserSchema);

module.exports = User
