const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authAdminAccess = require('../middleware/authAdminAccess');

const About = require('../models/About');

// @route     GET api/about
// @desc      Get all of the about section's content
// @access    Public
router.get('/', async (req, res) => {
	try {
		const about = await About.findOne();

		if (!about) {
			res.status(400).json({
				msg: 'No documents found on About collection',
			});
		} else {
			res.send(about);
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route     PUT api/about/
// @desc      Update the about section's content
// @access    Private
router.put('/', authAdminAccess, async (req, res) => {
	try {
		let about = await About.findOne({});

		if (!about) {
			res.status(400).json({
				msg: 'No documents found on About collection',
			});
		}

		const updatedFields = req.body;

		about = await About.findByIdAndUpdate(about._id, updatedFields, {
			new: true,
		});

		res.json(about);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
