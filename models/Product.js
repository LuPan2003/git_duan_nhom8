  const mongoose = require('mongoose');
  // const db = require('./db');
  var db = require ('../models/db');

  mongoose.connect('mongodb://127.0.0.1/Assigamen');
  const Schema = mongoose.Schema;
  const AccountSchema = new Schema({
      tenSP: {type: String ,maxLength: 250},
      loaiSP: {type: String},
      anhSP: {type: String},
      noidung: {type: String},
      giaSP: {type: Number},
      createdAt: {type: Date ,default: Date.now},
      updatedAt: {type: Date , default: Date.now },
      
    }, {
    
      collection:'Product'
    });
    
    module.exports = mongoose.model('Product' , AccountSchema)









