const prisma = require('../../common/db/prisma');

const createPost = async (title , content , userId)=>{
   const post = await prisma.post.create({
        data:{
            title,
            content,
            userId
        }
    });

    return post;
};

const getPostById = async (postId) => {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(postId),
        },
    });
    return post;
}

const deletePost = async (postId) => {
    const post = await prisma.post.delete({
        where: {
            id: Number(postId),
        },
    });
    return post;
}

const getPostsDetails = async () => {
    const posts = await prisma.post.findMany({
        select: {
            id:true,
            title:true,

            user:{
                select:{
                    id:true,
                    name:true,
                }
            },

            comments:{
                select:{
                    id:true,
                    content:true,
                }
            }
        }
    });
    return posts;
};

const getPostsCommentCount = async () => {
    const posts = await prisma.post.findMany({
        include: {
            _count: {
                select: {
                    comments: true
                }
            }
        }
    });

    return posts;
};



module.exports = {
    createPost,
    getPostById,
    deletePost,
    getPostsDetails,
    getPostsCommentCount,
}