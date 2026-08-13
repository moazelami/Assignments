const express = require('express');
const app = express();
const userManager = require('./modules/userManager');
app.use(express.json());
const PORT = 3000;
app.get('/user', (req, res) => {
    try {
        const users =  userManager.getAllUsers();
        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully.',
            data: users
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.get('/user/filter', (req, res) => {
    const { minAge } = req.query;

    try{
        const users = userManager.filterByAge(minAge);

        return res.status(200).json({
            success: true,
            message: "Users filtered successfully.",
            data: users
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    try{
        const user =  userManager.getUserById(id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User retrieved successfully.",
            data: user
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });    }
});

app.post('/user', async (req, res) => {
    const {name ,age, email , password , isAdmin} = req.body;
    try {
        const newUser =  await userManager.addUser(
            name,
            age,
            email,
            password,
            isAdmin,
        );
        if (!newUser) {
            return res.status(400).json({
                success: false,
                message: "User not created"
            });
        }
        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            data: newUser
        });

    }catch (err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


app.patch('/users/:id',(req, res) => {
    const id = req.params.id;
    const {name ,age, email , isAdmin} = req.body;
    try{
        const updatedUser =      userManager.updateUser(
            id,
            {
                name,
                age,
                email,
                isAdmin,
            }
        );

        if(!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User updated successfully.",
            data: updatedUser
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    try {
        const delUser =      userManager.deleteUser(id);
        if(!delUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User deleted successfully."
        });
    }catch (err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.get('/user/getByName/:name', (req, res) => {
    const name = req.params.name;

    try{
        const user = userManager.getUserByName(name);

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User retrieved successfully.",
            data: user
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});




app.listen(PORT , ()=>{
    console.log(`Server listening on port ${PORT}....`);
});

