var express = require('express');
var router = express.Router();
var alunoCtrl = require('./controller');
var cb = require('../../core/cb_default');

/* GET aluno listing. */
router.get('/', function(req, res) {
  alunoCtrl.retrieve(req, res, cb);
});

/* GET aluno retrive by id. */
router.get('/:id', function(req, res) {
  alunoCtrl.retrieveById(req, res, cb);
});

/* POST aluno create. */
router.post('/', function(req, res) {
  alunoCtrl.create(req, res, cb);
});

/* PUT aluno edit by id. */
router.put('/:id', function(req, res) {
  alunoCtrl.update(req, res, cb);
});

/* DELETE aluno delete by id. */
router.delete('/:id', function(req, res) {
  alunoCtrl.remove(req, res, cb);
});

/*
 * Exports router
 */
module.exports = router;