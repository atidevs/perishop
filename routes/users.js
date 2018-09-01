const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const config = require('../config/database');

const User = require('../models/user');

/**
 * Parses body of the http post request
 * from JSON to an Object
 */
router.use(bodyParser.json());

// Sign up route
router.post('/signup', (req, res) => {
  // Getting the user sign up inputs
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    /**
      * Setting likedShops & dislikedShops arrays empty
      * As the user is new he has no likedShops nor dislikedShops
      */
    lickedShops: [],
    dislikedShops: []
  });

  /**
   * Adding the new constructed user to database
   */
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: `Failed to Sign Up ${user.name}` });
    } else {
      res.json({ success: true, msg: `${user.name}, you are now registered!` });
    }
  });

});

// Authenticate route
router.post('/login', (req, res) => {
  // User.dislikeShop(req.body.username, req.body.shopName, (err, raw) => {
  //   if (err) throw err;
  //   res.json(raw);
  // });

  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found!' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret,
          {
            expiresIn: 604800 // A week 
          });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password!' });
      }
    });
  });
});

// Profile route
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send({ user: req.user });
});

module.exports = router;