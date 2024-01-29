const User = require("../models/users.models.js");
const bcrypt = require("bcryptjs");

function sayHello(req, res) {
  res.send("From New Router");
}

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const hashPass = bcrypt.hashSync(password, 10);

  if(!username || !email || !password || username === '' || email === '' || password === '') {
    res.json({message: "Fields Empty"})
  }

  const user = new User({
    username,
    email,
    password: hashPass,
  });

  try {
    await user.save();
    res.status(200).json({
      message: "Signup Successful",
      username,
      email,
      hashPass,
    })
  } catch(error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = { sayHello, signup };
