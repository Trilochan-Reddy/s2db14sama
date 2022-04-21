var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var petshop_controller = require('../controllers/petshop');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/petshop', petshop_controller.petshop_create_post);
// DELETE request to delete bakery.
router.delete('/petshop/:id', petshop_controller.petshop_delete);
// PUT request to update bakery.
router.put('/petshop/:id', petshop_controller.petshop_update_put);
// GET request for one bakery.
router.get('/petshop/:id', petshop_controller.petshop_detail);
// GET request for list of all bakery items.
router.get('/petshop', petshop_controller.petshop_list);
module.exports = router;