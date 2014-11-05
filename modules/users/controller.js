var User = require('./model');

function create (req, res, cb){
  User.create(req, res, cb);
}

function retrieve (req, res, cb){
  User.retrieve(req, res, cb);
}

function retrieveById (req, res, cb){
  User.retrieveById(req, res, cb);
}

function update (req, res, cb){
  User.update(req, res, cb);
}

function remove (req, res, cb){
  User.remove(req, res, cb);
}

module.exports = {
  create: create,
  retrieve: retrieve,
  retrieveById: retrieveById,
  update: update,
  remove: remove
}