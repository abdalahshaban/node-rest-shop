const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests to /Order'
	});
});

router.post('/', (req, res, next) => {
	res.status(201).json({
		message: 'Handling POST requests to /Order'
	});
});

router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Order details',
		orderId: req.params.orderId
	});
});

router.patch('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated Order'
	});
});

router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'deleted Order'
	});
});

module.exports = router;
