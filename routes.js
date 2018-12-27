'use strict';

module.exports = function (app) {
  // Base apps
  var todoListStaffBase = require('./controller/staff-base');

  app.route('/staff-base/list_menu/:user_id/:parent_id')
    .get(todoListStaffBase.listMenu);

  app.route('/staff-base/list_menu_all_child/:user_id')
    .get(todoListStaffBase.listMenuAllChild);


  // Dashboard
  var todoListDashboard = require('./controller/dashboard');

  app.route('/dashboard/lap_jaldin/:user_id/:tahun')
    .get(todoListDashboard.lapJaldin);

  app.route('/dashboard/user_leave/:user_id/:tahun')
    .get(todoListDashboard.userLeave);

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