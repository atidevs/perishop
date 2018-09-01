const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');

const Shop = require('../models/shop');

/**
 * Using body-parser to parse data from
 * the body of an http POST method
 */
router.use(bodyParser.json());

/**
 * userLocation array for storing user position
 * sent from the front end
 */
var userLocation = [];
var radius = 5;

/**
 * Getting user location through
 * http POST method with a body :
 * {userLatitude:value,
 * userLongitude:value}
 * And storing it in userLocation:Array, where
 * userLocation[0] = latitude
 * userLocation[1] = longitude
 */
router.post('/nearby', (req, res) => {
  userLocation[0] = req.body.userLatitude; 
  userLocation[1] = req.body.userLongitude;
  radius = req.body.radius;

  res.json({userLoc: userLocation});
  /**
   * When a user likes a shop
   */
  // User.likeShop(req.body.username, req.body.shopName, (err, raw) => {
  //   if (err) throw err;
  //   res.json(raw.ok);
  // });

  /**
   * When a user dislikes a shop
   */
  // User.dislikeShop(req.body.username, req.body.shopName, (err, raw) => {
  //   if (err) throw err;
  //   res.json(raw.ok);
  // });

});

/**
 * 
 */
router.get('/nearby', (req, res) => {

  /**
   * nearbyShops holds all shops to which
   * the distance from the user location
   * does not exceed a given radius
   */
  let nearbyShops = [];

  /**
   * Requesting all shops from the database
   * We get back data which is an array of
   * all shops in the db.
   */
  Shop.find({ 'city': 'Rabat' }, (err, data) => {
    if (err) throw err;
    /**
     * Storing the returned array from
     * getNearbyShops function defined in
     * user.js under models
     */
    nearbyShops = Shop.getNearbyShops(userLocation, data, radius /*Radius_default = 5000m = 5Km*/);
    /**
     * Testing if any nearby Shops
     * Were found
     */
    if (nearbyShops.length == 0) {
      /**
       * If not shops found send back an object with
       * A success property of value false
       * And an informative message
       */
      res.json({ success: false, msg: 'No nearby shops were found! Please increase radius!' });
    } else {
      /**
       * If nearby Shops found send back an object with
       * A success property of value true
       * The number of shops found and
       * The array of all shops found.
       */
      res.json({ success: true, numberOfShops: nearbyShops.length, nearbyShops: nearbyShops });
    }
  });
});

router.get('/myshops', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('My Shops');
});

module.exports = router;