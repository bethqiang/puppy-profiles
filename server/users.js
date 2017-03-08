const router = require('express').Router();
const User = require('../db/models');

// Get all users
router.get('/', (req, res, next) => {
  User.find({}).exec()
  .then(users => res.json(users))
  .catch(next);
});

// Get one user

// Edit your user page

module.exports = router;
