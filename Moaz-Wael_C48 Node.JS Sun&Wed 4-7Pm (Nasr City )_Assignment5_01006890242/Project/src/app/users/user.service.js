const userRepo = require('./user.repo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signup = async function (userName, email, password) {

    if (!userName || !email || !password)
        throw new Error("All fields are required");

    const existingUser = await userRepo.getUserByEmail(email);

    if (existingUser)
        throw new Error('Email already exists');

    if (password.length < 8)
        throw new Error('Password must be at least 8 characters');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepo.createUser(
        userName,
        email,
        hashedPassword
    );

    return user;
};

const upsertUser = async (id, name, email) => {
    return await userRepo.createOrUpdateUser(
        id,
        name,
        email,
    );
};

const findByEmail = async (email) => {
    const userExists = await userRepo.getUserByEmail(email);
    if(!userExists)
        throw new Error('no user found');

    return userExists;
};

const findUserById = async (id) => {
    const existingUser = await userRepo.getUserById(id);
    if(!existingUser)
        throw new Error('no user found');

    return existingUser;
};

module.exports = {
    signup,
    upsertUser,
    findByEmail,
    findUserById,
}