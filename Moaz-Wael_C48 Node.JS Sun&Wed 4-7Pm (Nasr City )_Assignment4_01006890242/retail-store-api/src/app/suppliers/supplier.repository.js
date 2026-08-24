const db = require('../../common/db/db');

const createSupplier = async (name, contactNumber) => {
    const { rows } = await db.query(`
        INSERT INTO suppliers (name, contact_number)
        VALUES ($1, $2)
        RETURNING *;
    `, [name, contactNumber]);

    return rows[0];
};

const getAllSuppliers = async () => {
    const { rows } = await db.query(`
        SELECT * FROM suppliers;
    `);

    return rows;
};

const getSupplierById = async (id) => {
    const { rows } = await db.query(`
        SELECT * FROM suppliers
        WHERE id = $1;
    `, [id]);

    return rows[0];
};

const updateSupplier = async (id, name, contactNumber) => {
    const { rows } = await db.query(`
        UPDATE suppliers
        SET name = COALESCE($2, name),
            contact_number = COALESCE($3, contact_number)
        WHERE id = $1
        RETURNING *;
    `, [id, name, contactNumber]);

    return rows[0];
};

const deleteSupplier = async (id) => {
    const { rows } = await db.query(`
        DELETE FROM suppliers
        WHERE id = $1
        RETURNING *;
    `, [id]);

    return rows[0];
};

module.exports = {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier
};