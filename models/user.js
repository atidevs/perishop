const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Defining User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  likedShops: {
    type: Array
  },
  dislikedShops: {
    type: Array
  }
});

// Exporting User model for external use : ie app.js
const User = module.exports = mongoose.model('User', UserSchema);

/**
 * Getting the user by Id, from the databse
 * @param {String} id : passing in the id of the user
 * @param {Function} callback : callback function after submiting the request to the databse
 */
module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

/**
 * Getting the user by username, from the databse
 * @param {String} username : passing in the username of the user
 * @param {Function} callback : callback function after send out the request to the databse
 */
module.exports.getUserByUsername = function (username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
}

/**
 * Adding the user to the database after having hashed the password using bcryptJS
 * @param {Object} newUser : the constructed object containing all infos about the new user
 * @param {Function} callback
 */
module.exports.addUser = function (newUser, callback) {

  //Hashing the password using bcryptJS
  bcrypt.genSalt(10, (err, salt) => {

    // Passing in the new user password for encryption 
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;

      // Replacing the actual password with the hashed one 
      newUser.password = hash;

      // Saving the new user to the database
      newUser.save(callback);
    });
  });
}

/**
 * When a user likes a shop : append shop's name to 
 * likedShops array in the User model
 * and updating it in the database.
 * @param {String} username 
 * @param {String} shopName 
 * @param {Function} callback 
 */
module.exports.likeShop = function (username, shopId, callback) {
  /**
   * Checking if the parameter shopName already exists
   * in the dislikedShops array.
   */
  User.updateOne({ username: username },
    { $addToSet: { likedShops: shopId } }, (err, raw) => {
      if (err) throw err;
    });

  User.findOne({ username: username, dislikedShops: { $in: [shopId] } }, (err, res) => {
    if (err) throw err;
    if (res) {
      User.updateOne({ username: username },
        { $pull: { dislikedShops: { $in: [shopId] } } }, (err, raw) => {
          if (err) throw err;
        });
    }
    callback(null, { success: true, msg: 'Shop liked!' });
  });
}

/**
 * When a user dislikes a shop : append shop's name to 
 * dislikedShops array in the User model
 * and updating it in the database.
 * @param {String} username 
 * @param {String} shopName 
 * @param {Function} callback 
 */
module.exports.dislikeShop = function (username, shopId, date, callback) {
  /**
 * push shopName to dislikedShops array.
 */
  User.updateOne({ username: username },
    { $addToSet: { dislikedShops: {shopId, date} } }, (err, raw) => {
      if (err) throw err;
      /**
       * Checking if the parameter shopName already exists
       * in the likedShops array.
       */
    });

  User.findOne({ username: username, likedShops: { $in: [shopId] } }, (err, res) => {
    if (err) throw err;
    if (res) {
      User.updateOne({ username: username },
        { $pull: { likedShops: { $in: [shopId] } } }, (err, raw) => {
          if (err) throw err;
        });
    }
    callback(null, { success: true, msg: 'Shop disliked!' });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}