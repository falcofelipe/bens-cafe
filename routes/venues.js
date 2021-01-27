const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route     GET api/venues
// @desc      Get all of the current venues
// @access    Public
router.get('/', (req, res) => {
  res.send('Get all venues');
});

// @route     PUT api/venues/:id
// @desc      Update a specific venue's description
// @access    Private
router.put('/:id', (req, res) => {
  res.send(`Update venue with id of ${req.params.id}`);
});

module.exports = router;
