const Product = require('../models/Product');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Assigamen');
exports.index =   (req, res )=>{
    res.render('home/index')
}

