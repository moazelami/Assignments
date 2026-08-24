require('dotenv').config();

const db = require('../src/common/db/db');

const seed = async () => {
    let supplier = (await db.query(`
        SELECT * FROM suppliers WHERE name = $1;
    `, ['FreshFoods'])).rows[0];

    if (!supplier) {
        supplier = (await db.query(`
            INSERT INTO suppliers (name, contact_number)
            VALUES ($1, $2)
            RETURNING *;
        `, ['FreshFoods', '01001234567'])).rows[0];
        console.log(`Supplier inserted: ${supplier.name} (id=${supplier.id})`);
    } else {
        console.log(`Supplier already exists: ${supplier.name} (id=${supplier.id})`);
    }

    const productsToSeed = [
        { name: 'Milk', price: 15.00, stock_quantity: 50 },
        { name: 'Bread', price: 10.00, stock_quantity: 30 },
        { name: 'Eggs', price: 20.00, stock_quantity: 40 }
    ];

    const products = {};

    for (const item of productsToSeed) {
        let product = (await db.query(`
            SELECT * FROM products WHERE LOWER(name) = LOWER($1);
        `, [item.name])).rows[0];

        if (!product) {
            product = (await db.query(`
                INSERT INTO products (name, price, stock_quantity, supplier_id)
                VALUES ($1, $2, $3, $4)
                RETURNING *;
            `, [item.name, item.price, item.stock_quantity, supplier.id])).rows[0];
            console.log(`Product inserted: ${product.name} (id=${product.id}, supplier_id=${product.supplier_id})`);
        } else {
            console.log(`Product already exists: ${product.name} (id=${product.id})`);
        }

        products[item.name] = product;
    }

    const milk = products['Milk'];

    const existingSale = (await db.query(`
        SELECT * FROM sales
        WHERE product_id = $1 AND quantity_sold = $2 AND sale_date = $3;
    `, [milk.id, 2, '2025-05-20'])).rows[0];

    if (!existingSale) {
        await db.query(`
            INSERT INTO sales (product_id, quantity_sold, sale_date)
            VALUES ($1, $2, $3);
        `, [milk.id, 2, '2025-05-20']);
        console.log(`Sale inserted: ${milk.name} x2 on 2025-05-20`);
    } else {
        console.log('Sale already exists: Milk x2 on 2025-05-20');
    }

    console.log('Seed completed successfully');
};

seed()
    .then(async () => {
        await db.end();
        process.exit(0);
    })
    .catch(async (err) => {
        console.error('Seed failed:', err.message);
        await db.end();
        process.exit(1);
    });
