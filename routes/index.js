var express = require('express');
var router = express.Router();
// var homeCtrl = require('../controllers/home.controller');
var myMD = require('../models/Product');
var myIP = require('../models/Iphone.model');
var myNk = require('../models/Nokia.model');
var myOP = require('../models/Oppo.model');
var mySS = require('../models/Samsung.model');
var myMDUSER = require('../models/username.model');

var fs = require('fs');

var multer = require('multer')

var upload = multer({dest:'uploads/'})

const { log } = require('console');

router.get('/login', function(req, res, next) {
  res.render('home/login')
});

router.get('/', function(req, res, next) {
  res.render('home/dangnhap')
});

router.get('/index', function(req, res, next) {
  res.render('home/index')
});



router.get('/xemchitiet', function(req, res, next) {
  console.log('xem chi tiet');
  res.render('home/chitiet')
});


 router.get('/sanpham', function(req, res, next) {
  myMD.find({})
  .then(result=>{
    res.render('home/sanpham',{products:result})
  });
});

router.get('/Iphone', function(req, res, next) {
  myIP.find({})
  .then(result=>{
    res.render('home/Iphone',{iphone:result})
  });
});

router.get('/Nokia', function(req, res, next) {
  myNk.find({})
  .then(result=>{
    res.render('home/Nokia',{nokia:result})
  });
});

router.get('/Oppo', function(req, res, next) {
  myOP.find({})
  .then(result=>{
    res.render('home/Oppo',{oppo:result})
  });
});

router.get('/SamSung', function(req, res, next) {
  mySS.find({})
  .then(result=>{
    res.render('home/SamSung',{samsung:result})
  });
});

router.post('/sanpham/addnew',upload.single('file_anh'), function(req,res,next){
  fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
        const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
        const data = {
          tenSP:req.body.tenSP,
          loaiSP:req.body.loaiSP,
          anhSP:link_img,
          noidung:req.body.noidung,
          giaSP:req.body.giaSP
        }
    const sanpham = new myMD(data);
    sanpham.save()
    .then(()=> res.redirect('/sanpham'));
  })
})

router.post('/sampham/sua/:id',upload.single('file_anh'), (req, res) => {
  if (req.file === undefined) {
    const data = {
      tenSP:req.body.tenSP,
      loaiSP:req.body.loaiSP,
      noidung:req.body.noidung,
      giaSP:req.body.giaSP
    }
    myMD.updateOne({_id:req.params.id},{$set:data})
    .then(()=> res.redirect('/sanpham'));
  }else{
    fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
      const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
      const data = {
        tenSP:req.body.tenSP,
        loaiSP:req.body.loaiSP,
        anhSP:link_img,
        noidung:req.body.noidung,
        giaSP:req.body.giaSP
      }
      myMD.updateOne({_id:req.params.id},{$set:data})
      .then(()=> res.redirect('/sanpham'));
})
  }
});

router.post('/sanpham/xoa/:id', (req, res) => {
  myMD.deleteOne({_id:req.params.id})
    .then((sanpham) => {
      res.redirect('/sanpham');
    }).catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//Thêm Sữa Xóa IPhone

router.post('/Iphone/addnew',upload.single('file_anh'), function(req,res,next){
  fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
        const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
        const data = {
          nameDT:req.body.nameDT,
          quantity:req.body.quantity,
          imageDT:link_img,
          description:req.body.description,
          priceDt:req.body.priceDt
        }
    const iphone = new myIP(data);
    iphone.save()
    .then(()=> res.redirect('/Iphone'));
  })
})



router.post('/Iphone/sua/:id',upload.single('file_anh'), (req, res) => {
  if (req.file === undefined) {
    const data = {
      nameDT:req.body.nameDT,
      quantity:req.body.quantity,
      description:req.body.description,
      priceDt:req.body.priceDt
    }
    myIP.updateOne({_id:req.params.id},{$set:data})
    .then(()=> res.redirect('/Iphone'));
  }else{
    fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
      const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
      const data = {
        nameDT:req.body.nameDT,
        quantity:req.body.quantity,
        imageDT:link_img,
        description:req.body.description,
        priceDt:req.body.priceDt
      }
      myIP.updateOne({_id:req.params.id},{$set:data})
      .then(()=> res.redirect('/Iphone'));
})
  }
});

router.post('/Iphone/xoa/:id', (req, res) => {
  myIP.deleteOne({_id:req.params.id})
    .then((Iphone) => {
      res.redirect('/Iphone');
    }).catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
////////////////////////////////////////////////


//Thêm Sữa Xóa SamSung

router.post('/SamSung/addnew',upload.single('file_anh'), function(req,res,next){
  fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
        const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
        const data = {
          nameDT:req.body.nameDT,
          quantity:req.body.quantity,
          imageDT:link_img,
          description:req.body.description,
          priceDT:req.body.priceDT
        }
    const samsung = new mySS(data);
    samsung.save()
    .then(()=> res.redirect('/SamSung'));
  })
})



router.post('/SamSung/sua/:id',upload.single('file_anh'), (req, res) => {
  if (req.file === undefined) {
    const data = {
      nameDT:req.body.nameDT,
      quantity:req.body.quantity,
      description:req.body.description,
      priceDT:req.body.priceDT
    }
    mySS.updateOne({_id:req.params.id},{$set:data})
    .then(()=> res.redirect('/SamSung'));
  }else{
    fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
      const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
      const data = {
        nameDT:req.body.nameDT,
        quantity:req.body.quantity,
        imageDT:link_img,
        description:req.body.description,
        priceDT:req.body.priceDT
      }
      mySS.updateOne({_id:req.params.id},{$set:data})
      .then(()=> res.redirect('/SamSung'));
})
  }
});

