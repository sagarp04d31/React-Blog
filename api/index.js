const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('./models/users.js')
const dotenv = require('dotenv');
dotenv.config();

// Required Database Connection

mongoose
  .connect(process.env.MONGODB_URL)
  .then(
    console.log("MongoDB is Connected")
  )
  .catch((err) => {
    console.log(err);
  })

const sayHello = (req, res, next) => {
  res.json({
    name: "Sagar Poudel",
    address: "Butwal"
  })
}

app.get("/", sayHello);

app.listen(3000, () => {
  console.log("Server is Running");
  console.log("http://localhost:3000")
})
