const prisma = require('../../common/db/prisma');

// for signup ==>> /*createUser , getUserByEmail*/
const getUserByEmail = async (email)=>{
    const user = await prisma.user.findUnique({
        where: {email:email},
        omit: {password: true},
    });

    return user;
};

const createUser = async (userName,email, hashedPassword)=>{
    const user = await prisma.user.create({
        data: {
            name: userName,
            email: email,
            password: hashedPassword
        },
        omit: {password: true},
    });

    return user;
};

const createOrUpdateUser = async (id , userName , email)=>{
    const user = await prisma.user.upsert({
        where: {
            id : Number(id)
        },
        update: {
            name: userName,
            email,
        },
        create:{
            name: userName,
            email
        }
    });
    return user;
};

const getUserById = async (id)=>{
    const user = await prisma.user.findUnique({
        where: {id : Number(id)},
        omit: {role: true},
    });

    return user;
};


module.exports = {
    getUserByEmail,
    createUser,
    createOrUpdateUser,
    getUserById,
}