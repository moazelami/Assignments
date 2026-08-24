const express = require('express');

const adminController = require('./admin.controller');

const router = express.Router();

router.post('/schema/products/category', adminController.addCategoryColumn);

router.delete('/schema/products/category', adminController.dropCategoryColumn);

router.patch('/schema/suppliers/contact-number-type', adminController.changeContactNumberType);

router.patch('/schema/products/name/not-null', adminController.setProductNameNotNull);

module.exports = router;
