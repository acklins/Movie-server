require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware - JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //from form to body conversion
app.use(cors());

// middleware - API routes
app.use("/api/users", routes.users);
app.use("/api/movies", routes.movies);

//connection
app.listen(PORT, () => console.log(`server is starting at ${PORT}`));
