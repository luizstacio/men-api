var mongoose = require('./connection');
var controller = require('./controller');
var Schema = mongoose.Schema;

/**
* Initialize Schema with methods.
*
* @method init
* @param {Object} Schema Expects object configuration schema.
*   {
*     name: { type: String, default: '' },
*     description: { type: String, default: '' }
*   }
* @return {Object} Controller Methods of schema.
*/
function init (collection, configSchema) {
  return controller(
    createModel(collection, configSchema)
  );
}

/**
* createModel, create mongoose.schema by configSchame.
*
* @method createModel
* @param {Object} Schema expect object configuration schema.
*   {
*     name: { type: String, default: '' },
*     description: { type: String, default: '' }
*   }
* @return {Object} Model moongose.model
*/
function createModel (collection, configSchema) {
  return mongoose.model(collection, new Schema(configSchema));
}

/*
 * Export init method
 */
module.exports = init;