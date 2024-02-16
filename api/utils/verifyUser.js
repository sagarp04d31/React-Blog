const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error.js");

function verifyUser(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    console.log("No Token");
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
}

module.exports = verifyUser;
