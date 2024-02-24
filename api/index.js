require("./utils/db.config.js");
const express = require('express');
const app = express();
const authRouter = require("./routers/auth.router.js");
const userRouter = require("./routers/user.router.js");
const postRouter = require("./routers/post.router.js");
const commentRouter = require("./routers/comment.route.js");
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

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
