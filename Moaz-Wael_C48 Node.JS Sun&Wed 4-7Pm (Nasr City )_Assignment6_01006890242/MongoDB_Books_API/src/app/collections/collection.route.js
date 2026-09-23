const {Router} = require('express');
const collectionController = require('./collection.controller');

const router = new Router();

router.post(
    '/books',
    collectionController.createBooksCollection
);
router.post(
    '/authors',
    collectionController.createAuthor
);
router.post(
    '/logs/capped',
    collectionController.createLogsCollection
);
router.post(
    '/books/index',
    collectionController.createBooksTitleIndex
);
module.exports = router;