router.post('/SamSung/xoa/:id', (req, res) => {
  mySS.deleteOne({_id:req.params.id})
    .then((SamSung) => {
      res.redirect('/SamSung');
    }).catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
////////////////////////////////////////////////

//Thêm Sữa Xóa Oppo

router.post('/Oppo/addnew',upload.single('file_anh'), function(req,res,next){
  fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
        const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
        const data = {
          nameDT:req.body.nameDT,
          quantity:req.body.quantity,
          image:link_img,
          description:req.body.description,
          priceDT:req.body.priceDT
        }
    const oppo = new myOP(data);
    oppo.save()
    .then(()=> res.redirect('/Oppo'));
  })
})



router.post('/Oppo/sua/:id',upload.single('file_anh'), (req, res) => {
  if (req.file === undefined) {
    const data = {
      nameDT:req.body.nameDT,
      quantity:req.body.quantity,
      description:req.body.description,
      priceDT:req.body.priceDT
    }
    myOP.updateOne({_id:req.params.id},{$set:data})
    .then(()=> res.redirect('/Oppo'));
  }else{
    fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
      const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
      const data = {
        nameDT:req.body.nameDT,
        quantity:req.body.quantity,
        image:link_img,
        description:req.body.description,
        priceDT:req.body.priceDT
      }
      myOP.updateOne({_id:req.params.id},{$set:data})
      .then(()=> res.redirect('/Oppo'));
})
  }
});

router.post('/Oppo/xoa/:id', (req, res) => {
  myOP.deleteOne({_id:req.params.id})
    .then((Oppo) => {
      res.redirect('/Oppo');
    }).catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
////////////////////////////////////////////////


//Thêm Sữa Xóa Nokia

router.post('/Nokia/addnew',upload.single('file_anh'), function(req,res,next){
  fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
        const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
        const data = {
          nameDT:req.body.nameDT,
          quantity:req.body.quantity,
          imageDT:link_img,
          description:req.body.description,
          priceDT:req.body.priceDT
        }
    const nokia = new myNk(data);
    nokia.save()
    .then(()=> res.redirect('/Nokia'));
  })
})



router.post('/Nokia/sua/:id',upload.single('file_anh'), (req, res) => {
  if (req.file === undefined) {
    const data = {
      nameDT:req.body.nameDT,
      quantity:req.body.quantity,
      description:req.body.description,
      priceDT:req.body.priceDT
    }
    myNk.updateOne({_id:req.params.id},{$set:data})
    .then(()=> res.redirect('/Nokia'));
  }else{
    fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
      const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
      const data = {
        nameDT:req.body.nameDT,
        quantity:req.body.quantity,
        imageDT:link_img,
        description:req.body.description,
        priceDT:req.body.priceDT
      }
      myNk.updateOne({_id:req.params.id},{$set:data})
      .then(()=> res.redirect('/Nokia'));
})
  }
});

router.post('/Nokia/xoa/:id', (req, res) => {
  myNk.deleteOne({_id:req.params.id})
    .then((Nokia) => {
      res.redirect('/Nokia');
    }).catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
////////////////////////////////////////////////

router.post('/user/sua/:id',upload.single('file_anh'), (req, res) => {
  if (req.file === undefined) {
    const data = {
      username:req.body.username,
      email:req.body.email,
      user:req.body.user,
    }
    myMDUSER.updateOne({_id:req.params.id},{$set:data})
    .then(()=> res.redirect('/user'));
  }else{
    fs.rename(req.file.path,'uploads/'+req.file.originalname,function(err){
      const link_img = 'http://localhost:3000/uploads/'+req.file.originalname;
      const data = {

        username:req.body.username,
        email:req.body.email,
        avata:link_img,
        user:req.body.user
      }
      myMDUSER.updateOne({_id:req.params.id},{$set:data})
      .then(()=> res.redirect('/user'));
})
  }
});







router.post('/user/xoa/:id', (req, res) => {
  myMDUSER.deleteOne({_id:req.params.id})
    .then((user) => {
      res.redirect('/user');
    }).catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


router.get('/user', function(req, res, next) {
  myMDUSER.find({})
  .then(result=>{
    res.render('home/user' , {users:result})
  })
});


router.post('/dangnhap' , function(req , res , next){
  const data = req.body;
  console.log("data",data)
  myMDUSER.findOne({ email: data.email})
  .then(users => {
    if (!users) {
      return res.status(404).send({ message: 'Email không tồn tại!' });
    }
    else if (data.password != users.password) {
      return res.status(400).send({ message: 'Sai mật khẩu!' });
    }
    else {
      const { email, password } = req.body;
      console.log(data.email)
      const acceptHeader = req.headers.Content_Type;
      if (acceptHeader === 'application/json') {
        res.status(200).send({ message: 'Đăng nhập thành công!' });
      }else{
         res.render("home");
      }
    }
   })
})

router.get('/chitiet', function(req, res, next) {
  myMD.find({})
  .then(result=>{
    res.render('home/chitiet',{products:result})
  })
});

module.exports = router;

