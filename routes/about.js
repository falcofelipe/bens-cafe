const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route     GET api/about
// @desc      Get all of the about section's content
// @access    Public
router.get('/', (req, res) => {
  res.send('Get about section');
});

// @route     PUT api/about/
// @desc      Update the about section's content
// @access    Private
router.put('/', (req, res) => {
  res.send(`Update about section`);
});

module.exports = router;
