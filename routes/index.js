let express = require('express');
let router = express.Router();
let markdown = require('markdown').markdown

let findAll = require('../mongodb/findAll');


/* GET home page. */
router = router.get('/', function (req, res, next) {
   findAll().then((val) => {
      res.render('index', {val});
   })
});
router= router.get('/blog',function (req, res) {
   findAll().then((lists)=>{
      lists.forEach((list)=>{
         list.content = markdown.toHTML(list.content||'');
      })
      res.render('blog',{lists})
   })
});

module.exports = router;
