const fm = require("./fileManager");
const crypto = require("node:crypto");


const register = async function (userName, email, age) {
    try {
        if (!userName.trim()) {
            throw new Error("Name is required.");
        }

        if(!email.trim())
        {
            throw new Error('Invalid email address');
        }

        if (typeof age !== "number" || age <= 0)
        {
            throw new Error("invalid value");
        }
        const users =  fm.readUsers();
        email = email.toLowerCase().trim();
        const emailExists = users.find(user => user.email === email);
        if (emailExists) {
            throw new Error("Email already exists.");
        }
        const newUser = {
            id: crypto.randomUUID(),
            name: userName,
            age,
            email,
        }

        users.push(newUser);
        fm.writeUsers(users);
        return newUser;

    }catch(err){
        console.error(err.message);
        return null;
    }

}

const updateUser =  function(userId, updatedData){
    const users = fm.readUsers();
    const user = users.find(user => user.id === userId);

    if (!user)
        return null;

    const index = users.findIndex(user => user.id === userId);
    if(index === -1) return null;

    delete updatedData.id;

    users[index] = {
        ...users[index],
        ...updatedData
    }
    fm.writeUsers(users);

    return users[index];
}

const deleteUser = function(userId){
    const users = fm.readUsers();

    const updatedUsers = users.filter(user => user.id !== userId);
    if (updatedUsers.length === users.length)
        return null;

    fm.writeUsers(updatedUsers);
    return true;

}

const getAllUsers = function(){
    return fm.readUsers();
}

const getUserById =  function(userId){
    try{
        const users =  fm.readUsers();
        const user = users.find(user => user.id === userId);

        if (!user)
            return null;

        return user;
    }catch(err){
        console.error(err.message);
        return null;
    }
}
module.exports = {
    register,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
}