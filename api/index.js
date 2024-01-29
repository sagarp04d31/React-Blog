require("./utils/db.config.js");
const express = require('express');
const app = express();
const authRouter = require("./routers/auth.router.js");

app.use(express.json());

app.use("/api/", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message
  })
})

app.listen(3000, () => {
  console.log("Server is Running");
  console.log("http://localhost:3000")
})
