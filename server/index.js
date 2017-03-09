require('dotenv').config();
const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const chalk = require('chalk');
const passport = require('passport');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (dev only)
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// Session middleware
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET]
}));

// Body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Authentication middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static files
app.use(express.static(resolve(__dirname, '../browser/index.html')));
app.use(express.static(resolve(__dirname, '../public')));
app.use(express.static(resolve(__dirname, '../node_modules/materialize-css/dist')));

// Routes
app.use('/api', require('./routes/api'));

// Send index.html for anything else
app.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, '../browser/index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(chalk.blue(`--- Listening on port ${port} ---`));
});

// Error-handling
app.use('/', (err, req, res, next) => {
  console.log(chalk.red(`ERROR: ${err.message}`));
  res.sendStatus(err.status || 500);
});
