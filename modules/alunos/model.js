/*
 * require model of core
 */
var createModel = require('../../core/model');
var schema;

/*
 * Objct config schema
 */
schema = {
  name: { type: 'String' }
};

/*
 * Exports new model
 */
module.exports = createModel('Aluno', schema);