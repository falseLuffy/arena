let express = require('express');
let router = express.Router();

let findAll = require('../mongodb/findAll');


/* GET home page. */
router = router.get('/', function (req, res, next) {
   findAll().then((val) => {
      res.render('index', {val});
   })
});
router= router.get('/admin',function (req, res) {
   res.render('index',{val:[]})
})

module.exports = router;
