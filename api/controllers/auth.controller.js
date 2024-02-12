const User = require("../models/users.models.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error.js");
const dotenv = require("dotenv");
dotenv.config();

function sayHello(req, res) {
  res.send("From New Router");
}

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashPass = bcrypt.hashSync(password, 10);

  if(!username || !email || !password || username === '' || email === '' || password === '') {
    // res.status(400).json({message: "Fields Empty"});
    next(errorHandler(400, "Fields Empty"));
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
    next(error);
    // res.status(500).json({message: error.message})
  }
}

const signin = async (req, res, next) => {
  const payload = req.body;
  const { email, password } = { ...payload };
  const validUser = await User.findOne({ email });
  if(!validUser) {
    return next(errorHandler(500, "User Not Found"));
  }
  const validPassword = bcrypt.compareSync(password, validUser.password);
  if(!validPassword) {
    return next(errorHandler(500, "Password Not Valid"));
  }
  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
  const {password: pass, ...rest} = validUser._doc;
  res
    .status(200)
    .cookie('access-token', token, {
      httpOnly: true,
    })
    .json(rest);
}

const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const genPass = 
        Math.random().toString(36).slice(-8) + 
        Math.random().toString(36).slice(-8);
      const hashPassword = bcrypt.hashSync(genPass, 10);
      const newUser = new User({
        username: 
          name.toLowerCase().split(' ').join('') + 
          Math.random().toString(9).slice(-4),
        email,
        password: hashPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.token({id: newUser._id}, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { sayHello, signup, signin, google };
