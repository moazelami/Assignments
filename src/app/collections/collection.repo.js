const {getDB} = require('../../common/db/mongodb');



const createBooksCollections = async () => {
    const db = getDB();
    return await db.createCollection('books',{
        validator:{
            $jsonSchema:{
                bsonType:'object',
                required:['title'],
                properties: {
                    title:
                        {
                            bsonType: 'string',
                            minLength: 1,
                        }
                }
            }
        }
    });
};

const createAuthor = async (name ,nationality)=>{
    const db = getDB();
    return await db.collection('authors').insertOne({
        name,
        nationality,
    });
};

const createLogsCollection = async() =>{
    const db = getDB();
    return await db.createCollection('logs',{
        capped:true,
        size: 1024 * 1024
    });
};

const createBooksTitleIndex = async() =>{
    const db = getDB();
    return await db.collection('books').createIndex({title:1});
};



module.exports = {
    createBooksCollections,
    createAuthor,
    createLogsCollection,
    createBooksTitleIndex,
}