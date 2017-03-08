const router = require('express').Router();
const _ = require('lodash');

const User = require('../../db/models');

const fields = ['email', 'name', 'picture', 'description'];
const sendToClient = (user, fields) => _.pick(user, fields);

// Get all users
router.get('/', (req, res, next) => {
  User.find({}).exec()
  .then(users => {
    users = users.map(user => sendToClient(user, fields));
    res.json(users);
  })
  .catch(next);
});

// Get one user
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => res.json(sendToClient(user, fields)))
  .catch(next);
});

// Edit your (and only your) user page
router.post('/:id', (req, res, next) => {
  // Will implement this conditional when Passport/login is set up
  // if (req.user.id === req.params.id) {
  User.findById(req.params.id)
  .then(user => {
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.name = req.body.name || user.name;
    user.picture = req.body.picture || user.picture;
    user.description = req.body.description || user.description;
    return user.save();
  })
  .then(user => res.json(sendToClient(user, fields)))
  .catch(next);
  // }
});

module.exports = router;
