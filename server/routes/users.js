const router = require('express').Router();

const User = require('../../db/models');

// Get all users
router.get('/', (req, res, next) => {
  User.find({}).exec()
  .then(users => res.json(users))
  .catch(next);
});

// Get one user
router.get('/:name', (req, res, next) => {
  User.findOne({ name: req.params.name }).exec()
  .then(user => res.json(user))
  .catch(next);
});

// Edit your (and only your) user page
router.put('/:name', (req, res, next) => {
  // Will implement this conditional when Passport/login is set up
  // if (req.user.name === req.params.name) {
  User.findOne({ name: req.params.name }).exec()
  .then(user => {
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.name = req.body.name || user.name;
    user.picture = req.body.picture || user.picture;
    user.description = req.body.description || user.description;
    return user.save();
  })
  .then(user => res.json(user))
  .catch(next);
  // }
});

module.exports = router;
