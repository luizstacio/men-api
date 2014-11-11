// vem no core do Node.js
var assert = require('assert');
var exec = require('child_process').exec;
var userCtrl = require('../modules/users/controller.js');
var util = require('./util');
var userId = '';

var mock = {
  name: 'User',
  email: 'user@user.com'
};

var mockUpdate = {
  name: 'User__',
  email: 'user__@user.com'
};

before(function(done){
  setTimeout(function(){
    console.log('\n');
    done();
  }, 1500);
});

describe('Testing CRUD', function(){

  it('RETRIEVE users', function(cb){
    userCtrl.retrieve({}, {}, function(err, data, res){
      assert.ok(Array.isArray(data));
      cb();
    });
  });

  it('CREATE user', function(cb){
    var req = {
      body: mock
    };

    userCtrl.create(req, {}, function(err, data, res){
      userId = data._id;

      assert.ok(util.dataEquals(mock, data));
      cb();
    });
  });

  it('RETRIEVE user BY ID', function(cb){
    var req = {
      params: {
        id: userId
      }
    };

    userCtrl.retrieveById(req, {}, function(err, data, res){
      assert.ok(util.dataEquals(mock, data[0]));
      cb();
    });
  });

  it('UPDATE user', function(cb){
    var req = {
      params: {
        id: userId
      },
      body: mockUpdate
    };

    userCtrl.update(req, {}, function(err, data, res){
      assert.equal(data, 1);
      cb();
    });
  });


  it('DELETE user', function(cb){
    var req = {
      params: {
        id: userId
      }
    };

    userCtrl.remove(req, {}, function(err, data, res){
      assert.equal(data, 1);
      cb();
    });
  });
});