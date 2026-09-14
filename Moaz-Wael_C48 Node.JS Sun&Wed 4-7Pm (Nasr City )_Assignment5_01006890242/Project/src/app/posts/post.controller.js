const postService = require('./post.service');

const createPost = async (req, res , next) => {
    try{
        const {title , content , userId} = req.body;

        const post = await postService.createPost(
            title,
            content,
            userId
        );

        res.status(201).json({
            "message": "Post created successfully",
        });
    }catch(err){
        next(err);
    }
};

const deletePost = async (req, res , next) => {
    try{
        const {postId } = req.params;
        const {userId} = req.body;

        const post = await postService.deletePost(userId,postId);
        res.status(200).json({
            "message": "Post deleted",
        })
    }catch(err){
        next(err);
    }
};

const showPostsDetails = async (req, res , next) => {
    try{
        const posts = await postService.showPostsDetails();

        res.status(200).json({
            posts
        })
    }catch(err){
        next(err);
    }
};

const showPostsCommentCount = async (req, res , next) => {
    try{
        const posts = await postService.showPostsCommentCount();
        res.status(200).json({
            posts
        })
    }catch(err){
        next(err);
    }
};

module.exports = {
    createPost,
    deletePost,
    showPostsDetails,
    showPostsCommentCount,
}