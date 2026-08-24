const adminService = require('./admin.service');

const addCategoryColumn = async (req, res, next) => {
    try {
        const result = await adminService.addCategoryColumn();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const dropCategoryColumn = async (req, res, next) => {
    try {
        const result = await adminService.dropCategoryColumn();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const changeContactNumberType = async (req, res, next) => {
    try {
        const result = await adminService.changeContactNumberType();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const setProductNameNotNull = async (req, res, next) => {
    try {
        const result = await adminService.setProductNameNotNull();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addCategoryColumn,
    dropCategoryColumn,
    changeContactNumberType,
    setProductNameNotNull
};
