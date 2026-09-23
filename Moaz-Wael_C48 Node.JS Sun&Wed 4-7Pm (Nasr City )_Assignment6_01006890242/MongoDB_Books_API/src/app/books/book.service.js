const bookRepo = require('./book.repo');
const {sortByYear} = require("./book.repo");

const createBook = async (bookData) => {
    return await bookRepo.insertOneBook(bookData);
};

const createManyBooks = async(booksData) =>{
    if(booksData.length < 3){
        throw new Error("at least insert three books");
    }

    return await bookRepo.insertManyBooks(booksData);
};

const updateBookByTitle = async (title, updateFields) => {
    return await bookRepo.updateBookByTitle(title, updateFields);
};

const findBooksByTitle = async (title) => {
    return await bookRepo.getBookByTitle(title);
};

const findBooksByYearRange = async (from, to) => {
    return await bookRepo.getBooksFromTo(from, to);
};

const findBooksByGenres = async (genre) => {
    return await bookRepo.getBooksByGenres(genre);
};

const sortBooksByYear = async () => {
    return await bookRepo.sortByYear();
};

const findIntegerYears = async() => {
    return await bookRepo.getIntegerYears();
}

const findWithOutThis = async() => {
    return await bookRepo.getWithoutThisGenre();
};

const deleteBooksBefore = async (year) => {
    return await bookRepo.deleteBooksBefore(year);
};

const aggregateBooksAfter2000 = async () => {
    return await bookRepo.aggregateBooksAfter2000();
};

const aggregateBooksAfter2000Projection = async () => {
    return await bookRepo.aggregateBooksAfter2000Projection();
};

const aggregateGenres = async () => {
    return await bookRepo.aggregateGenres();
};

const aggregateBooksWithLogs = async () => {
    return await bookRepo.aggregateBooksWithLogs();
};

module.exports = {
    createBook,
    createManyBooks,
    updateBookByTitle,
    findBooksByTitle,
    findBooksByYearRange,
    findBooksByGenres,
    sortBooksByYear,
    findIntegerYears,
    findWithOutThis,
    deleteBooksBefore,
    aggregateBooksAfter2000,
    aggregateBooksAfter2000Projection,
    aggregateGenres,
    aggregateBooksWithLogs
}