const userController = require('./user.controller');
const {Router} = require('express');
const userRouter = new Router();

userRouter.post('/signup', userController.signup);

userRouter.put('/:id',userController.upsertUser);

userRouter.get('/by-email' , userController.findByEmail);
userRouter.get('/:id',userController.findUserById);


module.exports = userRouter;