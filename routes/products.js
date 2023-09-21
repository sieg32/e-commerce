const express = require('express');
const {addProduct, GetProduct, GetSpecificProduct} = require('../controllers/product_controller');
const router = express.Router();





router.route('/').get(GetProduct);

router.route('/:id').get(GetSpecificProduct);
    



router.route('/addProduct').post(addProduct);




module.exports = router;