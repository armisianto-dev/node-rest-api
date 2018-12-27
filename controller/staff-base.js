'use strict';

var response = require('./../res');
var connection = require('./../conn');
var connectionAR = require('./../conn-ar');

exports.listMenu = function (req, res) {
  var where = [
    req.params.user_id,
    req.params.user_id,
    req.params.parent_id
  ]

  var sql = 'SELECT a.*, COALESCE(total_child,0)"total_child" FROM com_menu a ';
  sql += ' INNER JOIN com_role_menu b ON a.nav_id = b.nav_id ';
  sql += ' INNER JOIN com_role c ON b.role_id = c.role_id ';
  sql += ' INNER JOIN com_role_user d ON c.role_id = d.role_id ';
  sql += ' LEFT JOIN( SELECT a.nav_id, parent_id, COALESCE(COUNT(*),0)"total_child" FROM com_menu a ';
  sql += ' INNER JOIN com_role_menu b ON a.nav_id = b.nav_id '; 
  sql += ' INNER JOIN com_role c ON b.role_id = c.role_id '; 
  sql += ' INNER JOIN com_role_user d ON c.role_id = d.role_id '; 
  sql += ' WHERE active_st = "1" AND display_st = "1" AND d.user_id = ? ';
  sql += ' GROUP BY parent_id ) e ON a.nav_id = e.parent_id ';
  sql += ' WHERE active_st = "1" AND display_st = "1" AND d.user_id = ? AND a.parent_id = ? ';
  sql += ' ORDER BY nav_no, a.nav_id ';
  connection.query(sql, where, function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      response.ok(rows, res)
    }
  });
}

exports.index = function (req, res) {
  response.ok("Staff Base API", res)
};