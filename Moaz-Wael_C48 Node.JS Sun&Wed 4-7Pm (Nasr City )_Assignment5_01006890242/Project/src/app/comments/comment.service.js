const commentRepo = require('./comment.repo');
const {getCommentById} = require("./comment.repo");

const createComments = async (comments) => {
    if(!comments){
        throw new Error('No comments provided');
    }
    const createdComments = await commentRepo.createComments(comments);
    return createdComments;
};

const updateComment = async ( userId,commentId, content) => {
    const commentExists = await commentRepo.getCommentById(commentId);
    if(!commentExists){
        throw new Error('Comment not found');
    }

    if(commentExists.userId !== Number(userId)){
        throw new Error('You are not Authorize to update comment');
    }

    const updatedComment = await commentRepo.updateComment(commentId, content);
    return updatedComment;
};

const findOrCreateComment = async (content, postId, userId) => {
    return await commentRepo.findOrCreateComment(
        content,
        postId,
        userId
    );
};

const searchComments = async (word) => {
    return await commentRepo.searchComments(word);
};

const getNewestComments = async (postId) => {
    return await commentRepo.getNewestComments(postId);
};

const getCommentDetails = async (id) => {
    const comment = await commentRepo.getCommentDetails(id);

    if (!comment) {
        throw new Error('Comment not found');
    }

    return comment;
};
module.exports = {
    createComments,
    updateComment,
    findOrCreateComment,
    searchComments,
    getNewestComments,
    getCommentDetails,
}