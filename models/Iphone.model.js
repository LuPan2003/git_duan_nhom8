const mongoose = require('mongoose');
// const db = require('./db');
var db = require ('../models/db');

mongoose.connect('mongodb://127.0.0.1/Assigamen');
const Schema = mongoose.Schema;
const IphoneSchema = new Schema({
    nameDT: {type: String ,maxLength: 250},
    quantity: {type: Number},
    imageDT: {type: String},
    description: {type: String},
    priceDt: {type: Number},
    createdAt: {type: Date ,default: Date.now},
    updatedAt: {type: Date , default: Date.now },
    
  }, {
  
    collection:'IPhone'
  });
  
  module.exports = mongoose.model('IPhone' , IphoneSchema)









