const {getDB} = require('../../common/db/mongodb');
const {ObjectId} = require("mongodb");

const insertLog = async (id , action)=>{
    const db = getDB();
    return await db.collection('logs').insertOne({book_id: id, action});
};

const findBookById = async (id) => {
    const db = getDB();
    return await db.collection('books').findOne({_id: new ObjectId(id)});
};



module.exports = {
    insertLog,
    findBookById,
};