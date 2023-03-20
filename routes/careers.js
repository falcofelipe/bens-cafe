const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authAdminAccess = require('../middleware/authAdminAccess');

const Position = require('../models/Position');
const Venue = require('../models/Venue');

// @route     GET api/careers
// @desc      Get all of the available positions
// @access    Public
router.get('/', async (req, res) => {
	try {
		const positions = await Position.find({}).populate('venue');

		if (!positions) {
			res.status(400).json({
				msg: 'There are no positions available at the moment',
			});
		} else {
			res.send(positions);
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route     POST api/careers
// @desc      Add a new position
// @access    Private
router.post(
	'/',
	[
		authAdminAccess,
		[
			check('title', 'Please include the job title').not().isEmpty(),
			check(
				'venue',
				'Please include the id of the venue related to the job'
			)
				.not()
				.isEmpty(),
			check('description', 'Please include the job description')
				.not()
				.isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, venue, description } = req.body;

		let jobType;

		if (req.body.type) {
			jobType = req.body.type;

			if (
				jobType !== 'part-time' &&
				jobType !== 'full-time' &&
				jobType !== 'contract'
			) {
				return res.status(400).json({
					msg: 'Job type can only be part-time, full-time or contract',
				});
			}
		}

		try {
			let venueObject = await Venue.findById(venue);

			if (!venueObject) {
				return res
					.status(400)
					.json({ msg: 'There is no venue with that id.' });
			}

			let position = new Position({
				title,
				venue,
				type: jobType ? jobType : 'full-time',
				description,
			});

			await position.save();

			res.send({ msg: 'Position added with sucess!', position });
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route     PUT api/careers/:id
// @desc      Update a specific position
// @access    Private
router.put('/:id', authAdminAccess, async (req, res) => {
	try {
		let position = await Position.findById(req.params.id);

		if (!position) {
			res.status(400).json({ msg: 'There is no position with that id' });
		}

		const updatedFields = req.body;

		position = await Position.findByIdAndUpdate(
			req.params.id,
			updatedFields,
			{
				new: true,
			}
		);

		res.json(position);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route     DELETE api/careers/:id
// @desc      Deletes a specific position
// @access    Private
router.delete('/:id', authAdminAccess, async (req, res) => {
	try {
		let position = await Position.findById(req.params.id);

		if (!position) {
			res.status(400).json({ msg: 'There is no position with that id' });
		}

		await Position.findByIdAndDelete(req.params.id);

		res.json({
			msg: `The position with id of ${req.params.id} has been sucessfuly deleted`,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@todo       Create a careers/applications route to store applications.

module.exports = router;
