const auth = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const _ = require('lodash');

const User = require('../../db/models');

// Only send these fields to the client
const fields = ['email', 'name', 'picture', 'description'];
// Using pick instead of omit bc (1) pick is much faster and (2) omit can't operate on documents
const sendToClient = (user, fields) => _.pick(user, fields);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(
  (id, done) => {
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err));
  }
);

// Local signup
auth.post('/local/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.sendStatus(201);
      });
    })
    .catch(next);
});

// Local login
auth.post('/local/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/api/auth/whoami'
  })(req, res, next);
});

// Local login strategy
passport.use(new LocalStrategy(
  (email, password, done) => {
    User.findOne({ email })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Email incorrect.' });
      }
      return user.authenticate(password)
      .then(ok => {
        if (!ok) {
          return done(null, false, { message: 'Password incorrect' });
        }
        done(null, user);
      });
    })
    .catch(done);
  }
));

// Send user info front-end after signup/login/logout
auth.get('/whoami', (req, res) => res.json(sendToClient(req.user, fields)));

// Logout
auth.post('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/api/auth/whoami');
});

module.exports = auth;
