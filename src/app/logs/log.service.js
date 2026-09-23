const logRepo = require('./log.repo');

const createLog = async (bookId , action) => {
    const book = await logRepo.findBookById(bookId);
    if (!book) {
        throw new Error('Book not found');
    }

    return await logRepo.insertLog(bookId , action);
};

module.exports = {
    createLog,
}