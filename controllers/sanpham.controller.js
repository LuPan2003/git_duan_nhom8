// var fs = require('fs');
// var myMD = require('../models/Product');

// exports.list = (q,s,n)=>{
// }

// exports.list = async (req, res, next)=>{
//     // thêm điều kiện lọc
//     let dieu_kien_loc = null;
//     if(typeof(req.query.giaSP) != 'undefined'){
//         // dieu_kien_loc = { price: req.query.price }; // tìm chính xác
//         dieu_kien_loc = { giaSP: {$gte: req.query.giaSP } }; // >= xxxx

//     }
//     let list = await myMD.AccountSchema.find(  dieu_kien_loc ).sort( { name: 1 } );    
//     res.render('home/sanpham', { listSP: list})
// }

// exports.add = (req, res, next)=>{     
//     var url = '';
//     if(req.method =='POST'){
//         console.log(req.file, req.body );
//         try {
//             fs.renameSync(req.file.path,
//                 './public/uploads/' + req.file.originalname) ;
//                 url = 'http://localhost:3000/uploads/' + req.file.originalname;
//              console.log('url: http://localhost:3000/uploads/' + req.file.originalname );

//         } catch (error) {
            
//         }
//     } 
//     res.render('home/sanpham',{url:url})
// }

// exports.addSanPham = async (req,res,next)=>{
//     //khai báo biến thông tin
//     // let msg = '';
//     if(req.method =='POST'){
//         console.log(req.body);
//     }
//     // res.render('home/sanpham', {msg: msg });
// }



