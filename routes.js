'use strict';

module.exports = function (app) {
  // Base apps
  var todoListStaffBase = require('./controller/staff-base');

  app.route('/staff-base/list_menu/:user_id/:parent_id')
    .get(todoListStaffBase.listMenu);


  // Dashboard
  var todoListDashboard = require('./controller/dashboard');

  app.route('/dashboard/lap_jaldin/:user_id/:tahun')
    .get(todoListDashboard.lapJaldin);

  // Users
  var todoListUsers = require('./controller/users');

  app.route('/')
    .get(todoListUsers.index);

  app.route('/users')
    .get(todoListUsers.users);

  app.route('/users/:id')
    .get(todoListUsers.findUser);

  app.route('/users')
    .post(todoListUsers.insertUser);

  app.route('/users')
    .put(todoListUsers.updateUser);
};