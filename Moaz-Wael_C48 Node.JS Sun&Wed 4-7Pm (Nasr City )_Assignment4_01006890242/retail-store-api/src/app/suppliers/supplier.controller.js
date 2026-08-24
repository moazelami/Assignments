const supplierService = require('./supplier.service');

const createSupplier = async (req, res, next) => {
    try {
        const { name, contactNumber } = req.body;

        const supplier = await supplierService.createSupplier(
            name,
            contactNumber
        );

        res.status(201).json(supplier);
    } catch (err) {
        next(err);
    }
};

const getAllSuppliers = async (req, res, next) => {
    try {
        const suppliers = await supplierService.getAllSuppliers();

        res.status(200).json(suppliers);
    } catch (err) {
        next(err);
    }
};

const getSupplierById = async (req, res, next) => {
    try {
        const supplier = await supplierService.getSupplierById(
            req.params.id
        );

        res.status(200).json(supplier);
    } catch (err) {
        next(err);
    }
};

const updateSupplier = async (req, res, next) => {
    try {
        const { name, contactNumber } = req.body;

        const supplier = await supplierService.updateSupplier(
            req.params.id,
            name,
            contactNumber
        );

        res.status(200).json(supplier);
    } catch (err) {
        next(err);
    }
};

const deleteSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.deleteSupplier(
            req.params.id
        );

        res.status(200).json({
            message: 'Supplier deleted successfully',
            supplier
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier
};