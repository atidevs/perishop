const mongoose = require('mongoose');
const User = require('../models/user');

/**
 * Constant values for distance calculation
 * using *** formula
 */
const EARTH_RADIUS = 6371;
const PI = 3.14159;

/**
 * Defining a Shop model
 * using mongoose schema
 */
const ShopSchema = mongoose.Schema({
  picture: String,
  name: String,
  email: String,
  city: String,
  location: {
    coordType: String,
    coordinates: Array
  }
});

// Exporting Shop model for external use
const Shop = module.exports = mongoose.model('Shop', ShopSchema);

/**
 * Using the 'Haversine formula'
 * distanceAway() evaluates the distance between two given locations :
 * @param {Array} userLocation : Holds user position
 * @param {Array} shopLocation : Holds a given shop position
 */
module.exports.distanceAway = function (userLocation, shopLocation) {

  /**
   * subLatitude & subLongitude are two parameters of the 'Haversine formula'
   * Evaluated based on the two locations' positions
   */
  let subLatitude = Shop.degToRad(userLocation[0] - shopLocation[0]);
  let subLongitude = Shop.degToRad(userLocation[1] - shopLocation[1]);

  /**
   * a, c & d are also three parameters of the 'Haversine formula'
   * Evaluated down bellow using Math formulas
   */
  let params = {
    a: 0,
    c: 0,
    d: 0
  };

  // Evaluating a parameter:
  params.a = ((Math.sin(subLatitude / 2)) ** 2) + (Math.cos(Shop.degToRad(userLocation[0])) * Math.cos(Shop.degToRad(shopLocation[0])) * ((Math.sin(subLongitude / 2)) ** 2));

  // Evaluating c parameter:
  params.c = 2 * Math.atan2(Math.sqrt(params.a), Math.sqrt(1 - params.a));

  // Evaluating d parameter: which is the distance between the two locations
  params.d = Number((EARTH_RADIUS * params.c).toFixed(2));

  // Returning the distance between {userLocation} & {shopLocation} : params.d
  return params.d;
}

/**
 * degToRad() : converts a Degree value to Radian
 * Used in the 'Haversine formula'
 * @param {Number} deg : a given angle value in degree unit
 */
module.exports.degToRad = function (deg) {
  return (deg * PI / 180);
}

/**
 * getNearbyShops() : returns all shops within a given radius: {radius}
 * @param {Array} userLocation : user position, holds latitude and longitude values.
 * @param {Array} shops : holds all shops retrieved from the database for nearby selection based on the distance
 * @param {Number} radius : radius within which nearby Shops should fall
 */
module.exports.getNearbyShops = function (userLocation, shops, radius) {

  // Declaring an array which going to hold : all shops that fall within the given radius
  let nearbyShops = [];

  /**
   * Going through all given shops
   * and checking for distance < radius
   */
  for (let i = 0; i < shops.length; i++) {
    /**
     * If a given shop within shops falls into the radius
     * Store the shop inside nearbyShops array
     */
    if (Shop.distanceAway(userLocation, shops[i].location.coordinates) <= radius) {
      nearbyShops.push(shops[i]);
      // console.log(Shop.distanceAway(userLocation, shops[i].location.coordinates));
      console.log(Shop.distanceAway(userLocation, shops[i].location.coordinates));
    }
  }

  // Return nearbyShops array.
  return nearbyShops;
}

module.exports.isLiked = function (username, shopName, callback) {
  User.findOne({ username: username, likedShops: { $in: [shopName] } }, (err, isFound) => {
    callback(err, isFound);
  });
}

module.exports.isDisliked = function (username, shopName, callback) {
  User.findOne({ username: username, dislikedShops: { $in: [shopName] } }, (err, isFound) => {
    callback(err, isFound);
  });
}