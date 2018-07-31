let express = require('express');
let router = express.Router();

let findAll = require('../mongodb/findAll');


/* GET home page. */
router.get('/', function (req, res, next) {
   findAll().then((val) => {
      res.render('index', {title: 'Express',val});
   })
});

module.exports = router;
