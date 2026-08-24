const reportRepository = require('./report.service');

const getTotalQuantitySoldPerProduct = async (req, res, next) => {
    try {
        const result = await reportRepository.getTotalQuantitySoldPerProduct();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getProductWithHighestStock = async (req, res, next) => {
    try {
        const result = await reportRepository.getProductWithHighestStock();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getSuppliersStartingWithF = async (req, res, next) => {
    try {
        const result = await reportRepository.getSuppliersStartingWithF();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getNeverSoldProducts = async (req, res, next) => {
    try {
        const result = await reportRepository.getNeverSoldProducts();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getAllSalesWithProductDetails = async (req, res, next) => {
    try {
        const result = await reportRepository.getAllSalesWithProductDetails();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTotalQuantitySoldPerProduct,
    getProductWithHighestStock,
    getSuppliersStartingWithF,
    getNeverSoldProducts,
    getAllSalesWithProductDetails
};