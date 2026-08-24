const db = require('../../common/db/db');

const getTotalQuantitySoldPerProduct = async () => {
    const { rows } = await db.query(`
        SELECT
            p.name,
            COALESCE(SUM(s.quantity_sold), 0) AS total_quantity_sold
        FROM products p
        LEFT JOIN sales s
            ON p.id = s.product_id
        GROUP BY p.id, p.name
    `);

    return rows;
};

const getProductWithHighestStock = async () => {
    const { rows } = await db.query(`
        SELECT *
        FROM products
        ORDER BY stock_quantity DESC
        LIMIT 1
    `);

    return rows[0];
};

const getSuppliersStartingWithF = async () => {
    const { rows } = await db.query(`
        SELECT *
        FROM suppliers
        WHERE name LIKE 'F%'
    `);

    return rows;
};

const getNeverSoldProducts = async () => {
    const { rows } = await db.query(`
        SELECT p.*
        FROM products p
        LEFT JOIN sales s
            ON p.id = s.product_id
        WHERE s.product_id IS NULL
    `);

    return rows;
};

const getAllSalesWithProductDetails = async () => {
    const { rows } = await db.query(`
        SELECT
            p.name AS product_name,
            s.quantity_sold,
            s.sale_date
        FROM sales s
        JOIN products p
            ON s.product_id = p.id
    `);

    return rows;
};

module.exports = {
    getTotalQuantitySoldPerProduct,
    getProductWithHighestStock,
    getSuppliersStartingWithF,
    getNeverSoldProducts,
    getAllSalesWithProductDetails
};