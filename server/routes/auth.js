const auth = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../../db/models');

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
      else res.status(201).json(user);
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
// Use email as the username
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  User.findOne({ email }).exec()
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
}));

// Google OAuth
auth.get('/google/login',
  passport.authenticate('google', {
    scope: 'email'
  })
);

// Google OAuth cont.
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  }, (token, refreshToken, profile, done) => {
    User.findOrCreate({
      googleId: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName
    })
    .then(user => {
      console.log(user);
      done(null, user);
    })
    .catch(done);
  })
);

// Google OAuth cont. - handle the callback after Google has authenticated the user
auth.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/users'
  })
);

// Send user info front-end after signup/login/logout
auth.get('/whoami', (req, res) => res.json(req.user));

// Logout
auth.post('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/api/auth/whoami');
});

module.exports = auth;
