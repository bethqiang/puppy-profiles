const mongoose = require('mongoose');

// Setting up db uri
// If testing, '_test' will be added on to the db name to keep environments separate
const name = `user_profiles${process.env.NODE_ENV === 'testing' ? '_test' : ''}`;
// Set URL to either Heroku or local db
const url = process.env.MONGODB_URI || `mongodb://localhost/${name}`;

// Connect to db
mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
