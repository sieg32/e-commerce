const mongoose = require('mongoose');
const express = require('express')
const {loginPage, createUser, loginUser} = require('../controllers/user_controller');
const router = express.Router();


router.route('/login').get(loginPage);

router.route('/login').post(loginUser);

router.route('/register').post(createUser);



module.exports = router;