const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const MovieSchema = new Schema({
	name:  {
    type: String,
    required: true,
    unique: true
  }, 
	title: {
    type: String,
    required: true },

    description: {
        type: String,
        required: true },
        
    genre: {
            type: String,
            required: true },

    img: {
        type: String 
    },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"
    }],
})
const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie
