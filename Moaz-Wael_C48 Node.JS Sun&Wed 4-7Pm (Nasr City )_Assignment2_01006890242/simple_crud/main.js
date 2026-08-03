const userManager = require('./modules/userManager');
const sendResponse = require('./utils/sendResponse');
const http = require('node:http');

const server = http.createServer((req, res) => {
    const {url , method} = req;
    const id = url.split('/')[2];
    if(method === 'GET' && url ==='/user'){
        try {
            const users = userManager.getAllUsers();
            return sendResponse(res, 200, true , "Users retrieved successfully." , users);
        }catch (err){
            return sendResponse(res, 500, false,
                 err.message);
        }
    }else if(method === 'GET' && url.startsWith('/user/')){
       try {
           if (!id) {
               return sendResponse(res, 400, false , "Invalid user id."
               );
           }
           const user = userManager.getUserById(id);
           if(!user){
               return sendResponse(res, 404, false, "User not found"
               );
           }
           return sendResponse(res, 200, true , "User retrieved successfully." , user);
       }catch (err){
          return  sendResponse(res, 400,false , err.message
           );
       }
    }else if(method === 'POST' && url === '/user'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;

        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);

                const newUser = userManager.register(
                    data.name,
                    data.email,
                    data.age
                );
                if (!newUser) {
                    return sendResponse(res, 400, false,"Failed to create user.");
                }

                return sendResponse(res, 201, true, "User added successfully." , newUser);

            } catch (err) {
                return sendResponse(res, 400, false,
                    err.message
                );
            }
        });
    }else if(method === 'PATCH' && url.startsWith('/user/')){
        let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
            try {
                if (!id) {
                    return sendResponse(res, 400, false,
                         "Invalid user id."
                    );
                }

                const data = JSON.parse(body);
                if (
                    data.name === undefined &&
                    data.age === undefined &&
                    data.email === undefined
                ) {
                    throw new Error("No valid fields to update.");
                }
                const updatedUser = userManager.updateUser(id,data);
                if (!updatedUser) {
                    return sendResponse(res, 404, false,
                        "User not found"
                    );
                }
                return sendResponse(res, 200, true ,  `User updated successfully.`);
            }
            catch(err)
            {
                return sendResponse(res, 400, false , err.message);
            }
            });
    }else if(method === 'DELETE' && url.startsWith('/user/')){
        try{
            if (!id) {
                return sendResponse(res, 400, false ,
                    "Invalid user id."
                );
            }

            const user = userManager.deleteUser(id);
            if(!user){
                return sendResponse(res, 404, false ,
                     "User not found"
                );
            }
            return sendResponse(res, 200, true, "User deleted successfully."
            );
        }catch (err){
                return sendResponse(res, 400, false , err.message);
        }
    }else{
        return sendResponse(res,404,false ,
            "Route not found"
        );
    }
});

server.listen(3000);