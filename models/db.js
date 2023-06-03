const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/Assigamen'); 
        console.log('connect successfuly!')        
    } catch (error) {
        console.log('connect failure!')   
        Model.find()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
    }
}
module.exports ={connect};




