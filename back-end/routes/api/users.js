// @login & register
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const User = require('../../models/User');

// @route  POST api/users/register
// @desc   Create API for registration
// @access public
router.post('/register', (req, res) => {
  // Check whether user already exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json('This email has been registered!');
    }
    else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

// @route  POST api/users/login
// @desc   Creat API for logging in
// @access public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Search in Users
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json('User does not exist!');
    }

    // password match
    if (password == user.password) {
      const rule = {
        id: user.id,
        name: user.name,
      };
      jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({
          success: true,
          token: 'Bearer ' + token,
          user_email: email
        });
      });
    } else {
      return res.status(400).json('Wrong password!');
    }
  });
});

// @route  GET api/users/current
// @desc   return current user
// @access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
