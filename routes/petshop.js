/*
var express = require('express');
var router = express.Router();


const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
*/
var express = require('express');
const petshop_controlers= require('../controllers/petshop');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('petshop', { title: 'Search Results petshop class' });
});



//var express = require('express');
//const petshop_controlers= require('../controllers/petshop');
var router = express.Router();
/* GET costumes */
router.get('/', petshop_controlers.petshop_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', petshop_controlers.petshop_view_one_Page);

/* GET create bakery page */
//router.get('/create',secured, petshop_controlers.petshop_create_Page);
router.get('/create',petshop_controlers.petshop_create_Page);


/* GET create update page */
//router.get('/update',secured, petshop_controlers.petshop_update_Page);
router.get('/update',petshop_controlers.petshop_update_Page);

/* GET create bakery page */
//router.get('/delete',secured, petshop_controlers.petshop_delete_Page);

router.get('/delete',petshop_controlers.petshop_delete_Page);

