const logService = require('./log.service');

const createLog = async (req, res , next) => {
    try{
        const {bookId , action} = req.body;
        const log = await logService.createLog(bookId , action);
        res.status(200).json(log);
    }catch(err){
        next(err);
    }
};

module.exports = {
    createLog,
}