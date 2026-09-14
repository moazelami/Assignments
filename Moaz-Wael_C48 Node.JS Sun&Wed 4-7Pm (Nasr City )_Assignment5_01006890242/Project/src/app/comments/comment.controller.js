const commentService = require('./comment.service');

const createComments = async (req, res , next)=>{
    try{
        const {comments} = req.body;
        const createdComments  = await commentService.createComments(comments);

        res.status(201).json({
            message: 'Comments created',
        })
    }catch(err){
        next(err);
    }
};

const updateComment = async (req, res , next)=>{
    try{
        const {content , userId} = req.body;
        const updatedComment = await commentService.updateComment(userId , req.params.commentId ,content);
        res.status(201).json({
            message: 'Comment updated',
        })
    }catch(err){
        next(err);
    }
};

const findOrCreateComment = async (req, res, next) => {
    try {
        const { content, postId, userId } = req.body;

        const comment = await commentService.findOrCreateComment(
            content,
            postId,
            userId
        );

        res.status(200).json({
            comment
        });
    } catch (err) {
        next(err);
    }
};

const searchComments = async (req, res, next) => {
    try {
        const { word } = req.query;

        const result = await commentService.searchComments(word);

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getNewestComments = async (req, res, next) => {
    try {
        const { postId } = req.params;

        const comments = await commentService.getNewestComments(postId);

        res.status(200).json({
            comments
        });
    } catch (err) {
        next(err);
    }
};

const getCommentDetails = async (req, res, next) => {
    try {
        const { id } = req.params;

        const comment = await commentService.getCommentDetails(id);

        res.status(200).json({
            comment
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createComments,
    updateComment,
    findOrCreateComment,
    searchComments,
    getNewestComments,
    getCommentDetails,
}