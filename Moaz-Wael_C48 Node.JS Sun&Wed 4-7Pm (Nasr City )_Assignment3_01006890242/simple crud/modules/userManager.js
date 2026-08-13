const fm = require("./fileManager");
const bcrypt = require("bcrypt");

// getUserById
const getUserById =   function(userId){
    try{
        const users =    fm.readUsers();
        const user = users.find(user => user.id === userId);

        if (!user)
            return null;

        const{ password: hashedPasswordField, ...safeUser} = user;
        return safeUser;
    }catch(err){
        console.error(err.message);
        return null;
    }
}

// getAllUsers
const getAllUsers =   function(){
    let users =    fm.readUsers();
    users = users.map(user =>{
        const { password: hashedPasswordField , ...newUser} = user;
        return newUser;
    });

    return users;
}

// updateUser
const updateUser =   function(userId, updatedData){
    const users =    fm.readUsers();
    const user = users.find(user => user.id === userId);

    if (!user)
        return null;

    const index = users.findIndex(user => user.id === userId);
    if(index === -1) return null;

    delete updatedData.id;
    delete updatedData.password;

    users[index] = {
        ...users[index],
        ...updatedData
    }
       fm.writeUsers(users);
    const { password: hashedPasswordField, ...safeUser} = users[index];

    return safeUser;
}
// deleteUser
const deleteUser =   function(userId){
    const users =    fm.readUsers();

    const updatedUsers = users.filter(user => user.id !== userId);
    if (updatedUsers.length === users.length)
        return null;

       fm.writeUsers(updatedUsers);
    return true;

}

const addUser = async function (userName , age , email ,password , isAdmin = false) {
    try {
        if (!userName.trim()) {
            throw new Error("Name is required.");
        }

        if(!email.trim())
        {
            throw new Error('Invalid email address');
        }

        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters');

        }
        const users =   fm.readUsers();
        email = email.toLowerCase().trim();
        const emailExists = users.find(user => user.email === email);
        if (emailExists) {
            throw new Error("Email already exists.");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const lastId = users.length > 0
            ? Math.max(...users.map(user => user.id))
            : 0;
        const newUser = {
            id: crypto.randomUUID(),
            name: userName,
            age,
            email,
            password: hashedPassword,
            isAdmin,
        }

        users.push(newUser);
        fm.writeUsers(users);
        const {  password: hashedPasswordField, ...safeUser } = newUser;
        return safeUser;

    }catch(err){
        console.error(err.message);
        return null;
    }

}

const getUserByName = function(name){
    const users = fm.readUsers();

    const user = users.find(user =>
        user.name.toLowerCase() === name.toLowerCase()
    );

    if (!user)
        return null;

    const{ password: hashedPasswordField, ...safeUser} = user;
    return safeUser;
}

const filterByAge = function(minAge){
    const users = fm.readUsers();

    const filteredUsers = users.filter(user => user.age >= minAge);

    return filteredUsers.map(user =>{
        const { password: hashedPasswordField , ...safeUser} = user;
        return safeUser;
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addUser,
    getUserByName,
    filterByAge
}







