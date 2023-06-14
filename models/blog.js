const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
  title:{
    type: String,
    // required: true
  },
  image:{
    type: String,
    // required: true
  },
  date:{
    type: Date,
    default: Date.now
  },
  text:{
    type: String,
    // required: true
  },
  category:{
   type: String,
  //  required: true
  },
  userId:{
    type: String,
    // required: true
  }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;