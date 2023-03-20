const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authAdminAccess = require('../middleware/authAdminAccess');

const Venue = require('../models/Venue');

// @route     GET api/venues
// @desc      Get all of the current venues
// @access    Public
router.get('/', async (req, res) => {
	try {
		const venues = await Venue.find().limit(3);

		if (!venues) {
			res.status(400).json({
				msg: 'No documents found on Venues collection',
			});
		} else {
			res.send(venues);
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route     PUT api/venues/:id
// @desc      Update a specific venue's description
// @access    Private
router.put('/:id', authAdminAccess, async (req, res) => {
	try {
		let venue = await Venue.findById(req.params.id);

		if (!venue) {
			res.status(400).json({ msg: 'There is no venue with that id' });
		}

		const updatedFields = req.body;

		venue = await Venue.findByIdAndUpdate(req.params.id, updatedFields, {
			new: true,
		});

		res.json(venue);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
