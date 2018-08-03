let express = require('express');
let router = express.Router();
let markdown = require('markdown').markdown;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const  fs = require('fs');

let findAll = require('../mongodb/findAll');
let find = require('../mongodb/find')

let backImage = fs.readFileSync(path.join(__dirname ,'../public/images/backImage.jpg'))

/* GET home page. */
router = router.get('/', function (req, res, next) {
   findAll().then((val) => {
      res.render('index', {val,backImage:'data:image/jpg;base64,'+backImage.toString("base64")});
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
