let express = require('express');
let router = express.Router();

let findAll = require('../mongodb/findAll');


/* GET home page. */
router = router.get('/', function (req, res, next) {
   findAll().then((val) => {
      res.render('index', {val});
   })
});
router= router.get('/blog',function (req, res) {
   findAll().then((lists)=>{
      res.render('blog',{lists})
   })
});

module.exports = router;
