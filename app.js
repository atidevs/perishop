const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

// Initializing Express
const app = express();

/**
 * Connecting to Database
 * using mongoose
 */
mongoose.connect(config.database, { useNewUrlParser: true });

// Checking for database connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ' + config.database);
});

// Checking for database connection error 
mongoose.connection.on('error', (err) => {
  console.log('Failed to Connect to Database ' + err);
});

/**
 * Handling users routes
 */
const users = require('./routes/users');
app.use('/users', users);

/**
 * handling shops routes
 */
const shops = require('./routes/shops');
app.use('/shops', shops);

/**
 * Set the static folder
 * Contains client-side files
 */
app.use(express.static(path.join(__dirname, 'client')));

/**
 * Cors middleware to access the app
 * from a different port
 * Connect the front-end to back-end
 */
app.use(cors());

/**
 * Body Parser middleware
 * for parsing incoming body request
 */
app.use(bodyParser.json());

/**
 * Passport middleware 
 * for generating auth token
 */
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Port Number
const port = 3000;

// Index route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
app.listen(port, () => {
  console.log('Server Started on: ' + port);
});