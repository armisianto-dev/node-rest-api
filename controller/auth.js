'use strict';

var response = require('./../res');
var connection = require('./../conn');
var connectionAR = require('./../conn-ar');

exports.loginProcess = function (req, res) {
  var where = [
    req.body.username,
    req.body.password
  ]

  var username = req.body.username;
  var password = req.body.password;

  
  if (username == 'admin' && password == 'admin123') {
    var rows = [{
      "user_id" : "134"
    }]
    response.ok(rows, res)
  } else {
    var rows = []
    response.ok(rows, res)
  }
}

exports.index = function (req, res) {
  response.ok("Login API", res)
};