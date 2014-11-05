/*
 * require model of core
 */
var createModel = require('../../core/model');
var schema;

/*
 * Objct config schema
 */
schema = {
  name: { type: 'String', default: '' },
  email: { type: 'String', default: '' }
};

/*
 * Exports new model
 */
module.exports = createModel('User', schema);