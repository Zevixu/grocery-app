const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({ 
  item_name:{
    type: String,
    required: true
  },
  item_quantity:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  user_id:{
    type: String,
    required: true
  },
  Completed:{
    type: Boolean,
    default: false
  }
});

module.exports = Item = mongoose.model('items', ItemSchema);
