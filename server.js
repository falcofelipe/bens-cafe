const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/about', require('./routes/about'));
app.use('/api/venues', require('./routes/venues'));
app.use('/api/careers', require('./routes/careers'));

// Serves Static Folders in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	console.log(path.join(__dirname, './client/build'));

	app.use(express.static(path.join(__dirname, './client/build')));

	// Loads the home page when accessing routes that are not described above
	app.get('*', (req, res) =>
		res.sendFile(
			path.join(__dirname, './client/build/index.html'),
			function (err) {
				res.status(500).send(err);
			}
		)
	);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
