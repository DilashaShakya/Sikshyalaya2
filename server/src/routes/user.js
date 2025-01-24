const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { JsonWebTokenError } = require('jsonwebtoken');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { registerUser, loginUser, getAllUser, approveUser, rejectUser } = require('../controller/user');

  
router.post('/register',registerUser );

router.post('/login',loginUser)

router.get('/users',getAllUser)

router.patch('/approve-user/:userId', approveUser)

router.patch('/reject-user/:userId', rejectUser)

module.exports = router