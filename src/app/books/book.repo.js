const {getDB} = require('../../common/db/mongodb');


const insertOneBook = async (bookData) => {
    const db = getDB();
    return await db.collection('books').insertOne(bookData);
};

const insertManyBooks = async (booksData) => {
    const db = getDB();
    return await db.collection('books').insertMany(booksData);
};

const updateBookByTitle = async (title , updateFields) => {
    const db = getDB();
    return await db.collection('books').updateOne({title} , {$set: updateFields});
};

const getBookByTitle = async (title) => {
    const db = getDB();
    return await db.collection('books').findOne({title});
};

const getBooksFromTo = async (from,to) => {
    const db = getDB();
    return await db.collection('books').find({year:{$gte:from , $lte:to}}).toArray();
};

const getBooksByGenres = async (genre) => {
    const db = getDB();
    return await db.collection('books').find({genres :genre}).toArray();
};

const sortByYear = async ()=>{
    const db = getDB();
    return await db.collection('books').find({}).sort({year:-1}).skip(2).limit(3).toArray();
};

const getIntegerYears = async ()=>{
    const db = getDB();
    return await db.collection('books').find({year: {$type:"int"}}).toArray();
};

const getWithoutThisGenre = async () => {
    const db = getDB();
    return await db.collection('books').find(
        {genre:{
            $nin:["Horror","Science Fiction"]
        }
        }).toArray();
};

const deleteBooksBefore = async (year) => {
    const db = getDB();
    return await db.collection('books').deleteMany({year:{$lte:Number(year)}});
};

const aggregateBooksAfter2000 = async () => {
    const db = getDB();

    return await db.collection('books').aggregate([
        {
            $match: {
                year: { $gt: 2000 }
            }
        },
        {
            $sort: {
                year: -1
            }
        }
    ]).toArray();
};

const aggregateBooksAfter2000Projection = async () => {
    const db = getDB();

    return await db.collection('books').aggregate([
        {
            $match: {
                year: { $gt: 2000 }
            }
        },
        {
            $project: {
                _id: 0,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]).toArray();
};

const aggregateGenres = async () => {
    const db = getDB();

    return await db.collection('books').aggregate([
        {
            $unwind: '$genres'
        }
    ]).toArray();
};

const aggregateBooksWithLogs = async () => {
    const db = getDB();

    return await db.collection('books').aggregate([
        {
            $lookup: {
                from: 'logs',
                let: {
                    bookId: { $toString: '$_id' }
                },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ['$book_id', '$$bookId']
                            }
                        }
                    }
                ],
                as: 'logs'
            }
        }
    ]).toArray();
};

module.exports = {
    insertOneBook,
    insertManyBooks,
    updateBookByTitle,
    getBookByTitle,
    getBooksFromTo,
    getBooksByGenres,
    sortByYear,
    getIntegerYears,
    getWithoutThisGenre,
    deleteBooksBefore,
    aggregateBooksAfter2000,
    aggregateBooksAfter2000Projection,
    aggregateGenres,
    aggregateBooksWithLogs
};