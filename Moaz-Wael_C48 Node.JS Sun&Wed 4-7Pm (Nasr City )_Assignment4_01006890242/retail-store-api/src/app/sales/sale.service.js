const saleRepo = require('./sale.repository');
const productRepo = require('../products/product.repository');

const createSale = async (productId, quantitySold, saleDate) => {
    const product = await productRepo.getProductById(productId);

    if (!product) {
        throw new Error('Product not found');
    }

    if (!quantitySold || quantitySold <= 0) {
        throw new Error('Quantity must be greater than 0');
    }

    if (quantitySold > product.stock_quantity) {
        throw new Error('Not enough stock');
    }

    return saleRepo.createSale(productId, quantitySold, saleDate);
};

const getAllSales = async () => {
    return saleRepo.getAllSales();
};

const getSalesByProduct = async (productId) => {
    const product = await productRepo.getProductById(productId);

    if (!product) {
        throw new Error('Product not found');
    }

    return saleRepo.getSalesByProduct(productId);
};

module.exports = {
    createSale,
    getAllSales,
    getSalesByProduct
};