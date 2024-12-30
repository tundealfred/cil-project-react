"use strict";

// express is a server library
const express = require("express");

// library that determines who is allowed to speak to our server
const cors = require("cors");

// this library lets us access our .env file
require("dotenv").config();

// initalizes the express library
const app = express();

// we are getting the port variable from the .env file.
const PORT = process.env.PORT || 8080;

// this settting says that everyone is allowed to speak to our server
app.use(cors());

// this is a route. if you turn the server on and go to http://localhost:3001/ (or whatever port you specified in your .env), you will see 'hello from the home route'
app.get("/", (request, response) => {
  response.send("hello from the home route");
});

// this turns the server on to the port that you specifed in your .env file
app.listen(PORT, () => console.log(`listening on ${PORT}`));
