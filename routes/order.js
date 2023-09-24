const express = require('express')
const authorize = require('../middleware/authorization');

const {ordersPage,createOrder, getOrders ,cancelOrder} = require('../controllers/order_controller')
const router = express.Router();

router.route('/').get(ordersPage);
router.route('/api/placeOrder').post(createOrder);

router.route('/api/cancelOrder').patch(cancelOrder);


router.route('/getOrders').get(authorize,getOrders)



module.exports = router;

