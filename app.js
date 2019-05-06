const express = require('express');
const logger = require('morgan');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const app = express();

app.use(logger('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
