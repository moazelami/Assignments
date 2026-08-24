const {config} = require('dotenv');
config();
const express = require('express');
const productRoutes = require('./app/products/product.routes');
const supplierRoutes = require('./app/suppliers/supplier.routes');
const saleRoutes = require('./app/sales/sale.routes');
const reportRoutes = require('./app/reports/report.routes');
const adminRoutes = require('./app/admin/admin.routes');
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/admin', adminRoutes);

app.use((err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message });
});

module.exports = app;