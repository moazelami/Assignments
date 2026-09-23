const collectionRepo = require('./collection.repo');

const createBooksCollection =async() => {
    return await collectionRepo.createBooksCollections();
};

const createAuthor = async(name , nationality) => {
    return await collectionRepo.createAuthor(name, nationality);
};

const createLogsCollection = async () => {
    return await collectionRepo.createLogsCollection();
};

const createBooksTitleIndex = async () => {
    return await collectionRepo.createBooksTitleIndex();
};

module.exports = {
    createBooksCollection,
    createAuthor,
    createLogsCollection,
    createBooksTitleIndex,
};