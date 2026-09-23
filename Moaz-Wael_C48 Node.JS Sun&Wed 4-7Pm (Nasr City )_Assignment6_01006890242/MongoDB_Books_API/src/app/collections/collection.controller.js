const collectionService = require('./collection.service');

const createBooksCollection = async (req, res, next) => {
    try {
        const result = await collectionService.createBooksCollection();

        res.status(201).json({
            ok: result.ok
        });
    } catch (error) {
        next(error);
    }
};


const createAuthor = async (req, res, next) => {
    try {
        const { name, nationality } = req.body;

        const result = await collectionService.createAuthor(
            name,
            nationality
        );

        res.status(201).json({
            acknowledged: result.acknowledged,
            insertedId: result.insertedId
        });
    } catch (error) {
        next(error);
    }
};

const createLogsCollection = async (req, res, next) => {
    try {
        const result = await collectionService.createLogsCollection();

        res.status(201).json({
            ok: result.ok
        });
    } catch (error) {
        next(error);
    }
};

const createBooksTitleIndex = async (req, res, next) => {
    try {
        const result = await collectionService.createBooksTitleIndex();

        res.status(201).json({
            result
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBooksCollection,
    createAuthor,
    createLogsCollection,
    createBooksTitleIndex,
};