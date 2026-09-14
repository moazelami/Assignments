const commentController = require('./comment.controller');

const {Router} = require('express');

const commentRouter = new Router();

commentRouter.post('/' , commentController.createComments);
commentRouter.post('/find-or-create', commentController.findOrCreateComment);

commentRouter.patch('/:commentId' , commentController.updateComment);

commentRouter.get('/search', commentController.searchComments);
commentRouter.get('/newest/:postId', commentController.getNewestComments);
commentRouter.get('/details/:id', commentController.getCommentDetails);


module.exports = commentRouter;