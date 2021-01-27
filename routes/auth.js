const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route     POST api/auth
// @desc      Authenticate user & get token
// @access    Public
router.post('/', (req, res) => {
  res.send('Auth user & get token');
});

module.exports = router;
