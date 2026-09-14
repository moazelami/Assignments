const prisma = require('../../common/db/prisma');

const createComments = async (comments) => {
    const result = await prisma.comment.createMany({
        data: comments
    });

    return result;
};

const getCommentById = async (commentId) => {
    const comment = await prisma.comment.findUnique({
        where: {
            id: Number(commentId)
        },

    });
    return comment;
};

const updateComment = async (commentId, content) => {
    const updatedComment = await prisma.comment.update({
        where: {
            id: Number(commentId)
        },
        data: {
            content
        }
    });
    return updatedComment;
};

const findOrCreateComment = async (content, postId, userId) => {
    let comment = await prisma.comment.findFirst({
        where: {
            content,
            postId: Number(postId),
            userId: Number(userId)
        }
    });

    if (!comment) {
        comment = await prisma.comment.create({
            data: {
                content,
                postId: Number(postId),
                userId: Number(userId)
            }
        });
    }

    return comment;
};

const searchComments = async (word) => {
    const comments = await prisma.comment.findMany({
        where: {
            content: {
                contains: word,
                mode: 'insensitive'
            }
        }
    });

    return {
        comments,
        count: comments.length
    };
};

const getNewestComments = async (postId) => {
    return await prisma.comment.findMany({
        where: {
            postId: Number(postId)
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 3
    });
};

const getCommentDetails = async (id) => {
    return await prisma.comment.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            content: true,
            createdAt: true,

            user: {
                select: {
                    id: true,
                    name: true
                }
            },

            post: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    });
};

module.exports = {
    createComments,
    getCommentById,
    updateComment,
    findOrCreateComment,
    searchComments,
    getNewestComments,
    getCommentDetails,
}