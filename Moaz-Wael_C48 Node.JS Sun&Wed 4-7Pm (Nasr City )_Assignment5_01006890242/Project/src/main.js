const {config} = require('dotenv');
config();
const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./app/users/user.route');
const postRouter = require("./app/posts/post.route");
const commentRouter = require("./app/comments/comment.route");



app.use(express.json());

app.use('/users', userRouter);

app.use('/posts',postRouter);

app.use('/comments' , commentRouter);

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: err.message
    });
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});