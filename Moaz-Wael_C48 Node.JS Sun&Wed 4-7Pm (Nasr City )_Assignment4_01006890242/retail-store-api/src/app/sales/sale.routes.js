const {Router} = require('express');
const saleController = require('./sale.controller');
const salesRouter = Router();

salesRouter.post('/', saleController.createSale);
salesRouter.get('/', saleController.getAllSales);
salesRouter.get('/product/:productId', saleController.getSalesByProduct);

module.exports = salesRouter;