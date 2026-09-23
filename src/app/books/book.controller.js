const bookService = require('./book.service');
const {getIntegerYears} = require("./book.repo");

const createBook = async (req , res , next) => {
    try{
        const result = await bookService.createBook(req.body);

        res.status(201).json(result);
    }catch(err){
        next(err);
    }
};

const createManyBooks = async (req , res , next) => {
    try{
        const result = await bookService.createManyBooks(req.body);
        res.status(201).json({result});
    }catch(err){
        next(err);
    }
};

const updateBookByTitle = async (req, res, next) => {
    try {
        const { title } = req.params;
        const result = await bookService.updateBookByTitle(title, req.body);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const findBooksByTitle = async (req, res, next) => {
    try{
        const {title} = req.query;
        const result = await bookService.findBooksByTitle(title);
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
};

const findBooksByYearRange = async (req, res, next) => {
    try {
        const from = Number(req.query.from);
        const to = Number(req.query.to);
        const result = await bookService.findBooksByYearRange(from, to);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const findBooksByGenres = async (req, res, next) => {
    try{
        const {genre} = req.query;
        const result = await bookService.findBooksByGenres(genre);
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
};

const sortBooksByYear = async (req, res, next) => {
    try{
        const result = await bookService.sortBooksByYear();
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
};

const  findIntegerYears = async (req, res, next) => {
    try{
        const result = await bookService.findIntegerYears();
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
};

const findWithOutThis = async (req, res, next) => {
    try{
        const result = await bookService.findWithOutThis();
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
};

const deleteBooksBefore = async (req, res, next) => {
    try{
        const {year} = req.query;
        const result = await bookService.deleteBooksBefore(year);
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
};

const aggregateBooksAfter2000 = async (req, res, next) => {
    try {
        const result = await bookService.aggregateBooksAfter2000();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const aggregateBooksAfter2000Projection = async (req, res, next) => {
    try {
        const result =
            await bookService.aggregateBooksAfter2000Projection();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const aggregateGenres = async (req, res, next) => {
    try {
        const result = await bookService.aggregateGenres();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const aggregateBooksWithLogs = async (req, res, next) => {
    try {
        const result = await bookService.aggregateBooksWithLogs();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
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
};