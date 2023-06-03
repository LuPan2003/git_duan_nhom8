exports.login =(req , res , next ) =>{  
    res.render('home/login');
}
module.exports.postLogin = function(req , res){
    console.log("Hello AE");
}