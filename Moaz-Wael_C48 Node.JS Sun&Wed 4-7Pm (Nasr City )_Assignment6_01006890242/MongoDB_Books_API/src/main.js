const { config } = require('dotenv');
config();

const express = require('express');
const { connectDB } = require('./common/db/mongodb');

const app = express();

const collectionRouter  = require('./app/collections/collection.route');
const bookRouter = require('./app/books/book.route');
const logRouter = require('./app/logs/log.route');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/collections', collectionRouter);
app.use('/books', bookRouter);
app.use('/logs', logRouter);


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server running on port ' + PORT);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

// Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        success: false,
        stack: err.stack,
    });
});