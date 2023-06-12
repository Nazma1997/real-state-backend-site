const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fName:{
    type: String,
    required: true
  },
  lName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;