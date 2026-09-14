const userService = require('./user.service');

const signup = async (req , res ,next) => {
    try{
        const {userName , email ,password} = req.body;
        const user = await userService.signup(
            userName,
            email,
            password,
        );
        res.status(201).json({
            success: true,
            message: 'User added successfully.',
            user
        });
    }catch (err){
        next(err);
    }
};

const upsertUser = async (req, res, next) => {
    try {
        const { name, email} = req.body;

        const user = await userService.upsertUser(
            req.params.id,
            name,
            email
        );

        res.status(200).json({
            message: 'User created or updated successfully',
            user
        });
    } catch (err) {
        next(err);
    }
};

const findByEmail = async (req, res, next) => {
    try{
        const {email} = req.query;
        const user = await userService.findByEmail(email);
        res.status(200).json({
            user
        })
    }catch(err){
        next(err);
    }
}

const findUserById = async (req, res, next) => {
    try {
        const {id} = req.params;

        const user = await userService.findUserById(id);

        res.status(200).json({
            user
        });
    }catch(err){
        next(err);
    }
}

module.exports = {
    signup,
    upsertUser,
    findByEmail,
    findUserById,
}