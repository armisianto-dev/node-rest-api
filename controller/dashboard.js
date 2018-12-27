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

exports.userLeave = function (req, res) {
  var where = [
    req.params.user_id,
    req.params.tahun
  ]

  var sql = 'SELECT a.user_id, a.tahun,SUM(total)"total_kuota_cuti",COALESCE(b.total_cuti,0)"total_cuti" FROM users_leave_quota a ';
      sql +=' LEFT JOIN ( SELECT a.leave_id, user_id, YEAR(a.leave_date)"tahun_cuti", COALESCE(COUNT(*),0)"total_cuti" FROM users_leave_date a INNER JOIN users_leave b ON a.leave_id = b.leave_id GROUP BY user_id, YEAR(a.leave_date) ) b ON a.user_id = b.user_id AND a.tahun = b.tahun_cuti ';
      sql += ' WHERE a.user_id = ? AND a.tahun = ? GROUP BY a.user_id ';
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