// @login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Item = require('../../models/Item');

// @route  POST api/items/add/:id
// @desc   Create API for adding data
// @access Private
router.post(
  '/add/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const itemFields = {};

    if (req.body.item_name) itemFields.item_name = req.body.item_name;
    if (req.body.item_quantity) itemFields.item_quantity = req.body.item_quantity;
    if (req.body.category) itemFields.category = req.body.category;
    itemFields.user_id = req.params.id;

    new Item(itemFields).save().then(item => {
      res.json(item);
    });
  }
);

// @route  GET api/items/:id
// @desc   Creat API for querying all the info
// @access Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.find({ user_id: req.params.id })
      .then(item => {
        if (!item) {
          return res.status(404).json('no content');
        }

        res.json(item);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  POST api/items/edit/:id
// @desc   Create API for editting data
// @access Private
router.post(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const itemFields = {};

    if (req.body.item_name) itemFields.item_name = req.body.item_name;
    if (req.body.item_quantity) itemFields.item_quantity = req.body.item_quantity;
    if (req.body.Completed == false) itemFields.Completed = false;
    if (req.body.Completed == true) itemFields.Completed = true;

    Item.findOneAndUpdate(
      { _id: req.params.id },
      { $set: itemFields },
      { new: true }
    ).then(item => res.json(item));
  }
);

// @route  POST api/items/delete/:id
// @desc   Create API for deleting data
// @access Private
router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.findOneAndRemove({ _id: req.params.id })
      .then(item => { res.json(item) })
      .catch(err => res.status(404).json('Delete fail!'));
  }
);

module.exports = router;
