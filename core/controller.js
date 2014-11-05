var Schema;

/**
* Initialize methods.
*
* @method init
* @param {Object} Schema expects mongoose.schema.
* @return {Object} Methods of schema.
*/
function init (schema) {
  Schema = schema;

  return {
    create: create,
    retrieve: retrieve,
    retrieveById: retrieveById,
    update: update,
    remove: remove
  }
}

/**
* Create new model
*
* @method create
* @param {Object} req Request object
* @param {Object} res Response object
* @param {Function} callback Callback function
*/
function create (req, res, cb) {
  var dados = req.body;
  var model = new Schema(dados);

  model.save(function (err, data) {
    cb(err, data, res);
  });
}

/**
* Retrive all models in collection
*
* @method retrieve
* @param {Object} req Request object
* @param {Object} res Response object
* @param {Function} callback Callback function
*/
function retrieve (req, res, cb){
  Schema.find({}, function (err, data) {
    cb(err, data, res);
  });
}

/**
* Retrive models in collection
*
* @method retrieveById
* @param {Object} req Request object
* @param {Object} res Response object
* @param {Function} callback Callback function
*/
function retrieveById (req, res, cb){
  var id = req.params.id;
  var query = { _id: id };

  Schema.find(query, function (err, data) {
    cb(err, data, res);
  });
}

/**
* Update model by id
*
* @method update
* @param {Object} req Request object
* @param {Object} res Response object
* @param {Function} callback Callback function
*/
function update (req, res, cb){
  var id = req.params.id;
  var query = { _id: id }; 
  var mod = req.body;

  delete mod._id;
  Schema.update(query, mod, function (err, data) {
    cb(err, data, res);
  });
}

/**
* Remove model by id
*
* @method remove
* @param {Object} req Request object
* @param {Object} res Response object
* @param {Function} callback Callback function
*/
function remove (req, res, cb){
  var id = req.params.id;
  var query = {_id: id};

  Schema.remove(query, function(err, data) {
    cb(err, data, res);
  });
}

/*
 * Export init method
 */
module.exports = init;