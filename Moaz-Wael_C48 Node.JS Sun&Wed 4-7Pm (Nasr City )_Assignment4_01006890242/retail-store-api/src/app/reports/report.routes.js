const express = require('express');

const reportController = require('./report.controller');

const router = express.Router();

router.get('/total-quantity-sold', reportController.getTotalQuantitySoldPerProduct);

router.get('/highest-stock', reportController.getProductWithHighestStock);

router.get('/suppliers-starting-with-f', reportController.getSuppliersStartingWithF);

router.get('/never-sold', reportController.getNeverSoldProducts);

router.get('/sales-details', reportController.getAllSalesWithProductDetails);

module.exports = router;
