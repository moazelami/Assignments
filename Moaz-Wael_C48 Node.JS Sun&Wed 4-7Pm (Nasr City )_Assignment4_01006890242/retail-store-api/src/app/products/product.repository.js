const db = require('../../common/db/db');

const createProduct = async (name , price , quantity ,supplierId) => {
    const {rows} = await db.query(`
        INSERT INTO products (name,price ,stock_Quantity ,supplier_id)
        VALUES ($1,$2,$3,$4)
        RETURNING *;
`,[name, price, quantity, supplierId]);
    return rows[0];
};
const getAllProducts = async () =>{
    const {rows} = await db.query(`SELECT * FROM products`);
    return rows;
};

const getProductById = async (id) =>{
    const {rows} = await db.query(`SELECT * FROM products WHERE id = $1`,[id]);
    return rows[0];
};

const updateProduct = async (id,name ,price,quantity,supplierId) => {
    const {rows} = await db.query(`
    UPDATE products
     SET name = COALESCE($2 , name),
         price = COALESCE($3 , price),
         stock_quantity = COALESCE($4, stock_quantity),
         supplier_id = COALESCE($5, supplier_id)
    WHERE id = $1
    RETURNING *;
     `,[id ,name, price, quantity, supplierId]);
    return rows[0];
};

const deleteProduct = async (id) =>{
    const {rows} = await db.query(`DELETE FROM products WHERE id = $1 RETURNING *;`,[id]);
    return rows[0];
}
const getProductByName = async (name) => {
    const { rows } = await db.query(`SELECT * FROM products WHERE LOWER(name) = LOWER($1)`, [name]);
    return rows[0];
};

const updateProductPriceByName = async (name, price) => {
    const { rows } = await db.query(`
        UPDATE products
        SET price = $2
        WHERE LOWER(name) = LOWER($1)
        RETURNING *;
    `, [name, price]);

    return rows[0];
};

const deleteProductByName = async (name) => {
    const { rows } = await db.query(`
        DELETE FROM products
        WHERE LOWER(name) = LOWER($1)
        RETURNING *;
    `, [name]);

    return rows[0];
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    updateProduct,
    updateProductPriceByName,
    deleteProduct,
    deleteProductByName,
}