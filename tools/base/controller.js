var __SCHEMA_NAME_TITLEIZE__ = require('./model');

function create (req, res, cb){
  __SCHEMA_NAME_TITLEIZE__.create(req, res, cb);
}

function retrieve (req, res, cb){
  __SCHEMA_NAME_TITLEIZE__.retrieve(req, res, cb);
}

function retrieveById (req, res, cb){
  __SCHEMA_NAME_TITLEIZE__.retrieveById(req, res, cb);
}

function update (req, res, cb){
  __SCHEMA_NAME_TITLEIZE__.update(req, res, cb);
}

function remove (req, res, cb){
  __SCHEMA_NAME_TITLEIZE__.remove(req, res, cb);
}

module.exports = {
  create: create,
  retrieve: retrieve,
  retrieveById: retrieveById,
  update: update,
  remove: remove
}