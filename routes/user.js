const mongoose = require('mongoose');
const express = require('express')
const {loginPage, createUser, loginUser, profilePage} = require('../controllers/user_controller');
const authorize = require('../middleware/authorization');
const router = express.Router();


router.route('/login').get(loginPage);

router.route('/profile').get(profilePage);

router.route('/getUserInfo').get(authorize, getUserInfo)

router.route('/login').post(loginUser);

router.route('/register').post(createUser);



module.exports = router;