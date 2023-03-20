const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const authGeneralAccess = require('../middleware/authGeneralAccess');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', authGeneralAccess, async (req, res) => {
	const { id } = req.user;

	try {
		let user = await User.findById(id).select('-password');

		if (!user) {
			res.status(400).json({ msg: 'User does not exist' });
		}

		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route     POST api/auth
// @desc      Authenticate user & get token
// @access    Public
router.post(
	'/',
	[
		check('email', 'Please include a valid email address').isEmail(),
		check('password', 'Please include a password').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log(err);
			return res.status(400).json({ msg: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ msg: 'Invalid password and/or email' });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ msg: 'Invalid password and/or email' });
			}

			const payload = {
				user: {
					id: user.id,
					type: user.type,
				},
			};

			//let jwtSecret = process.env.JWT_SECRET ?? config.get('jwtSecret');
			let jwtSecret = config.get('jwtSecret');

			jwt.sign(
				payload,
				jwtSecret,
				{
					expiresIn: 360000,
				},
				(err, token) => {
					console.log(err);
					if (err) throw err;
					console.log(token);
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err);
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
