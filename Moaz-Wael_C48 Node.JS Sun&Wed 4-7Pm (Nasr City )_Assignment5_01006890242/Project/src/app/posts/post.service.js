const postRepo = require('./post.repo');

const createPost = async (title, content, userId) => {
    return await postRepo.createPost(title, content, userId);
};

const deletePost = async (userId , postId) => {
    const postExists = await postRepo.getPostById(postId);
    if(!postExists){
        throw new Error('post not found');
    }

    if (!(postExists.userId === Number(userId))) {
        throw new Error('You are not authorized to delete post.');
    }

    return  await postRepo.deletePost(postId);

};

const showPostsDetails = async () => {
    return await postRepo.getPostsDetails();
};

const showPostsCommentCount = async () => {
    return await postRepo.getPostsCommentCount();
};

module.exports = {
    createPost,
    deletePost,
    showPostsDetails,
    showPostsCommentCount,
}