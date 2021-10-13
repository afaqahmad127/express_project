const express = require('express');
const router = express.Router();
const Res = require('../models/resource'); // 
var multer = require('multer');


// old multer code here - start
var storage = multer.diskStorage({
    destination : function(req , file , cb) {
        // console.log("FILE :: ",file);
        cb(null , 'assets/media/users/')
    },
    filename : function (req , file , cb) {
        cb(null , Date.now() + file.originalname)
    }
})

var upload = multer({
    storage : storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        // if (file.mimetype == "application/vnd.ms-excel" ) {
          cb(null, true);
        } else {
          cb(null, false);
        //   return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
})
// old multer code here - close



router.get('/add',(req , res)=>{
    res.render('resource/add')
});

router.post('/add', upload.single('blogimage'), async (req , res)=>{
    
    //  ===========================
    // res.send(req.body);

    // res.send('blogs section');
    let addres = new Res({
        fileinfo : req.file.path,
        name : req.body.name,
        delivery : req.body.delivery,
        set_name : req.body.set_name,
        bid_strategy : req.body.bid_strategy,
        budget : req.body.budget,
        results : req.body.results,
        impressions : req.body.impressions,
        cost_per_result : req.body.cost_per_result,
        add_to_cart : req.body.add_to_cart,
        purchases : req.body.purchases,
        amount_spent : req.body.amount_spent,
        purchase_con_val : req.body.purchase_con_val,
        purchase_roas : req.body.purchase_roas,
        unique_link_click : req.body.unique_link_click,
        cpc : req.body.cpc,
        company_name : req.body.company_name,
        ship_date : req.body.ship_date,
        status : req.body.status,
        type : req.body.type,
    })

    try{

        addres = await addres.save(function(err,room){
            // var newRoomId = room._id;
            console.log('id-> ' , room);
          res.send('inserted');
          });
        // res.send('create ho gya');
    }catch(e){
        console.log('catch ', e.message);
    }
    //  =====================================

});


router.get('/table', async (req , res)=>{

    try {
        // console.log('req -> ',req);
        await Res.find().then(function (ninja){
            
            var oj=JSON.stringify(ninja);
            var hh=JSON.parse(oj)
            
            res.render('resource/table',{data:hh})
        })


        // res.send(users);

    } catch (error) {
        console.log(error.message);
    }


});


router.get('/delete/:id' , async (req , res )=>{
    Res.findByIdAndDelete(req.params.id , function(err){
        if(err){
            res.send('error in deleting ');
        } else {
            res.redirect(301 , "/resource/table");
        }
     });
})


router.get('/datatable/catch', async (req , res , next )=>{




})

module.exports = router;