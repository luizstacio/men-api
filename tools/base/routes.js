var express = require('express');
var router = express.Router();
var __SCHEMA_NAME_LOWERCASE__Ctrl = require('./controller');
var cb = require('../../core/cb_default');

/* GET __SCHEMA_NAME_LOWERCASE__ listing. */
router.get('/', function(req, res) {
  __SCHEMA_NAME_LOWERCASE__Ctrl.retrieve(req, res, cb);
});

/* GET __SCHEMA_NAME_LOWERCASE__ retrive by id. */
router.get('/:id', function(req, res) {
  __SCHEMA_NAME_LOWERCASE__Ctrl.retrieveById(req, res, cb);
});

/* POST __SCHEMA_NAME_LOWERCASE__ create. */
router.post('/', function(req, res) {
  __SCHEMA_NAME_LOWERCASE__Ctrl.create(req, res, cb);
});

/* PUT __SCHEMA_NAME_LOWERCASE__ edit by id. */
router.put('/:id', function(req, res) {
  __SCHEMA_NAME_LOWERCASE__Ctrl.update(req, res, cb);
});

/* DELETE __SCHEMA_NAME_LOWERCASE__ delete by id. */
router.delete('/:id', function(req, res) {
  __SCHEMA_NAME_LOWERCASE__Ctrl.remove(req, res, cb);
});

/*
 * Exports router
 */
module.exports = router;