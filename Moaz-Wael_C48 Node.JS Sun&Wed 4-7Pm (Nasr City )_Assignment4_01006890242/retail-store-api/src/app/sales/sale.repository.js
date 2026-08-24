const db = require('../../common/db/db');

const createSale = async (productId, quantitySold, saleDate) => {
    const { rows } = await db.query(`
        INSERT INTO sales (product_id, quantity_sold, sale_date)
        VALUES ($1, $2, $3)
        RETURNING *;
    `, [productId, quantitySold, saleDate]);

    return rows[0];
};

const getAllSales = async () => {
    const { rows } = await db.query(`
        SELECT * FROM sales;
    `);

    return rows;
};

const getSalesByProduct = async (productId) => {
    const { rows } = await db.query(`
        SELECT * FROM sales
        WHERE product_id = $1;
    `, [productId]);

    return rows;
};

module.exports = {
    createSale,
    getAllSales,
    getSalesByProduct
};