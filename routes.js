'use strict';

module.exports = function (app) {
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