var Aluno = require('./model');

function create (req, res, cb){
  Aluno.create(req, res, cb);
}

function retrieve (req, res, cb){
  Aluno.retrieve(req, res, cb);
}

function retrieveById (req, res, cb){
  Aluno.retrieveById(req, res, cb);
}

function update (req, res, cb){
  Aluno.update(req, res, cb);
}

function remove (req, res, cb){
  Aluno.remove(req, res, cb);
}

module.exports = {
  create: create,
  retrieve: retrieve,
  retrieveById: retrieveById,
  update: update,
  remove: remove
}