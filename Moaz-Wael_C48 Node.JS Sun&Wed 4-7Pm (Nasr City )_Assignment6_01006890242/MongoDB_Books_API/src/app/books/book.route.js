const bookController = require("./book.controller");

const {Router} = require("express");
const genreController = require("./book.service");
const router = new Router();

router.post('/', bookController.createBook);
router.post('/batch' , bookController.createManyBooks);

router.patch('/:title', bookController.updateBookByTitle);

router.get('/title', bookController.findBooksByTitle);
router.get('/year', bookController.findBooksByYearRange);
router.get('/genre' , bookController.findBooksByGenres);
router.get('/skip-limit',bookController.sortBooksByYear);
router.get('/year-integer',bookController.findIntegerYears);
router.get('/exclude-genres',bookController.findWithOutThis);
router.get('/aggregate1', bookController.aggregateBooksAfter2000);
router.get('/aggregate2',bookController.aggregateBooksAfter2000Projection);
router.get('/aggregate3', bookController.aggregateGenres);
router.get('/aggregate4', bookController.aggregateBooksWithLogs);

router.delete('/before-year',bookController.deleteBooksBefore);

module.exports = router;