const postController = require('./post.controller');
const {Router} = require('express');
const postRouter = new Router();

postRouter.post('/', postController.createPost);

postRouter.delete('/:postId', postController.deletePost);

postRouter.get('/details',postController.showPostsDetails);
postRouter.get('/comment-count' , postController.showPostsCommentCount);

module.exports = postRouter;