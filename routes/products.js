const express = require('express');
const {addProduct, GetProduct} = require('../controllers/product_controller');
const router = express.Router();





router.route('/getAll').get(GetProduct);
    



router.route('/addProduct').post(addProduct);




module.exports = router;