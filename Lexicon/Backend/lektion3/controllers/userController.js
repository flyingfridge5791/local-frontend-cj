const router = require('express').Router();
const userModel = require('../models/user/userModel');

router.post('/register', userModel.registerUser);
router.get('/', userModel.getUser);
module.exports = router;