const adminRepo = require('./admin.repository');

const conflictError = (message) => {
    const error = new Error(message);
    error.statusCode = 409;
    return error;
};

const addCategoryColumn = async () => {
    if (await adminRepo.categoryColumnExists()) {
        throw conflictError("Column 'category' already exists on products");
    }

    await adminRepo.addCategoryColumn();

    return { message: "Column 'category' added to products" };
};

const dropCategoryColumn = async () => {
    if (!(await adminRepo.categoryColumnExists())) {
        throw conflictError("Column 'category' does not exist on products");
    }

    await adminRepo.dropCategoryColumn();

    return { message: "Column 'category' removed from products" };
};

const changeContactNumberType = async () => {
    const maxLength = await adminRepo.getMaxContactNumberLength();

    if (maxLength > 15) {
        throw conflictError(`Cannot change contact_number to VARCHAR(15): existing data is up to ${maxLength} characters long`);
    }

    await adminRepo.changeContactNumberType();

    return { message: 'contact_number type changed to VARCHAR(15)' };
};

const setProductNameNotNull = async () => {
    const nullCount = await adminRepo.countNullProductNames();

    if (nullCount > 0) {
        throw conflictError(`Cannot set NOT NULL: ${nullCount} product(s) have a NULL name`);
    }

    await adminRepo.setProductNameNotNull();

    return { message: 'NOT NULL constraint added to products.name' };
};

module.exports = {
    addCategoryColumn,
    dropCategoryColumn,
    changeContactNumberType,
    setProductNameNotNull
};
