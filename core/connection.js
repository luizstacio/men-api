var mongoose = require('mongoose');
var dataBaseUrl = 'mongodb://localhost/db_test';

/**
 * Create database connection
 */
mongoose.connect(dataBaseUrl);

/**
 * Event success connection
 */
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dataBaseUrl);
});

/**
 * Event error connection
 */
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

/**
 * Event disconnection database
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

/**
 * Event open connection
 */
mongoose.connection.once('open', function () {
  console.log('Mongoose default connection is open')
});

/**
 * If the Node process ends, close the Mongoose connection
 */
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;