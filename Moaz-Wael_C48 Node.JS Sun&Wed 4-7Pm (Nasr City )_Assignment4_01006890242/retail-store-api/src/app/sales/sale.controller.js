const saleService = require('./sale.service');

const createSale = async (req, res, next) => {
    try {
        const { productId, quantitySold, saleDate } = req.body;

        const sale = await saleService.createSale(
            productId,
            quantitySold,
            saleDate
        );

        res.status(201).json(sale);
    } catch (err) {
        next(err);
    }
};

const getAllSales = async (req, res, next) => {
    try {
        const sales = await saleService.getAllSales();

        res.status(200).json(sales);
    } catch (err) {
        next(err);
    }
};

const getSalesByProduct = async (req, res, next) => {
    try {
        const sales = await saleService.getSalesByProduct(
            req.params.productId
        );

        res.status(200).json(sales);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createSale,
    getAllSales,
    getSalesByProduct
};