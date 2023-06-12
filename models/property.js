const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
  title:{
    type: String,
    // required: true
  },
  price:{
    type: String,
    // required: true
  },
  text:{
    type: String,
    // required: true
  },
  location:{
    type: String,
    // required: true
  },
  subLocation:{
   type: String,
  //  required: true
  },
  type:{
    type:String,
    // required: true
  },
  status:{
    type: String,
    // required: true
  },
  bedroom: {
    type: String,
    // required: true
  },
  bathroom:{
    type: String,
    // required: true
  },
  garage:{
    type: String,
    // required: true
  },
  area:{
    type: String,
    // required: true
  },
  kitchen:{
    type: String,
    // required: true
  },
  livingRoom: {
    type: String,
    // required: true
  },
  video:{
    type: String,
    // required: true
  },
  image:{
    type: String,
    // required: true
  },

  userId:{
    type: String,
    // required: true
  }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;