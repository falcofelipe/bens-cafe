const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route     GET api/careers
// @desc      Get all of the available positions
// @access    Public
router.get('/', (req, res) => {
  res.send('Get available positions');
});

// @route     POST api/careers
// @desc      Add a new position
// @access    Private
router.post('/', (req, res) => {
  res.send('Add new position');
});

// @route     PUT api/careers/:id
// @desc      Update a specific position
// @access    Private
router.put('/:id', (req, res) => {
  res.send(`Update position with id of ${req.params.id}`);
});

// @route     DELETE api/careers/:id
// @desc      Deletes a specific position
// @access    Private
router.delete('/:id', (req, res) => {
  res.send(`Delete position with id of ${req.params.id}`);
});

module.exports = router;
