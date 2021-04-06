require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;


// middleware - JSON parsing
app.use(express.json());
app.use(cors());

//HTTP request logger every request the browser sends is logged in the console
// app.use(morgan('tiny'));

// middleware - API routes
app.use('/api/users', routes.users);
app.use('/api/movies', routes.movies);

//connection
app.listen(PORT, () => console.log(`server is starting at ${PORT}`));