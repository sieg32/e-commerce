const express = require('express');
const {addProduct, GetAllProduct, GetSpecificProduct, productPage,searchPage, searchProduct} = require('../controllers/product_controller');
const router = express.Router();




router.route('/search').get(searchProduct);

router.route('/api/').get(GetAllProduct);

router.route('/api/:id').get(GetSpecificProduct);

router.route('/:id').get(productPage);

router.route('/').get(searchPage);

    



router.route('/addProduct').post(addProduct);




module.exports = router;