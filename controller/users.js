'use strict';

var response = require('./../res');
var connection = require('./../conn');
var connectionAR = require('./../conn-ar');

exports.users = function (req, res) {
  connection.query('SELECT * FROM users', function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      response.ok(rows, res)
    }
  });
};

exports.findUser = function (req, res) {
  var userID = req.params.id;
  connection.query('SELECT * FROM users WHERE user_id = ?', [ userID ] , function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      response.ok(rows, res)
    }
  });
};

exports.insertUser = function (req, res) {

  var sql = 'INSERT INTO com_user (user_name, user_mail) VALUES(?,?)';
  var data = [
    req.body.user_name,
    req.body.user_mail
  ];

  connection.query(sql, data, function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      var sql = 'INSERT INTO users (user_id,department_id, emp_cd, full_name, gender, marital_st, birth_date) VALUES(LAST_INSERT_ID(),?,?,?,?,?,?)';
      var data = [
        req.body.departement_id,
        req.body.emp_cd,
        req.body.full_name,
        req.body.gender,
        req.body.marital_st,
        req.body.birth_date,
      ]

      connection.query(sql, data, function (error, rows, fields) {
        if (error) {
          console.log(error)
        } else {
          response.ok("Berhasil menambahkan user!", res)
        }
      });
    }
  });
};

exports.updateUser = function (req, res) {
  var updateData = {
    department_id: req.body.department_id,
    emp_cd: req.body.emp_cd,
    full_name: req.body.full_name,
    gender: req.body.gender,
    marital_st: req.body.marital_st,
    birth_date: req.body.birth_date,
    birth_place: req.body.birth_place,
    address_main: req.body.address_main
  }

  connectionAR.where( {user_id: req.body.user_id} )
    .update('users', updateData, function (error, rows, fields){
      if (error) {
        console.log(error)
      } else {
        response.ok("Berhasil mengupdate user!", res)
      }
    });
}

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res)
};