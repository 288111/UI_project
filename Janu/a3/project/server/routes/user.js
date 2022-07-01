const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcrypt');

router.route('/').get((req, res) => {
  User.find()
    .select(['-password', '-salt'])
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  let password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);

  const newUser = new User({
    username,
    email,
    password,
    salt,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  newUser
    .save()
    .then(() => res.json('User created'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  let password = req.body.password;

  User.findById(req.params.id)
    .then((user) => {
      if (username) {
        user.username = username;
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);
        user.password = password;
        user.salt = salt;
      }
      user.updatedAt = new Date();
      user
        .save()
        .then(() => res.json('User updated'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .select(['-password', '-salt'])
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json('Resource Not found');
      }
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});


module.exports = router;
