var MysqlActiveRecord = require('mysql-activerecord');

var activeRecord = new MysqlActiveRecord.Adapter({
  host: "localhost",
  user: "root",
  password: "",
  database: "prod_tetools_v1_db"
});

module.exports = activeRecord;