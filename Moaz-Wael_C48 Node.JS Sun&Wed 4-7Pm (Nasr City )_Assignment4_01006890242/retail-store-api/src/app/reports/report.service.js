const reportRepository = require('./report.repository');

const getTotalQuantitySoldPerProduct = async () => {
    return reportRepository.getTotalQuantitySoldPerProduct();
};

const getProductWithHighestStock = async () => {
    return reportRepository.getProductWithHighestStock();
};

const getSuppliersStartingWithF = async () => {
    return reportRepository.getSuppliersStartingWithF();
};

const getNeverSoldProducts = async () => {
    return reportRepository.getNeverSoldProducts();
};

const getAllSalesWithProductDetails = async () => {
    return reportRepository.getAllSalesWithProductDetails();
};

module.exports = {
    getTotalQuantitySoldPerProduct,
    getProductWithHighestStock,
    getSuppliersStartingWithF,
    getNeverSoldProducts,
    getAllSalesWithProductDetails
};