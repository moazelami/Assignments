const supplierRepo = require('./supplier.repository');

const createSupplier = async (name, contactNumber) => {
    if (!name || !contactNumber) {
        throw new Error('Name and contact number are required');
    }

    return supplierRepo.createSupplier(name, contactNumber);
};

const getAllSuppliers = async () => {
    return supplierRepo.getAllSuppliers();
};

const getSupplierById = async (id) => {
    const supplier = await supplierRepo.getSupplierById(id);

    if (!supplier) {
        throw new Error('Supplier not found');
    }

    return supplier;
};

const updateSupplier = async (id, name, contactNumber) => {
    await getSupplierById(id);

    return supplierRepo.updateSupplier(id, name, contactNumber);
};

const deleteSupplier = async (id) => {
    await getSupplierById(id);

    return supplierRepo.deleteSupplier(id);
};

module.exports = {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier
};