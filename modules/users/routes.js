var express = require('express');
var router = express.Router();
var userCtrl = require('./controller');
var cb = require('../../core/cb_default');

/* GET user listing. */
router.get('/', function(req, res) {
  userCtrl.retrieve(req, res, cb);
});

/* GET user retrive by id. */
router.get('/:id', function(req, res) {
  userCtrl.retrieveById(req, res, cb);
});

/* POST user create. */
router.post('/', function(req, res) {
  userCtrl.create(req, res, cb);
});

/* PUT user edit by id. */
router.put('/:id', function(req, res) {
  userCtrl.update(req, res, cb);
});

/* DELETE user delete by id. */
router.delete('/:id', function(req, res) {
  userCtrl.remove(req, res, cb);
});

/*
 * Exports router
 */
module.exports = router;