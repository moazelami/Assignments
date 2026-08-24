const productRepo = require('./product.repository');

const createProduct = async (name, price, quantity, supplierId) => {
    if (!name || price == null || quantity == null || !supplierId) {
        throw new Error('All product fields are required');
    }

    if (price < 0 || quantity < 0) {
        throw new Error('Price and quantity cannot be negative');
    }

    return await productRepo.createProduct(
        name,
        price,
        quantity,
        supplierId
    );
};

const getAllProducts = async () => {
    return await productRepo.getAllProducts();
};

const getProductById = async (id) => {
    const product = await productRepo.getProductById(id);

    if (!product) {
        throw new Error('Product not found');
    }

    return product;
};

const updateProduct = async (id, name, price, quantity, supplierId) => {
    const product = await productRepo.getProductById(id);

    if (!product) {
        throw new Error('Product not found');
    }

    if (price != null && price < 0) {
        throw new Error('Price cannot be negative');
    }

    if (quantity != null && quantity < 0) {
        throw new Error('Quantity cannot be negative');
    }

    return await productRepo.updateProduct(
        id,
        name,
        price,
        quantity,
        supplierId
    );
};

const deleteProduct = async (id) => {
    const product = await productRepo.getProductById(id);

    if (!product) {
        throw new Error('Product not found');
    }

    return await productRepo.deleteProduct(id);
};

const updateBreadPrice = async () => {
    const product = await productRepo.updateProductPriceByName('Bread', 25.00);

    if (!product) {
        const error = new Error('Product Bread not found');
        error.statusCode = 404;
        throw error;
    }

    return product;
};

const deleteProductByName = async (name) => {
    const product = await productRepo.getProductByName(name);

    if (!product) {
        const error = new Error(`Product ${name} not found`);
        error.statusCode = 404;
        throw error;
    }

    try {
        return await productRepo.deleteProductByName(name);
    } catch (err) {
        if (err.code === '23503') {
            const fkError = new Error(`Cannot delete ${product.name} because it has related sales records`);
            fkError.statusCode = 409;
            throw fkError;
        }

        throw err;
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    updateBreadPrice,
    deleteProduct,
    deleteProductByName
};