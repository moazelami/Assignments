const db = require('../../common/db/db');

const categoryColumnExists = async () => {
    const { rows } = await db.query(`
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'products' AND column_name = 'category';
    `);

    return rows.length > 0;
};

const addCategoryColumn = async () => {
    await db.query(`
        ALTER TABLE products
        ADD COLUMN category VARCHAR(255);
    `);
};

const dropCategoryColumn = async () => {
    await db.query(`
        ALTER TABLE products
        DROP COLUMN category;
    `);
};

const getMaxContactNumberLength = async () => {
    const { rows } = await db.query(`
        SELECT COALESCE(MAX(LENGTH(contact_number)), 0) AS max_length
        FROM suppliers;
    `);

    return rows[0].max_length;
};

const changeContactNumberType = async () => {
    await db.query(`
        ALTER TABLE suppliers
        ALTER COLUMN contact_number TYPE VARCHAR(15);
    `);
};

const countNullProductNames = async () => {
    const { rows } = await db.query(`
        SELECT COUNT(*)::int AS null_count
        FROM products
        WHERE name IS NULL;
    `);

    return rows[0].null_count;
};

const setProductNameNotNull = async () => {
    await db.query(`
        ALTER TABLE products
        ALTER COLUMN name SET NOT NULL;
    `);
};

module.exports = {
    categoryColumnExists,
    addCategoryColumn,
    dropCategoryColumn,
    getMaxContactNumberLength,
    changeContactNumberType,
    countNullProductNames,
    setProductNameNotNull
};
