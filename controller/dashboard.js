'use strict';

var response = require('./../res');
var connection = require('./../conn');
var connectionAR = require('./../conn-ar');

exports.lapJaldin = function (req, res) {
  var where = [
    9,
    req.params.user_id,
    req.params.tahun
  ]

  var sql = 'SELECT COUNT(*)"total_lap", COUNT(b.duty_id)"lap_finish" FROM users_duty a ';
      sql +=' LEFT JOIN( SELECT duty_id, action_st, process_st FROM users_duty_process WHERE flow_id = ? ) b ON a.duty_id = b.duty_id AND b.action_st = "done" AND b.process_st = "approve" ';
      sql +=' WHERE a.user_id = ? AND YEAR(a.date_start) = ? ';
  connection.query(sql, where, function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      response.ok(rows, res)
    }
  });
}

exports.index = function (req, res) {
  response.ok("Dashboard API", res)
};