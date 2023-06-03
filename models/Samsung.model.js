const mongoose = require('mongoose');
// const db = require('./db');
var db = require ('../models/db');

mongoose.connect('mongodb://127.0.0.1/Assigamen');
const Schema = mongoose.Schema;
const SamSungSchema = new Schema({
    nameDT: {type: String ,maxLength: 250},
    priceDT: {type: Number},
    imageDT: {type: String},
    description: {type: String},
    quantity: {type: Number},
    createdAt: {type: Date ,default: Date.now},
    updatedAt: {type: Date , default: Date.now },
    
  }, {
  
    collection:'SamSung'
  });
  
  module.exports = mongoose.model('SamSung' , SamSungSchema)









