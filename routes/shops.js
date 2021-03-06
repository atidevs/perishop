const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');

const Shop = require('../models/shop');
const User = require('../models/user');

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

// like route
router.get('/nearby/l/:username-:shopId', (req, res) => {
  /**
   * When a user likes a shop
   */
  User.likeShop(req.params.username, req.params.shopId, (err, raw) => {
    if (err) throw err;
    res.json(raw);
  });
});

// dislike route
router.get('/nearby/d/:username-:shopId-:date', (req, res) => {
  /**
   * When a user dislikes a shop
   */
  User.dislikeShop(req.params.username, req.params.shopId, req.params.date, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// unlike route
router.get('/myshops/ul/:username-:shopId', (req, res) => {
  /**
   * When a user unlikes a shop
   */
  User.updateOne({ username: req.params.username },
    { $pull: { likedShops: { $in: [req.params.shopId] } } }, (err, raw) => {
      if (err) throw err;
      res.json({ success: true, msg: `${req.params.shopId} is unLiked!`, raw: raw });
    });
});

// undislike route
router.get('/nearby/ud/:username-:shopId', (req, res) => {
  /**
   * When a user undislikes a shop
   */
  User.updateOne({ username: req.params.username },
    { $pull: { dislikedShops: { shopId: req.params.shopId } } }, (err, raw) => {
      if (err) throw err;
      res.json(raw);
    });
});

/**
 * 
 */
router.get('/nearby/:lat-:long-:radius', (req, res) => {

  userLocation[0] = req.params.lat;
  userLocation[1] = req.params.long;
  radius = req.params.radius;

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
    if (nearbyShops.nearbyShops.length == 0) {
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
      res.json({ success: true, numberOfShops: nearbyShops.nearbyShops.length, nearbyShops: nearbyShops.nearbyShops, distances: nearbyShops.distances, userLoc: req.params });
    }
  });
});

// router.get('/nearby/isl/:username-:shopName', (req, res) => {
//   Shop.isLiked(req.params.username, req.params.shopName, (err, isFound) => {
//     if (err) throw err;
//     if (isFound) {
//       res.json({ success: true, msg: `${req.params.shopName} is liked by ${req.params.username}` });
//     } else {
//       res.json({ success: false });
//     }
//   });
// });

router.get('/nearby/isd/:username-:shopId', (req, res) => {
  Shop.isDisliked(req.params.username, req.params.shopId, (err, isFound, likedOn) => {
    if (err) throw err;
    if (isFound) {
      let currentHour = new Date().getHours();
      if (currentHour - likedOn > 2) {
        res.json({ disliked: true, timeExpired: true });
      } else {
        res.json({ disliked: true, timeExpired: false });
      }
    } else {
      res.json({ disliked: false, timeExpired: null });
    }
  });
});

router.get('/myshops/:username', (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) throw err;
    if (user) {
      let myShops = user.likedShops;
      let distances = [];
      Shop.find({ _id: { $in: myShops } }, (err, shops) => {
        if (err) throw err;
        if (shops) {
          for (let i = 0; i < shops.length; i++) {
            distances.push(Shop.distanceAway(userLocation, shops[i].location.coordinates));
          }
          res.json({ success: true, numberOfShops: shops.length, myShops: shops, distances: distances });
        } else {
          res.json({ success: false, msg: 'No shops were liked!' });
        }
      });
    }
  });
});

module.exports = router;