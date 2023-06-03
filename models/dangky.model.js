const mongoose = require('mongoose');
// const db = require('./db');
var db = require ('../models/db');

mongoose.connect('mongodb://127.0.0.1/Assigamen');


const Schema = mongoose.Schema;

const AccountSchema = new Schema({
   
    username: {type: String ,maxLength: 250},
    password: {type: String},
    email: {type: String},
    user: {type: String},
    avata: {type: String},
    createdAt: {type: Date ,default: Date.now},
    updatedAt: {type: Date , default: Date.now },

    
  }, {
   
    collection:'User'
  });
  
  module.exports = mongoose.model('User' , AccountSchema)
 








