const productService = require('./product.service');

const createProduct = async (req, res, next) => {
    try {
        const { name, price, quantity, supplierId } = req.body;

        const product = await productService.createProduct(
            name,
            price,
            quantity,
            supplierId
        );

        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
};

const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const product = await productService.getProductById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { name, price, quantity, supplierId } = req.body;

        const product = await productService.updateProduct(
            req.params.id,
            name,
            price,
            quantity,
            supplierId
        );

        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const product = await productService.deleteProduct(req.params.id);

        res.status(200).json({
            message: 'Product deleted successfully',
            product
        });
    } catch (err) {
        next(err);
    }
};

const updateBreadPrice = async (req, res, next) => {
    try {
        const product = await productService.updateBreadPrice();

        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

const deleteEggs = async (req, res, next) => {
    try {
        const product = await productService.deleteProductByName('Eggs');

        res.status(200).json({
            message: 'Product deleted successfully',
            product
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    updateBreadPrice,
    deleteProduct,
    deleteEggs
};