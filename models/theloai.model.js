const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Assigamen');


const Schema = mongoose.Schema;

const  theloaiSchema = new Schema({

    theloai: {type: String},
   
    createdAt: {type: Date ,default: Date.now},
    updatedAt: {type: Date , default: Date.now },

  }, {
    collection:'Category'
  });

  module.exports = mongoose.model('Category' , theloaiSchema)
