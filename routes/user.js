var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  
    let products = [
      {
        name:"Iphone 11",
        category:"mobile",
        description:"All-new dual-camera system with Ultra Wide. Night mode and stunning video quality. Water and dust resistance.(1) All-day battery life.2 In six stunning colours.",
        image:"https://shop.unicornstore.in/uploads/images/medium/243aaca114e330dac487f33910fcc258.jpeg"
      },
      {
        name:"Samsung M32",
        category:"mobile",
        description:"All-new dual-camera system with Ultra Wide. Night mode and stunning video quality. Water and dust resistance.(1) All-day battery life.2 In six stunning colours.",
        image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7JAcHF6kqsddpGlCrryjNPuwAyb22waXIsJp4BV93Yguh_yc8qxg8jFZyqud6qx1Dg3717pMZZHxNk_WaoSaPrciNS82wW9Xryw_cS8cECm3susFUTS3OTg&usqp=CAE"
      },
      {
        name:"Realme 6",
        category:"mobile",
        description:"All-new dual-camera system with Ultra Wide. Night mode and stunning video quality. Water and dust resistance.(1) All-day battery life.2 In six stunning colours.",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQs9PRrlq05YhsCEPNUNETbpHHb7X1CP7dxRQzGkrGHtVLPXRdOq9kfcDrcopSnHTArVuyagMPMBg&usqp=CAc"
      },
      {
        name:"Redmi 10T",
        category:"mobile",
        description:"All-new dual-camera system with Ultra Wide. Night mode and stunning video quality. Water and dust resistance.(1) All-day battery life.2 In six stunning colours.",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXVLDygHhXm_mV08aFkcjgn4HqQdeH0HX6IKrObllvH7OritnItBE1Jy5Kz9xsUb8ANBrq15kcuk2uAbsn2e-vhQtwz8NWYVjqtrrPXaXQSAVX5c6b8QZv&usqp=CAE"
      }
    ]


  res.render('index', {products});
});



module.exports = router;
