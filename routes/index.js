let express = require('express');
let router = express.Router();
let markdown = require('markdown').markdown
const ObjectID = require('mongodb').ObjectID


let findAll = require('../mongodb/findAll');
let find = require('../mongodb/find')


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
      res.render('blogList',{lists})
   })
});

router= router.get('/blog/:id',function (req, res) {
   find({_id:ObjectID(req.params.id)}).then((blogs)=>{
      let blog = blogs[0]
      blog.content = markdown.toHTML(blog.content||'');
      res.render('blog',{blog})
   })
})

module.exports = router;
