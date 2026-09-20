const {getDB} = require('../../common/db/mongodb');

const db = getDB();

const createBooksCollections = async () => {
    return await db.createCollection('books',{
        validator:{
            $jsonSchema:{
                bsonType:'object',
                required:['title'],
                properties: {
                    bsonType:'string',
                    minLength:1,
                }
            }
        }
    });
};

const createAuthor = async (name ,nationality)=>{
    return await db.collection('authors').insertOne({
        name,
        nationality,
    });
};

const createLogsCollection = async() =>{
    return await db.createCollection('logs',{
        capped:true,
        size: 1024 * 1024
    });
};

module.exports = {
    createBooksCollections,
    createAuthor,
    createLogsCollection,
}