const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Assigamen');

var db = require ('../models/db');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {type: String},
    user: {type: String},
    email: {type: String},
    avata: {type: String},
    createdAt: {type: Date ,default: Date.now},
    updatedAt: {type: Date , default: Date.now },

  }, {
    collection:'User'
  });

  module.exports = mongoose.model('User' , UserSchema)
